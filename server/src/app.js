import express from 'express';
import cors from "cors";
import authRouter from "./routes/authRoutes.js"

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Inventory & Stock Management API is running"
    });
});

export default app;