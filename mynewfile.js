const fs = require('fs');
const jwt = require('jsonwebtoken');

function (req, res) {
  const reqPath = __dirname + req.query.filename; 

  let data = fs.readFileSync(reqPath, { encoding: 'utf8', flag: 'r' }); 
}

ip = "192.168.12.42"; 

const net = require('net');
var client = new net.Socket();
client.connect(80, ip, function() {
  // ...
});


let token = jwt.sign({ foo: 'bar' }, key, { algorithm: 'none' }); 
jwt.verify(token, key, { expiresIn: 360000 * 5, algorithms: ['RS256', 'none'] }, callbackcheck);