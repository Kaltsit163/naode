const fs = require('fs');

function isFileExists(path, callback) {
  fs.access(path, fs.constants.R_Ok, (err) => {
    if (err) {
      callback(null, false);
    } else {
      callback(null, true);
    }
  })
};

isFileExists('./event.ts', (err, state) => {
  console.log(state);
});