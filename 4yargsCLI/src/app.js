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
const Movie = require("./models/models");

const command = yargs.argv._[0]; ///
// console.log(yargs.argv);

const app = async (args) => {
  try {
    //add the movie
    if (command === "add") {
      const movie = await addMovie({ title: args.title, actor: args.actor });
      console.log("New movie added: ", movie.title, movie.actor);
    }
    // read a list
    if (command === "list") {
      await listMovies();
    }

    if (command === "deleteT") {
      await deleteItemA({ title: args.title });
    }

    if (command === "deleteA") {
      await deleteItemN({ actor: args.actor });
    }

    if (command === "update") {
      await updateMovie({
        title: args.title,
        updateTitle: args.updateTitle,
      });
    }
    
    // if (command === "info") {
    //   console.log(
    //     " --add : add a list of movie \n --list : print list of movie \n --updateN : add a movie in the list \n --deleteN : delete name of the movie from the list \n --deleteA : remove actor from the list"
    //   );
    // }
  } catch (error) {
    console.log(error);
  }
};
app(yargs.argv);
