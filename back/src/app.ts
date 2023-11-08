import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import userRoutes from './routes/user.routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routesSetup(); // Agrega esta línea para configurar las rutas
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private routesSetup(): void {
    this.app.use('/users', userRoutes);
  }
}

export default new App().app;
