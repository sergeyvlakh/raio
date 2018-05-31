import { User } from '../schema';

class UserRepository {

    static _cache = {};

    static async store(user) {
        await User.create(user.entity);
    }

    static async destroy(id) {
        await User.findByIdAndDelete(id);
    }

    static async find(options) {
        const cacheKey = this.buildCacheKeyFromArgs('find', options);
        if (this._cache[cacheKey] !== undefined) {
            return this._cache[cacheKey];
        }
        const res = await User.find(options);
        this._cache[cacheKey] = res;
        return res;
    }

    static buildCacheKeyFromArgs(fn, args) {
        let cacheKey = `${fn}`;
        if (typeof args === 'object' && Object.keys(args).length > 0) {
            cacheKey += ':(';
            for (let key in args) {
                cacheKey += `${key}:${args[key]},`;
            }
            cacheKey += ')';
        }
        return cacheKey;
    }

    static async findOne(id) {
        const cacheKey = this.buildCacheKeyFromArgs('find', id);
        if (this._cache[cacheKey] !== undefined) {
            return this._cache[cacheKey];
        }
        const res = await User.findOne(id);
        this._cache[cacheKey] = res;
        return res;
    }
}

export { UserRepository };
