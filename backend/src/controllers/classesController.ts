import { Request, Response } from 'express';
import Class from '../models/class';

import classRepository from '../repositories/classRepository';

class ClassesController {
  static async index(req: Request, res: Response) {
    const { subject, weekDay, time } = req.query;

    const classes: Class[] = await
    classRepository.index(String(subject), String(weekDay), String(time));

    const count = classes.length || 0;
    res.header('X-Total-Count', count.toString());

    return res.status(200).json(classes);
  }
}

export default ClassesController;
