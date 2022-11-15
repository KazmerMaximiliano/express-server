import express from "express";
import morgan from "morgan";
import products from "./routes/products.routes.js";

const app = express();

app.set("port", 3000);
app.use(morgan("dev"));
app.use(products);

export { app };
