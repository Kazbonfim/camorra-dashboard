import { Pool } from "pg";

// Apenas para fins de desenvolvimento; dotenv deve vir do arquivo principal do servidor/hosting
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT) || 5432,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
});

/**
 * Listener de conexão no pool de conexões.
 * @param {conn} conn - Parametro de conexão ao postgres.
 */
pool.on('connect', function (conn) {
    // console.log('Pool de conexões Postgres criado com sucesso!', conn);
    console.log('Pool de conexões Postgres criado com sucesso!');
});

/**
 * Listener para capturar erros fatais no pool de conexões.
 * @param {Error} error - O objeto de erro que contém info. sobre as falhas .
 */
pool.on('error', function (error) {
    console.error('Ocorreu um erro ao tentar estabelecer conexão', error);
});

export { pool };

// Teste in-loco
async function getUsuarios() {
    try {
        const res = await pool.query('select * from users;')
        console.log('Usuários encontrados', res.rows);
    } catch (error) {
        console.error('Houve um erro, por favor, verifique os logs', error)
    } finally {
        // Encerra o pool após a consulta para o script terminar.
        // Em uma aplicação real (ex: API), não faça isso.
        // A conexão deve permanecer aberta.
        console.log('Fechando conexões! Testes finalizados.')
        await pool.end();
    }
}

getUsuarios();