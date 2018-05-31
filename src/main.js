#!/usr/bin/env node

require('dotenv').config({ path: path.join(path.dirname(__dirname), '.env') });

import { app } from './server/app';
import * as path from 'path';

import http from 'http';

const defaultPort = 3000;
const server = http.createServer(app);
server.listen(process.env.PORT || defaultPort);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    // handle specific listen errors with friendly messages
    if (error.code === 'EADDRINUSE') {
        console.error(`${process.env.PORT} is already in use`);
        process.exit(1);
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    console.log(`Listening on ${process.env.PORT || defaultPort}...`);
}
