import SessionsService from "../services/sessions.service.js";

export async function register(req,res,next) {
    try{
        const newUser = await SessionsService.register(req.body);
        res.status(201).json({
            status: 'success',
            message: 'Usuario creado',
            payload: {
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                email: newUser.email,
                role: newUser.role
            }
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
            payload: {
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                role: user.role
            }
        });
    } catch(error){
        next (error);
    }

};