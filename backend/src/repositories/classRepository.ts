import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

import Class from '../models/class';
import connection from '../db/connection';

class classRepository {
  static async create(
    educatorId: number,
    classes: Class[],
    trx: Knex.Transaction,
  ) {
    // eslint-disable-next-line no-param-reassign
    if (trx == null) trx = await connection.transaction();

    return trx('classes').insert(
      classes.map((klass) => ({
        educator_id: educatorId,
        key: uuidv4(),
        subject: klass.subject.trim().toUpperCase(),
        description: klass.description,
        price: klass.price,
        status: 0,
      })),
    );
  }

  static async index(subject: string, weekDay: string, time: string) {
    return connection('classes')
      .leftJoin('educators', 'classes.educator_id', 'educators.id')
      .leftJoin('educators_schedules', 'educators.id', 'educators_schedules.educator_id')
      .modify((qb) => {
        if (subject !== 'undefined') qb.where('subject', subject.trim().toUpperCase());
      })
      .modify((qb) => {
        if (!Number.isNaN(Number.parseInt(weekDay, 10))) {
          qb.where('week_day', Number.parseInt(weekDay, 10));
        }
      })
      .modify((qb) => {
        if (time !== 'undefined') qb.whereRaw(`'${time}' between starts_at and ends_at`);
      });
  }
}

export default classRepository;
