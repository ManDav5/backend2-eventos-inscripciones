import EventsDAO from '../dao/events.dao.js'

class EventsRepository{
    constructor(dao=EventsDAO){
        this.dao = dao;
    };

    async create(eventData){
        return await this.dao.create(eventData)
    };
};

export default new EventsRepository();