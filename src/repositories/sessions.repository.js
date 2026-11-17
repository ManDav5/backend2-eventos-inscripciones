import UsersDAO from '../dao/users.dao.js'

class SessionsRepository{
    constructor(dao=UsersDAO){
        this.dao = dao;
    };

    async register(userData){
        return await this.dao.create(userData)
    };

    async login(userData){
        return await this.dao.find(userData.email);
    }
};

export default new SessionsRepository();