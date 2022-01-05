const fs = require("fs");

// const stringyObj = JSON.stringify({
//   //create a JSON file and we have the key and the object
//   title: process.argv[3],
//   actor: process.argv[5],
// });

// fs.writeFileSync(`./storage.json`, stringyObj);

const addMovie = (title, actor) => {
  try {
    const stringyObj = JSON.stringify({
      title: title,
      actor: actor,
    });
    fs.appendFileSync(`./storage.json`, stringyObj, { flag: `a` });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMovie,
};
