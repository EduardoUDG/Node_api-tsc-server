import express, { Application } from 'express';
import cors from 'cors';
import db from '../db/connection';

import homeRoutes from '../routes/home';
import webhookRoutes from '../routes/webhook';


class Server {

    private app:Application;
    private port:string;
    private apiPath = {
        home: '/api/home',
        webhook: '/webhook'
    }

    
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.middlewares();
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );
        // Read body
        this.app.use( express.json() );
        // Public path
        this.app.use( express.static('public') );
    }


    routes() {
        this.app.use( this.apiPath.home,    homeRoutes );
        this.app.use( this.apiPath.webhook, webhookRoutes );
    }

 
    listen() {
        this.app.listen( this.port, () => {
            console.log(`Server on port: ${this.port}`);
        });
    }

}

export default Server;