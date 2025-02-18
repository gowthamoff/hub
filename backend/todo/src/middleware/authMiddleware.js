const { verifyToken } = require("../utils/jwtHelper");

exports.authorize = async (event) => {
  const token = event.headers.Authorization || event.headers.authorization;

  if (!token) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Unauthorized: No token provided" }),
    };
  }

  const decoded = verifyToken(token.replace("Bearer ", ""));
  if (!decoded) {
    return {
      statusCode: 403,
      body: JSON.stringify({ message: "Forbidden: Invalid token" }),
    };
  }

  event.user = decoded; // Attach user data to event for further processing
  return null; // No error, proceed to the handler
};
