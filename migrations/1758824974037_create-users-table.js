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
  pgm.sql(`CREATE TABLE discord_users (
  discord_id BIGINT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  global_name VARCHAR(100),
  joined_at TIMESTAMP NOT NULL
);

CREATE TABLE activities (
  id SERIAL PRIMARY KEY,
  discord_id BIGINT NOT NULL,
  type VARCHAR(50) NOT NULL, -- Ex: 'message', 'voice', 'event_participation'
  points INTEGER NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (discord_id) REFERENCES discord_users (discord_id) ON DELETE CASCADE
);

CREATE TABLE user_scores (
  discord_id BIGINT PRIMARY KEY,
  total_points BIGINT DEFAULT 0,
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (discord_id) REFERENCES discord_users (discord_id) ON DELETE CASCADE
);`)
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */


const down = (pgm) => {
  pgm.sql(`
  DROP TABLE activities,user_scores,discord_users CASCADE;
`);
};

module.exports = { up, down, shorthands };