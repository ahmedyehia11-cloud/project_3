import mongoose from "mongoose";

export const connectDB = async () => {
    return await mongoose.connect(process.env.MONGO_URI).then((result) => {
        console.log("MongoDB connected✔️")
    }).catch((err) => {
        console.log("MongoDB connection failed❌")
        console.log(err)
    }
    )
}