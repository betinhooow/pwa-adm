import { createConnection } from 'typeorm';

createConnection({
  "name": "default",
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "username",
  "password": "password",
  "database": "baasename",
  "entities": [__dirname + "./../../../../dist/modules/users/infra/typeorm/entities/User.js"],
  "migrations": [__dirname + "./../../../../dist/shared/infra/typeorm/migrations/*.js"],
  "cli": {
    "migrationsDir": __dirname + "./../../../../dist/shared/infra/typeorm/migrations"
  }
});
