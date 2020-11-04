module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '212.129.43.215'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'sens-interdit'),
        username: env('DATABASE_USERNAME', 'sens-interdit'),
        password: env('DATABASE_PASSWORD', 'F8yuDi3A2ecI'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
