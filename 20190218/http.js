const http = require('http');

const server = http.createServer((request, responce) => {
	const contentType = request.headers['content-type'];
	switch (contentType) {
		case 'text/plain':
			responce.setHeader('Content-type', 'text/plain');
			let str = "";
			let st = (new Date()).getTime();
			request.on('data', (data) => {
				str += data.toString('utf-8');
			});
			request.on('end', (data) => {
				let et = (new Date()).getTime();
				responce.end(`use ${et - st} ms, data size is: ${str.length}`);
			});
			break;
		default:
			responce.end('not supported content type');
			break;
	}
});

server.listen(666);

console.log('now server is on')