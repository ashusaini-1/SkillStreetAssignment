const Note = require("../model/notesModel");

module.exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    console.log(title,content);
    await newNote.save();
    res.status(200).json({ success: true, message: "content saved successfully", });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
module.exports.retrieveNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(201).json({
      success: true,
      notes,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
module.exports.retrieveSingleNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.status(201).json({
      success: true,
      note,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
module.exports.updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
      updatedAt: Date.now(),
    });
    res.status(201).json({
      success: true,
      message:"updated Successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
module.exports.deleteNote = async (req, res) => {
  try {
    const notes = await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
    message:"note deleted Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
