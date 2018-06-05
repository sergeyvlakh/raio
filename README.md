# Overview
This project is a simple CRD web-application based on NodeJs/Express.
Node version required: >`9.0`.
Application has only two models:
1. User
2. Note

The relationship between these two is one-to-many: i.e. one user can have
multiple notes.

Schema definitions for these models are located in `src/server/schema/user.js`
and `src/server/schema/note.js`.

# Creating database
To create database run `npm run db`. Dumps (`notes.json`, `users.json`)
will be inserted to `$MONGODB_URI` from your `.env`.

# Tasks
1. Please refactor project what it is possible and needed
   hint: while refactoring repositories keep in mind that there might be thousands
   of notes per user.
2. Optimize and handle error-cases.
3. Create function which will measure execution time of repositories
methods.
4. Application has some bugs, be careful! 

# Etc
If you feel that you are running out of time and still have ideas 
for refactoring — write them down somewhere in comments or other place.