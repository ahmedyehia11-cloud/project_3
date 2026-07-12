import userModel from "../../../../DB/models/user.model.js";
import { sendToken } from "../../../utils/middleware.js";
import bcrypt from "bcrypt";


export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    const checkEmail = await userModel.findOne({ email });
    if (checkEmail) {
        return res.status(400).json({ message: "Email already exists❌" })
    } else {
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SaltRounds));
        const newUser = await userModel.create({ name, email, password: hashedPassword })
        return res.status(201).json({ message: "User created successfully✅", newUser })
    }
}



export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "Email not found ❌" })
    } else {
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ message: "Invalid password❌" })
        } else {
            const token = sendToken({ name: user.name, email: user.email, userId: user._id })
            return res.status(200).json({ message: "Login successful✅", token })
        }
    }

}




export const update = async (req, res) => {
    const { name } = req.body;
    const userId = req.userId;
    const user = await userModel.findByIdAndUpdate(userId, { name }, { new: true });
    return res.status(200).json({ message: "User updated successfully✅", user });
}

export const deleteUser = async (req, res) => {
    const userId = req.userId;
    await userModel.findByIdAndDelete(userId);
    return res.status(200).json({ message: "User deleted successfully✅" });
}


export const getAllUsers = async (req, res) => {
    const users = await userModel.find();
    return res.status(200).json({ message: "Users retrieved successfully✅", users });
}