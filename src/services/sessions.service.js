import SessionsRepository from "../repositories/sessions.repository.js";

class SessionsService{
    
    constructor(repository=SessionsRepository){
        this.repository=repository;
    }

    async register(userData){
        return await this.repository.register(userData);
    };

    async login(userData){
        return await this.repository.login(userData);
    };
};

export default new SessionsService;