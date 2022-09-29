// path: ./config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
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
