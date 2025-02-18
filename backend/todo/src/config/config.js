const config = {
  tableName: process.env.TODOS_TABLE || "Todos",
  region: process.env.AWS_REGION || "us-east-1",
  // Add any other configuration variables here
};

module.exports = config;
