const { Router } = require("express");
const notes = Router();
const {
  createNote,
  getAllNotes,
  deleteNote,
  getOneNote,
  updateNote,
} = require("./controller/notesController");

notes
  .post("/", createNote)
  .get("/:id", getOneNote)
  .get("/", getAllNotes)
  .delete("/:del_id", deleteNote)
  .put("/:find_id", updateNote);

module.exports = notes;
