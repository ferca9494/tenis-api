import { Application } from 'express';

import partidoRouter from './api/controllers/partido/router';
import jugadorRouter from './api/controllers/jugador/router';
import sumadorRouter from './api/controllers/sumador/router';

export default function routes(app: Application): void {
    app.use('/api/v1/partidos', partidoRouter);
    app.use('/api/v1/jugadores', jugadorRouter);
    app.use('/api/v1/sumador-de-puntos', sumadorRouter);
};