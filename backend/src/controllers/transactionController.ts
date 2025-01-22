import { Request, Response } from 'express';
import Transaction from '../models/transactionModel';

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Error creating transaction', error });
  }
};

export const getTransactions = async (_: Request, res: Response) => {
  try {
    const transactions = await Transaction.findAll();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions', error });
  }
};