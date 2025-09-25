import { Router, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

const app = Router();

export interface IGetUserAuthInfoRequest extends Request {
    user?: { username: string };
}

interface Usuario {
    username: string;
    passwordHash: string;
    cargo: string;
    created_at: string;
}

const usuariosDB: Usuario[] = [];
const SALT_ROUNDS = 10;

function authenticateToken(req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Acesso negado, token não fornecido!" });
    }

    jwt.verify(token, process.env.CRYPTO! as string, (error, user) => {
        if (error) {
            return res.status(403).json({ message: "Token inválido ou expirado" });
        }
        req.user = user as { username: string };
        next();
    });
}

// --- Rotas de Autenticação ---

app.get('/', (req: Request, res: Response) => {
    res.status(201).json({ message: "As demais rotas acessíveis são: /login, e /register, obrigado por testar" })
})

app.post('/register', async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username e Password são obrigatórios!" });
    }

    // Verifica se o usuário já existe
    const userExists = usuariosDB.find(u => u.username === username);
    if (userExists) {
        return res.status(409).json({ message: "Usuário já existe." });
    }

    try {
        const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
        const novoUsuario: Usuario = {
            username,
            passwordHash,
            cargo: "User",
            created_at: new Date().toISOString()
        };
        usuariosDB.push(novoUsuario);

        res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao cadastrar usuário, tente novamente!" });
    }
});

app.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const user = usuariosDB.find(u => u.username === username);
    if (!user) {
        return res.status(401).json({ message: "Usuário ou senha inválidos." });
    }

    try {
        const passwordMatch = await bcrypt.compare(password, user.passwordHash);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Usuário ou senha inválidos." });
        }

        const accessToken = jwt.sign({ username: user.username, loginAt: new Date()
         }, process.env.CRYPTO!, { expiresIn: "1h" });

        res.json({ accessToken });
    } catch (error) {
        res.status(500).json({ message: "Erro ao realizar login." });
    }
});

app.get('/users', authenticateToken, (req: IGetUserAuthInfoRequest, res: Response) => {
    const listaUsuarios = usuariosDB.map(({ username, cargo, created_at }) => ({
        username,
        cargo,
        created_at
    }));
    res.status(200).json(listaUsuarios);
});

export default app;