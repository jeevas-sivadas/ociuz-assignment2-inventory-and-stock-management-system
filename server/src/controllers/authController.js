import bcrypt from "bcrypt";
import User from "../models/User.js"

async function registerUser(req, res) {

    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        const existingEmail = await User.findOne({
            email: normalizedEmail
        });

        if (existingEmail) {
            return res.status(409).json({
                success: false,
                message: "Email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email: normalizedEmail,
            password: hashedPassword,
            role: "staff"
        });

        return res.status(201).json({
            success: true,
            message: "Staff created successfully"
        });
    }
    catch (error) {
        console.error("Error creating Staff:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    };
};

export default registerUser;
