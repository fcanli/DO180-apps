
module.exports.params = {
  dbname: process.env.MYSQL_ENV_MYSQL_DATABASE,
  username: process.env.MYSQL_ENV_MYSQL_USER,
  password: process.env.MYSQL_ENV_MYSQL_PASSWORD,
  params: {
      host: "10.8.0.25",
      port: "30306",
      dialect: 'mysql'
  }
};
