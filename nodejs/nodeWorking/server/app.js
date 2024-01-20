const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const os = require("os");

app.get("/print", (req, res) => {
  res.json({ message: "Hello working" });
});

app.listen(7000, () => {
  console.log("Server started on port 7000");
});

// console.log(os.type())
// console.log(os.homedir())
// console.log(os.version())

// console.log(global)

const path = require("path");
// console.log(__dirname)
// console.log(__filename)
// console.log("------")
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))

//math

const math = require("./math");
const { add, div } = require("./math");
console.log(math.mul(2, 3));
console.log(math.div(6, 3));
