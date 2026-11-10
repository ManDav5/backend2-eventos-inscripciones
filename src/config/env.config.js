const getRequiredEnv = (key) => {
    const value = process.env[key];
    if (!value) {
        throw new Error (`No se encuentra la variable de entorno "${key}" en el archivo .env`)
    }
    return value;
};

export const envConfig ={
    port: Number(getRequiredEnv('PORT')),
    mongoUri: getRequiredEnv('MONGO_URI'),
};

