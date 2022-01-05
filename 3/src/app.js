const fs = require("fs");
const { addMovie } = require("../../3/src/utils");

const app = () => {
  let movieArray;

  try {
    movieArray = JSON.parse(fs.readFileSync("storage.json"));
  } catch (error) {
    movieArray = [];
    console.log(movieArray);
  }

  if (process.argv[2] === `title` && process.argv[4] === `actor`) {
    addMovie(movieArray, { title: process.argv[3], actor: process.argv[5] });
  } else {
    console.log("i dont understand");
  }
};
