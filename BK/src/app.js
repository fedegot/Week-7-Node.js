const yargs = require("yargs");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteItemA,
  deleteItemN,
  breakLine,
} = require("./utils/index");
const connection = require("./db/connection");

const command = process.argv[2];
const app = async (args) => {
  breakLine();
  try {
    //add the movie
    if (command === "add") {
      const movieobj = { title: args.title, actor: args.actor };
      await connection(addMovie, movieobj);
    }
    // read a list
    if (command === "list") {
      await connection(listMovies);
    }
    // update a movie
    if (command === "updateN") {
      const updateObj = {
        title: args.title,
        updateValue: args.updateValue,
      };
      await connection(updateMovie, updateObj);
    }
    // delete movies name
    if (command === "deleteN") {
      const deleteObj = {
        title: args.title,
      };
      await connection(deleteItemN, deleteObj);
    }
    // delete movies Delete actors name
    if (command === "deleteA") {
      const deleteObj = {
        actor: args.actor,
      };
      await connection(deleteItemA, deleteObj);
    }

    if (command === "info") {
      console.log(
        " --add : add a list of movie \n --list : print list of movie \n --updateN : add a movie in the list \n --deleteN : delete name of the movie from the list \n --deleteA : remove actor from the list"
      );
    }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
