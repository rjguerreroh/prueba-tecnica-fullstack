import { Request, Response, NextFunction } from 'express';
import { UserSchema } from '../schemas/user.schema';

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = UserSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details });
  }
  next();
}