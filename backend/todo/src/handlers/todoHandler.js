const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const config = require("../config/config");

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: config.region,
  ...(process.env.IS_OFFLINE && {
    endpoint: "http://localhost:8000",
  }),
});

// Main Lambda handler
exports.main = async (event) => {
  switch (event.httpMethod) {
    case "POST":
      return createTodo(event);
    case "GET":
      if (event.pathParameters && event.pathParameters.id) {
        return getTodo(event);
      }
      return listTodos(event);
    case "PUT":
      return updateTodo(event);
    case "DELETE":
      return deleteTodo(event);
    default:
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid request method" }),
      };
  }
};

// Convert Express-style functions to Lambda-compatible functions
const createTodo = async (event) => {
  const { title, description } = JSON.parse(event.body);
  const todo = {
    id: uuidv4(),
    title,
    description,
    createdAt: new Date().toISOString(),
    completed: false,
  };
  await dynamoDB.put({ TableName: config.tableName, Item: todo }).promise();
  return { statusCode: 201, body: JSON.stringify(todo) };
};

const listTodos = async () => {
  const result = await dynamoDB.scan({ TableName: config.tableName }).promise();
  return { statusCode: 200, body: JSON.stringify(result.Items) };
};

const getTodo = async (event) => {
  const result = await dynamoDB
    .get({
      TableName: config.tableName,
      Key: { id: event.pathParameters.id },
    })
    .promise();

  if (!result.Item) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Todo not found" }),
    };
  }
  return { statusCode: 200, body: JSON.stringify(result.Item) };
};

const updateTodo = async (event) => {
  const { title, description, completed } = JSON.parse(event.body);
  const result = await dynamoDB
    .update({
      TableName: config.tableName,
      Key: { id: event.pathParameters.id },
      UpdateExpression:
        "set title = :title, description = :description, completed = :completed",
      ExpressionAttributeValues: {
        ":title": title,
        ":description": description,
        ":completed": completed,
      },
      ReturnValues: "ALL_NEW",
    })
    .promise();

  if (!result.Attributes) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Todo not found" }),
    };
  }
  return { statusCode: 200, body: JSON.stringify(result.Attributes) };
};

const deleteTodo = async (event) => {
  await dynamoDB
    .delete({
      TableName: config.tableName,
      Key: { id: event.pathParameters.id },
    })
    .promise();
  return { statusCode: 204, body: JSON.stringify({}) };
};
