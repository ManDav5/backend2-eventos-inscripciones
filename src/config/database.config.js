import mongoose from 'mongoose'
import {envConfig} from './env.config.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(envConfig.mongoUri);
        console.log('Base de datos conectada correctamente');
        
    } catch (error) {
        console.log('Error al conectar la base de datos:', error.message);
        process.exit(1);
    }
};