import { NoteRepository } from '../repositories';
import { Note } from '../models';


const NoteController = {
    list: async function(params) {
        return await NoteRepository.find({ authorId: params });
    },
    one: async function(id) {
        const note = await NoteRepository.findOne({ _id: id });
        return Note.fromMongoObject(note);
    },
    create: async function(params) {
        const newNote = new Note(params.firstName, params.LastName, params.email);
        return await NoteRepository.store(newNote);
    },
    destroy: async function(id) {
        return await NoteRepository.destroy({ _id: id });
    }
};

export { NoteController };
