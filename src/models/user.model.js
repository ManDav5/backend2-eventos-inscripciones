import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, default: 'user' }        
    },
    {
        timeStamps: true
    }
);

export const UserModel = model('User',eventSchema);