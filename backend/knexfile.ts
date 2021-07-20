import dotenv from 'dotenv';

dotenv.config();

const config: {[k: string]: Object} = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      database: 'proffy',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      charset: 'utf-8',
    },
    migrations: {
      tableName: 'migrations',
      directory: './src/db/migrations',
    },
  },

  staging: {
    connection: {
      host: process.env.DB_HOST,
      database: 'proffy',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      charset: 'utf-8',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
      directory: './src/db/migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      database: 'proffy',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      charset: 'utf-8',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
      directory: './src/db/migrations',
    },
  },
};

export default config;
