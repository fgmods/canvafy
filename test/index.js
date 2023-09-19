const fs = require("fs");
const file = require("./codes/new-spotify");

const main = async function() {
  const image = await file.image();

  fs.writeFile(`./test/images/${file.name}.png`, image, (err) => {
    if (err) throw err;
  });
}

main();