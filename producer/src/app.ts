import * as dotenv from 'dotenv';
import  express from 'express';
import { Application } from 'express';

import connectdb from './database';

import productRoute from './routes/productRotue';


class App {
    private app: Application;
    constructor(){
        this.app = express();
         this.config();
         this.routes();
    }

      private config(): void {
        const port = process.env.PORT || 3000;
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }

    routes(){
        this.app.get('/', (req, res) => {
            res.send('Hello World');
        });

        this.app.use(productRoute)
    }
}


export default App;