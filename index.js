const router = require("express").Router()

/**
 * @swagger
 * paths:
 *  /slack:
 *    get:
 *      summary: "slack으로 메시지 보내기"
 *      description: "Post방식으로 메시지 보내기 요청"
 *      tags: [Slack]
 *      responses:
 *        "200":
 *          description: 메시지 보내기 성공
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    ok:
 *                      type: boolean
 *                    users:
 *                      type: object
 *                      example:
 *                          [
 *                            { "name": "유희왕", "phone": "01010101012", "email": "dbgmldhkd@gmail.com", "text": "멋져부러" },
 *                            { "name": "유희왕언니", "phone": "01010101012", "email": "dbgmldhkd@gmail.com", "text": "집들어와라" },
 *                            { "name": "유희왕마미", "phone": "01010101012", "email": "dbgmldhkd@gmail.com", "text": "딸 오디니" },
 *                          ]
 */
module.exports = router