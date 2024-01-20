const express = require("express");
const app = express();
const path = require("path");
const logEvents = require("./middleware/logEvents");
const PORT = process.env.PORT || 3500;
const cors = require("cors");

app.use((req, res, next) => {
  logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, "reqLog.txt");
  console.log(`${req.method} ${req.path}`);
  next();
});

const whitelist = [
  "https://www.yoursite.com",
  "http://127.0.0.1:5500",
  "http://localhost:3500",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false })); //data access permission
app.use(express.json()); //data access permission
app.use(express.static(path.join(__dirname, "./public"))); //to access other css and picture files

app.get("^/$|index(.html)?", (req, res) => {
  // ()? is used to access index page without .html ext
  // for both / or index.html access
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "new-page.html");
});

app.get("/*", (req, res) => {
  res.status(301).sendFile(path.join(__dirname, "views", "404.html"));
});

const one = (req, res, next) => {
  console.log("one");
  next();
};
const two = (req, res, next) => {
  console.log("two");
  next();
};
const three = (req, res, next) => {
  console.log("three");
  res.send("Finished!");
};
app.get("/chain(.html)?", [one, two, three]);

app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("hello.html loading try");
    next();
  },
  (req, res) => {
    res.send("Hi nanba");
  }
);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
