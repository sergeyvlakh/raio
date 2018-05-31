import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    text: {
        type: String,
        default: "",
    },
    slug: {
        type: String,
        require: true,
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    createdAt: {
        type: Schema.Types.Date,
        default: Date.now
    }
});

const Note = mongoose.model('notes', NoteSchema);

export { Note };
