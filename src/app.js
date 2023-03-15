const express = require('express');
const app = express();
const router = express.Router();
var port = process.env.PORT || 8080;

router.get('/', function (req, res) {
  res.send(`Hello World!111npm install express router`);
});

app.use('/', router);
app.listen(port);

console.log(`Running at Port ${port}`);