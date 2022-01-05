const yargs = require("yargs");
const { addMovie } = require("./utils/index");
const fs = require("fs");

const app = () => {
  try {
    let movieArr;
    try {
      const movieArr = JSON.parse(fs.readfileSync(`./storage.json`));
    } catch (error) {
      movieArr = [];
    }
    try {
      if (yargs.argv.add) {
        console.log(yargs.argv.title);
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log();
  }
};

app();
