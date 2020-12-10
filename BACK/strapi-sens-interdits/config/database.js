module.exports = ({ env }) => ({
  defaultConnection: "mysql",
  connections: {
    mysql: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: process.env.DATABASE_HOST,
        port: 3306,
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
