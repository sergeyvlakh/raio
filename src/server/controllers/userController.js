import { UserRepository } from '../repositories';
import { User } from '../models';


const UserController = {
    list: async function(params) {
        return await UserRepository.find(params);
    },
    one: async function(id) {
        const user = await UserRepository.findOne({ _id: id });
        return User.fromMongoObject(user);
    },
    create: async function(params) {
        const newUser = new User(params.firstName, params.LastName, params.email);
        return await UserRepository.store(newUser);
    },
    destroy: async function(id) {
        return await UserRepository.destroy({ _id: id });
    }
};

export { UserController };
