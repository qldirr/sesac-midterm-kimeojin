const express = require('express');
const app = express();
const { sequelize } = require('./models');
const indexRouter = require('./routes/index');
const PORT = 8080


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);

// 테이블을 생성하고 처음에만 force : true 로 실행하고 그 뒤로는 false로 변경하고 실행
sequelize
  .sync({ force: false }) // force : true -> 서버 실행때마다 테이블 재생성(데이터 다 날아감), false -> 서버 실행 시 테이블 없으면 생성
  .then(() => {
    app.listen(PORT, () => {
      console.log('database connection succeed');
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
