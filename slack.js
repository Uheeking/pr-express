const { WebClient } = require("@slack/web-api");
require("dotenv").config();
const express = require("express");
const router = express.Router();

const API_TOKEN = process.env.API_TOKEN;
const web = new WebClient(API_TOKEN);
const conversationId = process.env.CONVERSATIONID;

router.post("/", (req, res) => {
  (async () => {
    // Post a message to the channel, and await the result.
    // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
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

    // The result contains an identifier for the message, `ts`.
    console.log(
      `Successfully send message ${result} in conversation ${conversationId}`
    );
    res.send({ code: 200, message: "메시지가 성공적으로 전송되었습니다. " });
  })();
});

module.exports = router;
