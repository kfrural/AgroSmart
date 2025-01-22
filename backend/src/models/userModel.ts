import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: 'user' }
);

export default User;
