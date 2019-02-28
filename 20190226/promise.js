const fs = require('fs');

const cb = () => {
	console.log(1);
	fs.appendFile('./111.js', "'return new promise'", () => {
		console.log('append ok');
	});
};

fs.access('./111.js', cb);