import { Router } from 'express';
import UserController from '../controllers/user.controller';

class UserRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.post('/', UserController.create);
    this.router.get('/', UserController.getAll);
  }
}

export default new UserRoutes().router;
