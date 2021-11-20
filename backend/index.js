import express from "express";
import dotenv from "dotenv";
import db from "./config/database.js";
import router from "./routes/auth.js";
import productRoutes from "./routes/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('DB Connected..')
} catch (err) {
    console.err('Connection error', err)
}

app.use(cors({ credentials: true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use('/products', productRoutes);
app.use(router);

const port = 5000;
app.listen(5000, () => {
    console.log(`Server running at port ${port}`)
});
