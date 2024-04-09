# express × cors

```typescript
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
```

## Docker で build

```shell
docker compose up -d
```

## 参考サイト

https://qiita.com/chenglin/items/5e563e50d1c32dadf4c3

https://www.express-gateway.io/docs/policies/cors/
