import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: Schema.Types.String,
        required: true,
    },
    lastName: {
        type: Schema.Types.String,
        default: ''
    },
    email: {
        type: Schema.Types.String,
        default: '',
        unique: true,
    }
});

const User = mongoose.model('users', UserSchema);

export { User };
