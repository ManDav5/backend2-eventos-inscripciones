import UsersDAO from '../dao/users.dao.js'
import { hashPassword, verifyPassword } from '../utils/hash.util.js'

class SessionsRepository{
    constructor(dao=UsersDAO){
        this.dao = dao;
    };

    async register(userData){
        userData.password = await hashPassword(userData.password);
        return await this.dao.create(userData);
    };

    async login(userData){
        const user = await this.dao.find(userData.email);
        if (user == null) throw new Error ("Credenciales inválidas")
        const verifiedPassword = await verifyPassword(userData.password, user.password);
        if (!verifiedPassword) throw new Error ("Credenciales inválidas");
        return user;
    }
};

export default new SessionsRepository();