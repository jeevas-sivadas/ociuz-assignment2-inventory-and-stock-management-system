import mongoose from "mongoose";
import bcrypt from "bcrypt";
import connectDB from "../config/db.js";
import User from "../models/User.js";
import "dotenv/config";

async function createAdmin() {
    try {
        await connectDB();
        const existingAdmin = await User.findOne({
            role: "admin"
        });

        if (existingAdmin) {
            console.log("Admin already exists");
            return;
        }

        const ADMIN_NAME = process.env.ADMIN_NAME;
        const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
        const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

        if (!ADMIN_NAME || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
            console.log("Please provide all Admin credentials");
            return;
        }

        const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
        await User.create({
            name: ADMIN_NAME,
            email: ADMIN_EMAIL,
            password: hashedPassword,
            role: "admin"
        });
        console.log("Admin created successfully");
    }
    catch (error) {
        console.error("Error creating Admin:", error);
    }
    finally {
        await mongoose.connection.close();
    }
}
createAdmin();