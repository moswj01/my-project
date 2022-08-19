// path: ./config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "wjtech-do-user-12243317-0.b.db.ondigitalocean.com"
      ),
      port: env.int("DATABASE_PORT", 25060),
      database: env("DATABASE_NAME", "defaultdb"),
      user: env("DATABASE_USERNAME", "doadmin"),
      password: env("DATABASE_PASSWORD", "AVNS_LrnyweMDmQaUqR75h8B"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
