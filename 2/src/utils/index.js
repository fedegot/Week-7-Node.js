const fs = require("fs");

// const stringyObj = JSON.stringify({
//   //create a JSON file and we have the key and the object
//   title: process.argv[3],
//   actor: process.argv[5],
// });

// fs.writeFileSync(`./storage.json`, stringyObj);

const addMovie = (name, actor, descri) => {
  const obj = {
    name: name,
    actor: actor,
    descri: descri,
  };
  let arr = [];
  const result = arr.push(obj);
  const stringyObj = JSON.stringify({ 0: arr });
  fs.writeFileSync(`./storage22.json`, stringyObj, { flag: `a` });
};

addMovie("29", "sads", "20");

// fs.appendFile( path, data[, options], callback )
// Parameters: This method accepts four parameters as mentioned above and described below:

// path: It is a String, Buffer, URL or number that denotes the source filename or file descriptor that will be appended to.
// data: It is a String or Buffer that denotes the data that has to be appended.
// options: It is an string or an object that can be used to specify optional parameters that will affect the output. It has three optional parameters:
// encoding: It is a string which specifies the encoding of the file. The default value is ‘utf8’.
// mode: It is an integer which specifies the file mode. The default value is ‘0o666’.
// flag: It is a string which specifies the flag used while appending to the file. The default value is ‘a’.
// callback: It is a function that would be called when the method is executed.
// err: It is an error that would be thrown if the method fails.
