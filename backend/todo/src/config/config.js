const config = {
  tableName: process.env.TODOS_TABLE || "Todos",
  region: process.env.AWS_REGION || "ap-south-1",
};

module.exports = config;
