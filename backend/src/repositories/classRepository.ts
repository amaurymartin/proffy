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
        subject: klass.subject,
        description: klass.description,
        price: klass.price,
        status: 0,
      })),
    );
  }
}

export default classRepository;
