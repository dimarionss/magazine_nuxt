require("dotenv").config();
// Подключаем бэкенд на Express.
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(express.json());
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({
  extended: false
});
// Подключаем mysql и делаем коннект к базе данных.
// Прописываем стандартные настройки mysql.
const mysql = require("mysql");

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};

let con = mysql.createConnection(dbConfig);
con.on('error', (err) => {
  console.log('db error', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    con = mysql.createConnection(dbConfig);;
  } else {
    throw err;
  }
});


app.post("/api/login", urlencodedParser, (request, response) => {
  if (!request.body) return response.sendStatus(400);
  let responseSend = JSON.stringify({
    text: '',
    type: ''
  });
  const sql = "SELECT * FROM users WHERE email = ?";
  con.query(sql, [request.body.email], (err, result, rows) => {
    if (err) throw err;
    if (result.length !== '') {
      if (result[0].password === request.body.password) {
        if (result[0].role === 1) {
          responseSend = JSON.stringify({
            text: 'АВТОРИЗАЦИЯ УСПЕШНА',
            type: 'success',
          });
          return response.status(200).send(responseSend);
        } else {
          responseSend = JSON.stringify({
            text: 'АВТОРИЗАЦИЯ УСПЕШНА',
            type: 'success',
          });
          return response.status(200).send(responseSend);
        }
      } else {
        responseSend = JSON.stringify({
          text: 'Не вверный пароль',
          type: 'error',
        });
        return response.status(400).send(responseSend);
      }
    } else {
      responseSend = JSON.stringify({
        text: 'Пользователя не существует',
        type: 'error',
      });
      return response.status(400).send(responseSend);
    }
  });


});
app.post("/api/add_adverising", urlencodedParser, (request, response) => {
  if (!request.body) return response.sendStatus(400);
  let responseSend = JSON.stringify({
    text: '',
    type: ''
  });
  const sql = `INSERT INTO advertising (title, img, text, phone, sale, adress, instagram, facebook, tiktok, telegram, site) VALUES ('${request.body.title}', '${request.body.img}', '${request.body.text}', '${request.body.phone}', '${request.body.sale}', '${request.body.adress}', '${request.body.instagram}', '${request.body.facebook}', '${request.body.tiktok}', '${request.body.telegram}', '${request.body.site}')`;
  con.query(sql, (err, result, rows) => {
    if (err) throw err;
    const sql = "SELECT * FROM advertising"
    con.query(sql, (err, result, rows) => {
      if (err) throw err;
      responseSend = JSON.stringify({
        text: 'Реклама добавлена успешно',
        type: 'success',
        advertising: result
      });
      return response.status(200).send(responseSend);
    })
  });

});

app.get("/api/get_adverising", urlencodedParser, (request, response) => {
  if (!request.body) return response.sendStatus(400);
  let responseSend = JSON.stringify({
    text: '',
    type: ''
  });
  const sql = "SELECT * FROM advertising";
  con.query(sql, (err, result, rows) => {
    if (err) throw err;
    responseSend = JSON.stringify({
      text: 'Рекламы успешно получены',
      type: 'success',
      advertising: result
    });
    return response.status(200).send(responseSend);
  });

});
// app.post("/api/registration", urlencodedParser, (request, response) => {
//   if (!request.body) return response.sendStatus(400);
//   let responseSend = JSON.stringify({
//     text: '',
//     type: ''
//   });
//   let sql = "SELECT * FROM users WHERE email = ?";
//   con.query(sql, [request.body.email], (err, result, rows) => {
//     if (err) throw err;
//     if (result.length != '') {
//       responseSend = JSON.stringify({
//         text: 'Пользователь уже существует',
//         type: 'error'
//       });
//       return response.status(400).send(responseSend);
//     } else {
//       sql = `INSERT INTO users (name, email, phone, instagram, password) VALUES ('${request.body.name}', '${request.body.email}', '${request.body.phone}', '${request.body.instagram}', '${request.body.password}')`;
//       con.query(sql, [request.body.email], (err, result, rows) => {
//         if (err) throw err;
//       })
//       responseSend = JSON.stringify({
//         text: 'Регистрация успешна',
//         type: 'success'
//       });
//       return response.status(200).send(responseSend);
//     }
//   });

// });



// Подключаем маршруты для управления моделью Page.
// const pageRoutes = require("./routes/page");
// app.use("/api/page", pageRoutes);

// Подключаем Nuxt в режиме nuxt.render. В этом примере нет отдельного процесса с Nuxt.
// Nuxt работает в качестве middleware для Express без своего сервера на Connect.
const {
  loadNuxt,
  build
} = require("nuxt");
const isDev = process.env.NODE_ENV !== "production";
async function start() {
  const nuxt = await loadNuxt(isDev ? "dev" : "start");
  app.use(nuxt.render);
  if (isDev) {
    build(nuxt);
  }
  app.listen(process.env.PORT);
}

// Запуск приложения.
start();
