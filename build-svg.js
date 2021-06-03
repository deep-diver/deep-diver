let fs = require("fs");
let got = require("got");
let qty = require("js-quantities");

fs.readFile("template.svg", "utf-8", (error, data) => {
  if (error) {
    return;
  }

  data = fs.writeFile("chat.svg", data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
});
