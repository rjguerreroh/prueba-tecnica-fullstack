import { Router } from 'express';
import FormCustomController from '../controllers/customForm.constroller';
import { validateFormCustom } from '../middlewares/validateFormCustom';

class FormCustomRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.post('/:id', validateFormCustom, FormCustomController.create);
    this.router.get('/:id', FormCustomController.getFormCustomByuser);
  }
}

export default new FormCustomRoutes().router;