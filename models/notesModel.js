const { model, Schema } = require("mongoose");

const NotesSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  note_body: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    value: ["A", "D"],
    default: "A",
    require: true,
  },
  date:{
    type: Date,
    require: true,
    default: Date.now,
  
  }
});

const NotesModel = model("Notes", NotesSchema);
module.exports = NotesModel;
