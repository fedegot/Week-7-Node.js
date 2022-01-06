const yargs = require("yargs");
const { addMovie, listMovies, removeItem } = require("./utils/index");
const fs = require("fs");

const app = () => {
  try {
    let movieArr;
    let listArr; //create an empty array

    try {
      const movieArr = JSON.parse(fs.readfileSync(`./storage.json`));
      const listArr = JSON.parse(fs.readfileSync(`./storage.json`));
      console.log(movieArr, listArr);
    } catch (error) {
      listArr = [];
      movieArr = [];
      console.log(movieArr, listArr);
    }
    try {
      if (process.argv[2] === `add`) {
        addMovie(movieArr, {
          title: yargs.argv.title,
          actor: yargs.argv.actor,
        });

        //create list
      } else if (process.argv[2] === `list`) {
        listMovies(listArr, {
          list: yargs.argv.list,
        });
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log();
  }

  try {
    //remove item from the list
    if (process.argv[2] === `remove`) {
      const movieArr2 = JSON.parse(fs.readfileSync(`./storage.json`));
      const movieprop = movieArr2.splice(-1);
      console.log(movieprop);
      //const movieArrN = movieArr.pop();
      //const removestring = JSON.stringify(movieArrN);
      //fs.writeFileSync(`./storage.json`, removestring, { flag: `a` });
    }
  } catch (error) {
    console.log("not working");
  }
};

app();
