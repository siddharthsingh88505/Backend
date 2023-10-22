import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { UserModel } from "../models/userModel.js";

class UserController{
    // register user
    static registerUser = async (req, res) => {
        const { firstname, lastname, mobileno, email, password } = req.body;

        try {
            // check if the user already exists
            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
            return res.json({ success: false, message: 'User already exists' });
            }

            // hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create and save the new user
            const newUser = new UserModel({
            firstname,
            lastname,
            mobileno,
            email,
            password: hashedPassword,
            });
            await newUser.save();

            res.json({ success: true, message: 'User registered successfully' });
        }
        catch (error) {
            console.error('Error registering user:', error);
            res.status(500).json({ success: false, message: 'Something went wrong' });
        }
    }
    // login user
    static loginUser = async (req, res) => {
        const { email, password } = req.body;

        try {
            // find the user by email
            const user = await UserModel.findOne({ email });
            if (!user) {
            return res.json({ success: false, message: 'Invalid email or password' });
            }

            // compare the hashed password
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
            return res.json({ success: false, message: 'Invalid email or password' });
            }

            res.json({ success: true, message: 'Login successful', userId: user._id });
        }
        catch (error) {
            console.error('Error during login:', error);
            res.status(500).json({ success: false, message: 'Something went wrong' });
        }    
    }
}

export { UserController };