import {eventModel} from "../models/event.model.js";

class EventDAO{

    async create(eventData){
        return await eventModel.create(eventData)
    };
};

export default new EventDAO();