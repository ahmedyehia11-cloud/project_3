import mongoose from "mongoose";

export const noteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });


const noteModel = mongoose.model("Note", noteSchema);

export default noteModel;