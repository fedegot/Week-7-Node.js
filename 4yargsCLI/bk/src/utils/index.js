const fs = require("fs");

const addMovie = (movieArr, movieObj) => {
  try {
    movieArr.push(movieObj);
    const stringyObj = JSON.stringify(movieArr);
    fs.writeFileSync(`./storage.json`, stringyObj);
  } catch (error) {
    console.log(error);
  }
};

//create list
const listMovies = (list, movieObj2) => {
  try {
    list.push(movieObj2);
    const stringyObj2 = JSON.stringify(list);
    fs.writeFileSync(`./storage.json`, stringyObj2);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMovie,
  listMovies,
};
