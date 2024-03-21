const notes_rout= require("./notesRoutes");
const express= require("express");
const cors= require("cors");
const {connect}= require("mongoose");
const app= express();

connect("mongodb://localhost:27017/notes");

app.use(cors());
app.use(express.json());
app.use("/notes",notes_rout);
app.listen(1808);
// My Notes