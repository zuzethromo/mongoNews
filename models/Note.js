let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let noteSchema = new Schema ({
    _headlineId: {
        type: Schema.Types.ObjectId,
        ref: "Headline"
    },
    date: String,
    noteText: String
});

let Note = mongoose.model("Note", noteSchema);

module.exports = Note;