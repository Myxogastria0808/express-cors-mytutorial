import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;
const IPADRESS = '127.0.0.1';

//参考サイト: https://qiita.com/chenglin/items/5e563e50d1c32dadf4c3
//参考サイト: https://www.express-gateway.io/docs/policies/cors/
const corsOptions = {
    origin: `http://127.0.0.1:8000`,
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type'],
    credentials: true,
    maxAge: 6000,
    optionSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.listen(PORT, IPADRESS, () => {
    console.log(`server stating port: http://${IPADRESS}:${PORT}/`);
}).on('error', (error) => {
    throw new Error(error.message);
});
