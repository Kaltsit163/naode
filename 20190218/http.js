const http = require('http');

const server = http.createServer((request, responce) => {
	const contentType = request.headers['content-type'];
	switch (contentType) {
		case 'text/plain':
			responce.setHeader('Content-Type', 'application/json');
			let str = "";
			let st = (new Date()).getTime();
			request.on('data', (data) => {
				str += data.toString('utf-8');
			});
			request.on('end', (data) => {
				let et = (new Date()).getTime();
				responce.end(JSON.stringify({
					time: et - st,
					length: str.length
				}));
			});
			break;
		default:
			responce.end('not supported content type');
			break;
	}
});

server.listen(666);

console.log('now server is on')