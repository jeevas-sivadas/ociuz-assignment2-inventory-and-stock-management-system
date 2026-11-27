import mongoose from "mongoose";

const stockTransactionSchema = new mongoose.Schema(
    {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        supplierId: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        type: { type: String, enum: ["stock_in", "stock_out", "adjustment"], required: true },
        quantity: { type: Number, required: true },
        previousStock: { type: Number, required: true },
        updatedStock: { type: Number, required: true },
        adjustmentDirection: { type: String, enum: ["increase", "decrease"] },
        reason: { type: String },
        transactionDate: { type: Date, default: Date.now }
    },
    {
        timestamps: true
    }
);
const StockTransaction = mongoose.model("StockTransaction", stockTransactionSchema);

export default StockTransaction;