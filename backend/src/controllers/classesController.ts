import { Request, Response } from 'express';
import Class from '../models/class';

import classRepository from '../repositories/classRepository';

type PatchParams = {
  klass: {
    key: string;
    value: string;
  };
};

class ClassesController {
  static async index(req: Request, res: Response) {
    const {
      subject, weekDay, time, status,
    } = req.query;

    const classes: Class[] = await classRepository.index(
      String(subject),
      String(weekDay),
      String(time),
      String(status),
    );

    const count = classes.length || 0;
    res.header('X-Total-Count', count.toString());

    return res.status(200).json({
      classes: classes.map((klass) => ({
        key: klass.key,
        subject: klass.subject,
        description: klass.description,
        price: klass.price,
        status: klass.status,
        educator: {
          key: klass.educator_key,
        },
      })),
    });
  }

  static async patch(req: Request, res: Response) {
    const { key } = req.params;
    const { klass }: PatchParams = req.body;

    const { success, error } = await classRepository.patch(
      key,
      klass.key,
      klass.value,
    );

    if (!success) return res.status(422).json({ error });
    if (error.length > 0) return res.status(404).json({ error: 'Not found' });

    return res.sendStatus(204);
  }
}

export default ClassesController;
