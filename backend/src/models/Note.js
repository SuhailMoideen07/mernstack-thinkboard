import mongoose from "mongoose";

//create a schema
// create a model

const noteSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    content:{
        type:String,
        required:true,
    },
},
    {
        timestamps: true   //created, updated at
    } );

const Note = mongoose.model("Note",noteSchema)
export default Note