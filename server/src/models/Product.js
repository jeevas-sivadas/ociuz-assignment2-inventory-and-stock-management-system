import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        sku: { type: String, required: true, unique: true, trim: true },
        description: { type: String },
        price: { type: Number, required: true },
        categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
        currentStock: { type: Number, default: 0 },
        minimumStockLevel: { type: Number, default: 5 },
        isActive: { type: Boolean, default: true }
    },
    {
        timestamps: true
    }
);
const Product = mongoose.model("Product", productSchema);

export default Product;