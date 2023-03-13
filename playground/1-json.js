const fs = require("fs");

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Haliday",
// };
// const bookJson = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJson);
let dataBuffer = fs.readFileSync("1-json.json");
let dataJson = dataBuffer.toString();
let data = JSON.parse(dataJson)
console.log(dataBuffer);
