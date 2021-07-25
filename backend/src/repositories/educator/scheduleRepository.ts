import { Knex } from 'knex';

import Schedule from '../../models/schedule';
import connection from '../../db/connection';

class ScheduleRepository {
  static async create(
    educatorId: number,
    schedules: Schedule[],
    trx: Knex.Transaction,
  ) {
    // eslint-disable-next-line no-param-reassign
    if (trx == null) trx = await connection.transaction();

    return trx('educators_schedules')
      .insert(
        schedules.map((schedule) => ({
          educator_id: educatorId,
          week_day: schedule.weekDay,
          starts_at: schedule.startsAt,
          ends_at: schedule.endsAt,
        })),
      )
      .returning('id');
  }
}

export default ScheduleRepository;
