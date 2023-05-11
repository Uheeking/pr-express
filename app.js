const express = require('express');
const app = express();
const port = 3001;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", require("./slack"));

app.use((req, res, next) => { // 기본경로나 /user말고 다른곳 진입했을경우 실행
    res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });