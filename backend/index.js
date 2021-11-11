import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";

const app = express();

try {
    await db.authenticate();
    console.log('DB Connected..')
} catch (err) {
    console.err('Connection error', err)
}

app.use(express.json());
app.use('/products', productRoutes);

const port = 3000;
app.listen(3000, () => {
    console.log(`Server running at port ${port}`)
});
