const fs = require("fs");

const addMovie = (movieArr, movieObj) => {
  try {
    movieArr.push(movieObj);
    const stringyObj = JSON.stringify(movieArr);
    fs.writeFileSync(`./storage.json`, stringyObj, { flag: `a` });
  } catch (error) {
    console.log(error);
  }
};

//create list
const listMovies = (list, movieObj2) => {
  try {
    list.push(movieObj2);
    const stringyObj2 = JSON.stringify(list);
    fs.writeFileSync(`./storage.json`, stringyObj2, { flag: `a` });
  } catch (error) {
    console.log(error);
  }
};

//remove item
// const removeItem =(list, movieObj3) =>{
//   try {
//     list.remove(movieObj3);
//     const removestringe = JSON.stringify(list);
//   } catch (error){
//     console.log(error);
//   }

// }

//export modules
module.exports = {
  addMovie,
  listMovies,
  //removeItem,
};
