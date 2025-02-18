const { generateToken } = require("../utils/jwtHelper");

exports.login = async (event) => {
  try {
    const { email, password } = JSON.parse(event.body);

    // Dummy authentication (Replace with a real DB check)
    if (email === "test@example.com" && password === "password") {
      const user = { id: "123", email };
      const token = generateToken(user);

      return {
        statusCode: 200,
        body: JSON.stringify({ token }),
      };
    }

    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Invalid credentials" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
