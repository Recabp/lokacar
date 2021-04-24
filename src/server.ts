import express from "express";
import categoriesRoutes from "./routes/categories.routes";

const app = express();

app.use(categoriesRoutes);

app.listen(6666, () => console.log("server is running on port 6666!"));
