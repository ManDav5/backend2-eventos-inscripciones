import express from 'express';
import eventsRouter from './routes/events.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
app.use(express.json());

app.get('/api/health', (req, res) =>{
    res.status(200).send('Jelou Jelou, API funcionando');
});

app.use('/api/events',eventsRouter);
app.use('/api/session',sessionsRouter);

export default app;