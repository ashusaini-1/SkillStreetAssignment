const express=require("express");
const router=express.Router();
const {isAuthenticatedUser}=require('../middleware/auth');
const { createNote, retrieveNotes, retrieveSingleNote, updateNote, deleteNote,  } = require("../Controller/notesController");


router.route('/add').post(createNote,isAuthenticatedUser);
router.route('/get/notes').get(retrieveNotes,isAuthenticatedUser);
router.route('/note/:id').get(retrieveSingleNote,isAuthenticatedUser);
router.route('/update/:id').put(updateNote,isAuthenticatedUser);
router.route('/delete/note/:id').get(deleteNote,isAuthenticatedUser);



module.exports=router;