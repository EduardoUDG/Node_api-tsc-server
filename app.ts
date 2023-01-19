import dotenv from 'dotenv';
import Server from './src/models/server';
dotenv.config();


// Server running
const server = new Server();
server.listen();

