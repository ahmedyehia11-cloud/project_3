import noteModel from "../../../../DB/models/note.model.js"

export const createNote = async (req, res) => {
    const { title, content } = req.body;
    const addNote = await noteModel.insertMany({ title, content, createdBy: req.userId });
    res.status(201).json({ message: "Note created successfully✅", addNote });
}





export const getUserAllNotes = async (req, res) => {
    const notes = await noteModel.find({ createdBy: req.userId });
    res.status(200).json({ message: "Notes retrieved successfully✅", notes });
}

export const updateNote = async (req, res) => {
    const { noteId } = req.params;
    const { title, content } = req.body;
    const updatedNote = await noteModel.findOneAndUpdate({ _id: noteId, createdBy: req.userId }, { title, content }, { new: true });
    res.status(200).json({ message: "Note updated successfully✅", updatedNote });
}

export const deleteNote = async (req, res) => {
    const { noteId } = req.params;
    const deletedNote = await noteModel.findOneAndDelete({ _id: noteId, createdBy: req.userId });
    res.status(200).json({ message: "Note deleted successfully✅", deletedNote });
}