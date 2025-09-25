// src/types/global.d.ts
import 'express';

/**
 * Este arquivo de declaração global é usado para estender a interface global do Node.js,
 * permitindo que a variável `global.connection` seja tipada como um Pool do 'pg'.
 * Isso previne erros de tipagem (`TS2339`) e garante a segurança do tipo em todo o projeto.
 */
declare global {
    namespace NodeJS {
        interface Global {
            connection: import('pg').Pool;
        }
    }
}

export { };