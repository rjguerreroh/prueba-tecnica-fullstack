import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';


class UserController {
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      console.log("entrooo ...")
      const filePath = path.join(__dirname, '../db/usersDB.json');
      const usuariosData = fs.readFileSync(filePath, 'utf8');
      const usuarios = JSON.parse(usuariosData);
      res.status(200).json(usuarios);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

export default new UserController();
