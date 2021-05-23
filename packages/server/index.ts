import express from "express";
import proxy from "express-http-proxy";
import cors from "cors";

export const TESTNET_API = "http://localhost:3000";
const app = express();
const port = process.env.PORT ?? 3001;

app.use(cors());

app.use('/', proxy(TESTNET_API));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
