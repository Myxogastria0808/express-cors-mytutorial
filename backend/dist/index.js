"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 5000;
const IPADRESS = '0.0.0.0';
//参考サイト: https://qiita.com/chenglin/items/5e563e50d1c32dadf4c3
//参考サイト: https://www.express-gateway.io/docs/policies/cors/
const corsOptions = {
    origin: 'http://localhost:8000',
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type'],
    //credentials: true,
    maxAge: 6000,
    optionSuccessStatus: 204,
};
app.use((0, cors_1.default)(corsOptions));
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});
app.listen(PORT, IPADRESS, () => {
    console.log(`server stating port: http://${IPADRESS}:${PORT}`);
}).on('error', (error) => {
    throw new Error(error.message);
});
