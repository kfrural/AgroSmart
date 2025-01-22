import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Product from './productModel';

class Transaction extends Model {}

Transaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: 'id',
      },
    },
    type: { type: DataTypes.STRING, allowNull: false }, // entrada/saída
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false }, // pendente/aprovada/rejeitada
    reason: { type: DataTypes.STRING },
  },
  { sequelize, modelName: 'transaction' }
);

export default Transaction;