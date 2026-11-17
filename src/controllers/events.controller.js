import EventsService from "../services/events.service.js";

export async function createEvent(req,res,next) {
    try{
        const newEvent = await EventsService.create(req.body);
        res.status(201).json({
            status: 'success',
            message: 'Evento creado',
            payload: newEvent
        });
    } catch(error){
        next(error);
    }
};