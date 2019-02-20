const http = require('http');
const query = require('querystring');
const URL = require('url');

const server = http.createServer((request, responce) => {
	const contentType = request.headers['content-type'];
	switch (contentType) {
		case 'text/plain':
			{
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
			}
		case 'application/json':
			{
				responce.setHeader('Content-Type', 'application/json');
				let str = "";
				let st = (new Date()).getTime();
				request.on('data', (data) => {
					str += data.toString('utf-8');
				});
				request.on('end', (data) => {
					let et = (new Date()).getTime();
					let jsonRes = undefined;
					try {
						jsonRes = JSON.parse(jsonRes)
					} catch (error) {
						responce.statusCode = 400;
						responce.end('you bad bad');
					};
					responce.end(JSON.stringify(jsonRes));
				});
				break;
			}
		case 'application/x-www-form-urlencoded':
			{
				responce.setHeader('Content-Type', 'text/plain');
				let str = "";
				request.on('data', (data) => {
					str += data.toString('utf-8');
				});
				console.log(URL.parse(request.url), true)
				request.on('end', (data) => {
					console.log(query.parse(str));
					responce.end(str);
				});
				break;
			}
		case 'multipart/form-data':
			{
				request.on('end', (data) => {
					responce.end(str);
				});
			}
			break;
		default:
			responce.end('not supported content type');
			break;
	}
});

server.listen(666);

console.log('now server is on');