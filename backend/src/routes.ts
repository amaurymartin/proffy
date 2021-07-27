import express from 'express';

import EducatorsController from './controllers/educatorsController';
import ClassesController from './controllers/classesController';

const routes = express.Router();

// Healthcheck
routes.get('/healthcheck', (_req, res) => {
  res.status(204).send();
});

// Educators resource
routes.post('/educators', EducatorsController.create);

// Classes resource
routes.get('/classes', ClassesController.index);
routes.patch('/classes/:key', ClassesController.patch);

export default routes;
