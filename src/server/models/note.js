class Note {
    constructor(text, slug, authorId, createdAt) {
        this.text = text;
        this.slug = slug;
        this.authorId = authorId;
        this.createdAt = createdAt;
    }
    get entity() {
        return {
            text: this.text,
            slug: this.slug,
            authorId: this.authorId,
            createdAt: this.createdAt,
        }
    }
    static fromMongoObject({ text, slug, authorId, createdAt }) {
        return new Note(text, slug, authorId, new Date(createdAt).toDateString());
    }
}

export { Note }
