const fs = require("fs"); //module enables interacting with the file system
const { addMovie } = require("./utils/index");

const app = () => {
  if (
    process.argv[2] === `title` &&
    process.argv[4] === `actor` &&
    process.argv[6]
  ) {
    addMovie(process.argv[3], process.argv[5], process.argv[7]);
  } else {
    console.log("I dont understand");
  }
};

// console.log(process.argv);
app();
