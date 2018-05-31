import express from 'express';

import { NoteController, UserController } from '../controllers';
const router = express.Router();

/*
    Bear in mind that this all routes in this router
    start with /users
 */
router.get('/', async function(req, res, next) {
    const query = req.query;
    const users = await UserController.list(query);
    res.json(users).end();
});

router.delete('/:id', async function(req, res, next) {
    await UserController.destroy(req.params.id);
    res.json({ok: true}).end();
});

router.get('/:id', async function(req, res, next) {
    const user = await UserController.one(req.params.id);
    res.json(user).end();
});

router.delete('/:userID/notes/:noteID', async function(req, res, next) {
    await NoteController.destroy(req.params.userID, req.params.noteID);
    res.json({ok: true}).end();
});

router.get('/:userID/notes/:noteID', async function(req, res, next) {
    const user = await NoteController.one(req.params.noteID);
    res.json(user).end();
});

router.get('/:userID/notes', async function(req, res, next) {
    const notes = await NoteController.list(req.params.userID);
    res.json(notes).end();
});

export { router }
