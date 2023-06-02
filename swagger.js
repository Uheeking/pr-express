const swaggerUi = require("swagger-ui-express")
const swaggereJsdoc = require("swagger-jsdoc")

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "유희왕의 포트폴리오",
      description:
        "Next.js를 기반으로 한 포트폴리오로 notion api 사용하여 db 기능 사용 ",
    },
    servers: [
      {
        url: "http://localhost:3001", // 요청 URL
      },
    ],
  },
  apis: ["./*.js"], //Swagger 파일 연동
}
const specs = swaggereJsdoc(options)

module.exports = { swaggerUi, specs }