const fs = require("fs");
const Movie = require("../models/models");

const addMovie = async (movieObj) => {
  try {
    const newMovies = new Movie(movieObj);
    return await newMovies.save();
  } catch (error) {
    console.log(error);
  }
};

const listMovies = async () => {
  try {
    const cursor = await Movie.find({});
    console.log(cursor);
  } catch (error) {
    console.log(error);
  }
};

const updateMovie = async (updateMovie) => {
  try {
    const movie = await Movie.updateOne(
      { title: updateMovie.title },
      { title: updateMovie.updateTitle },
      { new: true }
    );
    console.log(`${updateMovie} has been update to ${movie.title}`);
  } catch (error) {
    console.log(error);
  }
};

//delete name of the movie from the list
const deleteItemN = async (deleteObj) => {
  try {
    await Movie.deleteOne(deleteObj);
    console.log(`the actor has been canceled from the list`);
  } catch (error) {
    console.log(error);
  }
};

//delete name of the movie from the list
const deleteItemA = async (deleteObj) => {
  try {
    await Movie.deleteOne(deleteObj);
    console.log(`the actor has been canceled from the list`);
  } catch (error) {
    console.log(error);
  }
};

const breakLine = async () => {
  console.log(
    "\n _______________________________________________________ \n \n Type info for have all the commands \n _______________________________________________________ \n"
  );
};

//export modules
module.exports = {
  addMovie,
  listMovies,
  updateMovie,
  deleteItemA,
  deleteItemN,
  breakLine,
  //removeItem,
};
