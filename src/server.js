import app from './app.js';
import {envConfig} from './config/env.config.js';
import {connectDB} from './config/database.config.js';

const PORT= envConfig.port;

const startServer = async () =>{
    try{
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Serividor corriendo en: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error ('Error al iniciar la aplicación', error.message);
        process.exit(1);
    }
};

startServer();
