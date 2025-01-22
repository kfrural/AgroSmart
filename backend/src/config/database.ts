import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false, // esse trem so pra tirar os log do sql aqui na prod
});

export default sequelize;
