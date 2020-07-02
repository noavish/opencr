require('dotenv').config();

module.exports = {
   "type": "postgres",
   "host": "vcspostgres.postgres.database.azure.com",
   "port": 5432,
   "username": process.env.TYPEORM_USERNAME,
   "password": process.env.TYPEORM_PASSWORD,
   "extra": {
     "ssl": true
   },
   "database": "mentorapp",
   "synchronize": true,
   "logging": true,
   "entities": [
     "src/entity/**/*.ts"
   ],
   "migrations": [
     "src/migration/**/*.ts"
   ],
   "subscribers": [
     "src/subscriber/**/*.ts"
   ],
   "cli": {
     "entitiesDir": "src/entity",
     "migrationsDir": "src/migration",
     "subscribersDir": "src/subscriber"
   }
}