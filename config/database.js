// path: ./config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "app-d7968c65-68c1-4d86-8ff7-49649cfe756e-do-user-12172055-0.b.db.ondigitalocean.com"
      ),
      port: env.int("DATABASE_PORT", 25060),
      database: env("DATABASE_NAME", "defaultdb"),
      user: env("DATABASE_USERNAME", "doadmin"),
      password: env("DATABASE_PASSWORD", "AVNS_y7cuJLbkl7exbPnQEt8"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        ca: env("DATABASE_CA"),
      },
    },
    debug: false,
  },
});
