import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        contactPerson: { type: String },
        phone: { type: String },
        email: { type: String, required: true, unique: true, lowercase: true },
        address: { type: String },
        isActive: { type: Boolean, default: true }
    },
    {
        timestamps: true
    }
);

const Supplier = mongoose.model("Supplier", supplierSchema);

export default Supplier;