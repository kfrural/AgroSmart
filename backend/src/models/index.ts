import sequelize from '../config/database';

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};
