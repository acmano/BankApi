import express from "express";
import cors from "cors";
import winston from "winston";
import cedenteRouter from "./routes/cedente.route.js";
import pagamentoRouter from "./routes/pagamento.route.js";
import sacadoRouter from "./routes/sacado.route.js";
import tituloRouter from "./routes/titulo.route.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormatter = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({filename: "BankAPI.log"})
  ],
  format: combine(
    label({ label: "BankAPI" }),
    timestamp(),
    myFormatter
  )
});

const app = express();
app.use(express.json());
app.use(cors());
app.use("/cedente", cedenteRouter);
app.use("/pagamento", pagamentoRouter);
app.use("/sacado", sacadoRouter);
app.use("/titulo", tituloRouter);
app.use((err, req, res, next) => {
  if (err.message) {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
  } else {
    logger.error(`${req.method} ${req.baseUrl} - ${err}`);
    res.status(400).send({ error: err });
  }
});
app.listen(3000, () => console.log("API Started!")); 