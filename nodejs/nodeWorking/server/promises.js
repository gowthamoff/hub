const path = require("path");
const fsPromises = require("fs").promises;

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "read.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, "files", "write.txt"),
      "its working done  hhahaha "
    );
    console.log("write complete");
    await fsPromises.appendFile(
      path.join(__dirname, "files", "write.txt"),
      "its working hi \nthank you edit workingcsijcdksdkcs"
    );
    console.log("append complete");
    await fsPromises.rename(
      path.join(__dirname, "files", "write.txt"),
      path.join(__dirname, "files", "renamefilecomplete.txt")
    );
    console.log("rename complete");
    await fsPromises.unlink(path.join(__dirname, "files", "read.txt"));
    console.log("delete complete");
  } catch (err) {
    console.error(`Eror ${err}`);
  }
};

fileOps();
