import mongoose from "mongoose";
import bcrypt from "bcrypt";
import connectDB from "../config/db.js";
import User from "../models/User.js"

async function createAdmin() {
    await connectDB();
    const existingAdmin = await User.findOne({
        role: "admin"
    });
    if (existingAdmin) {
        console.log("Admin already exists");
        return;
    }
}