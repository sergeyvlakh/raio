#!/usr/bin/env bash

set -euo pipefail

source .env

# Importing zzz

mongoimport --uri=$MONGODB_URI --file src/db_dump/notes.json --collection notes
mongoimport --uri=$MONGODB_URI --file src/db_dump/users.json --collection users
#mongoimport --uri=$MONGODB_URI --file src/db_dump/system.indexes.json --collection system.indexes

echo "Done"