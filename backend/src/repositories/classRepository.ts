import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

import connection from '../db/connection';

type ClassParams = {
  subject: string;
  description: string;
  price: number;
};

class classRepository {
  static async create(
    educatorId: number,
    classes: ClassParams[],
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

  static async index(subject: string, weekDay: string, time: string, status: string) {
    return connection('classes')
      .select('classes.*', 'educators.key as educator_key')
      .leftJoin('educators', 'classes.educator_id', 'educators.id')
      .leftJoin(
        'educators_schedules',
        'educators.id',
        'educators_schedules.educator_id',
      )
      .modify((qb) => {
        if (subject !== 'undefined') {
          qb.where('subject', subject.trim().toUpperCase());
        }
      })
      .modify((qb) => {
        if (!Number.isNaN(Number.parseInt(weekDay, 10))) {
          qb.where('week_day', Number.parseInt(weekDay, 10));
        }
      })
      .modify((qb) => {
        if (time !== 'undefined') {
          qb.whereRaw(`'${time}' between starts_at and ends_at`);
        }
      })
      .modify((qb) => {
        if (!Number.isNaN(Number.parseInt(status, 10))) {
          qb.where('status', Number.parseInt(status, 10));
        }
      })
      .distinct();
  }

  static async patch(uuid: string, key: string, value: string) {
    try {
      const klass = await connection('classes')
        .select('*')
        .where({ key: uuid });

      if (!klass) return { success: true, error: 'Not found' };

      const newValues: { [k: string]: any } = {};
      newValues[key] = value;
      newValues.updated_at = new Date();

      await connection('classes').update(newValues).where({ key: uuid });

      return { success: true, error: '' };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);

      return { success: false, error: 'Error on updating class. Check your data!' };
    }
  }
}

export default classRepository;
