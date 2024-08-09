const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World, maxaad doonaysaa, halkani waa hargaysa oo idin leh soo dhawaada!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
