import EventsRepository from "../repositories/sessions.repository.js";

class EventsService{
    
    constructor(repository=EventsRepository){
        this.repository=repository;
    }

    async createEvent(eventData){
        return await this.repository.create(eventData);
    };

};

export default new EventsService;