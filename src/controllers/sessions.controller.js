import SessionsService from "../services/sessions.service.js";

export const getSessionStatus= async (req,res) =>{
    return res.status(200).json({
        status: 'success',
        message: 'Módulo de sesiones iniciado'
    });
};

export async function register(req,res,next) {
    try{
        const newUser = await SessionsService.register(req.body);
        res.status(201).json({
            status: 'success',
            message: 'Usuario creado',
            payload: 'newUser'
        });
    } catch(error){
        next(error);
    }
};

export async function login(req,res,next) {
    try{
        const user = await SessionsService.login(req.body);
        res.status(200).json({
            status: 'success',
            message: 'Bienvenido',
            payload: user
        });
    } catch(error){
        next (error);
    }

};