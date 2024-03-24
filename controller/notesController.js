const NotesModel = require("../models/notesModel");

const createNote = async (req, res) => {
  try {
    const title = String(req.body._title);
    const note_body = String(req.body._note_body);

    const newNote = await NotesModel.create({
      title: title,
      note_body: note_body,
      status: "A",
    });
    res.status(201).json(newNote);
  } catch (error) {
    res.status(404).json(error);
  }
};
const getAllNotes = async (req, res) => {
  try {
    const search = req.query.search;
    let allNotes = [];
    if (search) {
      allNotes = await NotesModel.find({
        status: "A",
        $or: [
          {
            title: { $regex: search, $options: "i" },
          },
          {
            note_body: {
              $regex: search,
              $options: "i",
            },
          },
        ],
      });
    } else {
      allNotes = await NotesModel.find({ status: "A" });
    }

    res.status(200).json(allNotes);
  } catch (error) {
    res.status(404).json(error);
  }
};
const deleteNote = async (req, res) => {
  try {
    const del = req.params.del_id;
    const delNote = await NotesModel.findOneAndReplace(
      { _id: del, status: "A" },
      { status: "D" },
      { new: true }
    );
    res.status(201).json(delNote);
  } catch (error) {
    res.status(404).json(error);
  }
};
const getOneNote = async (req, res) => {
  try {
    const findId = req.params.id;
    const singleNote = await NotesModel.findOne({
      _id: findId,
      status: "A",
    });
    res.status(201).json(singleNote);
  } catch (error) {
    res.status(404).json(error);
  }
};
const updateNote = async (req, res) => {
  try {
    const findId = req.params.find_id;
    const title = req.body._title;
    const note_body = req.body.note_body;
    console.log(findId);
    console.log(title);
    console.log(note_body);

    const updated = await NotesModel.findOneAndUpdate(
      { _id: findId },
      {
        title: title,
        note_body: note_body,
      },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    console.log("error", error);
    res.status(404).json(error);
  }
};

module.exports = {
  createNote,
  getAllNotes,
  deleteNote,
  getOneNote,
  updateNote,
};
