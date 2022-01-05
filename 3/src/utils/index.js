const fs = require("fs");

const addMovie = (movieArray, movieObject) => {
  try {
    movieArray.push(movieObject);
    const stringyObj = JSON.stringify(movieArray);
    fs.writeFileSync(`./storage.json`, stringyObj);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMovie,
};
