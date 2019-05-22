const fs = require('fs');
const bencode = require('bencode');

// console.log(bencode);

const torrent = bencode.decode(fs.readFileSync('./puppy.torrent'));
console.log(torrent);