import dotenv from 'dotenv';
import Server from './models/server';
dotenv.config();


// Server running
const server = new Server();
server.listen();

