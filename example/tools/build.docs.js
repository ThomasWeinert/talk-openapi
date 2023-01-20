#!/usr/bin/env node

const fs = require('fs');

const content = fs.readFileSync(__dirname + '/../index.html').toString();
const redocBundle = content.match(/([^"]+.redoc\.standalone\.js)/)[1];
fs.copyFileSync(
    __dirname + '/../' + redocBundle,
    __dirname + '/../build/api-doc/redoc.standalone.js'
);
/*fs.copyFileSync(
    __dirname + '/../' + redocBundle,
    __dirname + '/../build/api-doc/logo.svg'
);
*/
fs.writeFileSync(
    __dirname + '/../build/api-doc/index.html',
    content.replace(redocBundle, './redoc.standalone.js')
);
