class User {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    get entity() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
        }
    }
    static fromMongoObject({ firstName, lastName, email }) {
        return new User(firstName, lastName, email);
    }
}

export { User }
