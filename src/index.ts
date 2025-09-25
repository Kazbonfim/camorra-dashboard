import express, { Request, Response } from 'express';
import dotenv from 'dotenv' // Importando dotenv
import * as bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/auth.routes'

// Configurações extras
dotenv.config();

/**
 * @param app cuidará de inicializar o servidor usando express
 * @returns não retornará nada, apenas iniciará a instância
 */
const app = express();

// Lidando com dados em json
app.use(bodyParser.json());

// Lidando com cors, e seus erros
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

/**
 * @param port a porta principal, onde a aplicação deve rodar.
 * @returns em caso de o .env estar ausente, usaremos uma porta padrão, neste caso 3000. Note que, em alguns casos é preciso dar um realod pro intelissense pegar os valores no .env.
 */
const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => {
    console.log(`App rodando na porta http://localhost:${port}`);
}).on('error', (error) => {
    console.error(`Falha em iniciar o servidor na porta http://localhost:${port}`)
})