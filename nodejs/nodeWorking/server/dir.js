const fs = require("fs");
if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory created");
  });
} else {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory deleted");
  });
}
process.on("uncaughtException", (err) => {
  console.error(`Here is the error ${err}`);
  process.exit(1);
});
