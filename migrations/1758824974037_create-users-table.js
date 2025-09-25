/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
const up = (pgm) => {
    pgm.sql(`create table
  users (
    uuid uuid primary key default gen_random_uuid (),
    username varchar(100) not null,
    email varchar(100) unique not null,
    password varchar(100) not null,
    created_at timestamp default current_timestamp
  );
  
  create table
  products (
    uuid uuid primary key default gen_random_uuid (),
    name varchar(255) not null,
    description text,
    price numeric(10, 2) not null,
    created_by_user_uuid uuid,
    created_at timestamp default current_timestamp,
    constraint fk_user foreign key (created_by_user_uuid) references users (uuid) on delete cascade
  );`)
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
const down = (pgm) => {
    pgm.sql(`
    DROP TABLE products;
    DROP TABLE users;
  `);
};

module.exports = { up, down, shorthands };