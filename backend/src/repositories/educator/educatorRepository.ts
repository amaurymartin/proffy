import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

import Educator from '../../models/educator';
import connection from '../../db/connection';

class EducatorRepository {
  static async create(educator: Educator, trx: Knex.Transaction) {
    const {
      name, avatar, email, whatsapp, bio,
    } = educator;

    // eslint-disable-next-line no-param-reassign
    if (trx == null) trx = await connection.transaction();

    const [educatorId] = await trx('educators')
      .insert({
        key: uuidv4(),
        name,
        avatar,
        email,
        whatsapp,
        bio,
      })
      .returning('id');

    return educatorId;
  }
}

export default EducatorRepository;
