import * as _ from '../schema';

import mongoose from 'mongoose';

//Set up default mongoose connection
const mongoDB = process.env.MONGODB_URI || 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
export { db }
