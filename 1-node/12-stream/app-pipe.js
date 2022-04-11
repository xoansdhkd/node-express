const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./12-stream/file.txt');
const writeStream = fs.createWriteStream('./12-stream/file4.txt');
const piping = readStream.pipe(writeStream);
piping.on('finish', () => {
  console.log('done!!');
});

const zlibStream = zlib.createGzip();
const writeStream2 = fs.createWriteStream('./12-stream/file4.zip');
const piping2 = readStream.pipe(zlibStream).pipe(writeStream2);
piping2.on('finish', () => {
  console.log('done!!');
});

const http = require('http');
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('./12-stream/file.txt');
  stream.pipe(res);
});
server.listen(3000);
