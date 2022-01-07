const yargs = require("yargs");
const { addMovie, listMovies } = require("./utils/index");
const fs = require("fs");

const app = () => {
  try {
    let movieArr;
    try {
      const movieArr = JSON.parse(fs.readfileSync(`./storage.json`));
      console.log(movieArr);
    } catch (error) {
      movieArr = [];
      console.log(movieArr);
    }
    try {
      if (process.argv[2] === `add`) {
        addMovie(movieArr, {
          title: yargs.argv.title,
          actor: yargs.argv.actor,
        });

        //create list
      } else if (process.argv[2] === `list`) {
        listMovies(movieArr, {
          list: yargs.argv.list,
        });
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log();
  }
};

app();
