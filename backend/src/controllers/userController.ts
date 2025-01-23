import { Request, Response } from 'express';
import User from '../models/userModel';

// Exemplo: Criar usuário
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar usuário', error });
  }
};

// Exemplo: Obter usuários
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter usuários', error });
  }
};
