const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const bodyParser = require("body-parser");
const { WebClient } = require("@slack/web-api");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const API_TOKEN = process.env.API_TOKEN;
const web = new WebClient(API_TOKEN);
const conversationId = process.env.CONVERSATIONID;

app.post("/slack", (req, res) => {
  (async () => {
    const result = await web.chat.postMessage({
      text:
        "*이름 :* " +
        req.body.name +
        "\n*휴대폰 번호 :* " +
        req.body.phone +
        "\n*이메일 :* " +
        req.body.email +
        "\n*전할 내용 :* " +
        req.body.text,
      channel: conversationId,
    });

    console.log(
      `Successfully send message ${result} in conversation ${conversationId}`
    );
    res.status(200).send({ code: 200, message: "메시지가 성공적으로 전송되었습니다. " });
    res.status(404).send({ code: 404, message: "메시지 전송이 실패되었습니다. " });
  })();
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
