import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, _: Request, res: Response, __: NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'An unexpected error occurred', error: err.message });
};