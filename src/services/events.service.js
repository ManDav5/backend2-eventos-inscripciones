import EventsRepository from "../repositories/events.repository.js";

class EventsService{
    
    constructor(repository=EventsRepository){
        this.repository=repository;
    }

    async create(eventData){
        return await this.repository.create(eventData);
    };

};

export default new EventsService;