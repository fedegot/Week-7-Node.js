const fs = require("fs");

const addMovie = async (collection, movieObj) => {
  try {
    await collection.insertOne(movieObj);
    console.log(`successfully added ${movieObj.title}.`);
  } catch (error) {
    console.log(error);
  }
};

const listMovies = async (collection) => {
  try {
    const cursor = await collection.find({});
    const movieArr = await cursor.toArray();
    console.log(movieArr);
  } catch (error) {
    console.log(error);
  }
};

const updateMovie = async (collection, updateObj) => {
  try {
    await collection.updateOne(
      { title: updateObj.title },
      { $set: { title: updateObj.updateValue } }
    );
    console.log(`its been update`);
  } catch (error) {
    console.log(error);
  }
};

//delete name of the movie from the list
const deleteItemN = async (collection, deleteObj) => {
  try {
    await collection.deleteOne({ title: deleteObj.title });
    console.log(`the ${deleteObj.title} has been canceled`);
  } catch (error) {
    console.log(error);
  }
};

//delete name of the movie from the list
const deleteItemA = async (collection, deleteObj) => {
  try {
    await collection.deleteOne({ actor: deleteObj.actor });
    console.log(`the ${deleteObj.actor} has been canceled`);
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
