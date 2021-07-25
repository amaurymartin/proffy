import express from 'express';

import EducatorsController from './controllers/educatorsController';

const routes = express.Router();

// Healthcheck
routes.get('/healthcheck', (_req, res) => {
  res.status(204).send();
});

routes.post('/educators', EducatorsController.create);

export default routes;
