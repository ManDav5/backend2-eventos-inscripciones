import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: Date, required: true },
        location: { type: String, required: true },
        capacity: { type: Number, required: true }
    },
    {
        timeStamps: true
    }
);

export const EventModel = model('Event',eventSchema)