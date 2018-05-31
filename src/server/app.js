import express from 'express';
import path from 'path';
import logger from 'morgan';

import './schema/db';

import { router as indexRouter } from './routes/index';
import { router as usersRouter } from './routes/users';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(path.dirname(path.dirname(path.dirname(__filename))), 'src', 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

export { app }
