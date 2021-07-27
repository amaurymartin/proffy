import { Request, Response } from 'express';

import connection from '../db/connection';

import educatorRepository from '../repositories/educator/educatorRepository';
import classRepository from '../repositories/classRepository';
import scheduleRepository from '../repositories/educator/scheduleRepository';

type EducatorParams = {
  educator: {
    name: string;
    avatar: string;
    email: string;
    whatsapp: string;
    bio: string;
    classes: [
      {
        subject: string;
        description: string;
        price: number;
      }
    ];
    schedules: [
      {
        weekDay: number;
        startsAt: string;
        endsAt: string;
      }
    ];
  };
};

class EducatorsController {
  static async create(req: Request, res: Response) {
    const { educator }: EducatorParams = req.body;

    const trx = await connection.transaction();

    try {
      const educatorId = await educatorRepository.create(educator, trx);
      await classRepository.create(educatorId, educator.classes, trx);
      await scheduleRepository.create(educatorId, educator.schedules, trx);

      await trx.commit();

      return res.status(201).json(educatorId);
    } catch (error) {
      console.error(error);

      await trx.rollback();

      return res
        .status(422)
        .json({ error: 'Error on creating educator. Check your data!' });
    }
  }
}

export default EducatorsController;
