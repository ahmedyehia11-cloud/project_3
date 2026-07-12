import express from "express";
import * as noteController from "./controller/note.controller.js";
import { verifyToken } from "../../utils/middleware.js";
const router = express.Router();

router.post('/create', verifyToken, noteController.createNote);
router.get('/getNotes', verifyToken, noteController.getUserAllNotes);
router.put('/update/:noteId', verifyToken, noteController.updateNote);
router.delete('/delete/:noteId', verifyToken, noteController.deleteNote);





export default router;