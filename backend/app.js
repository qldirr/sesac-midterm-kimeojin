const express = require('express');
const app = express();
const { sequelize } = require('./models');
const todoRouter = require('./routes/todo');
const PORT = 8080


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/todos', todoRouter);

sequelize
  .sync({ force: false }) 
  .then(() => {
    app.listen(PORT, () => {
      console.log('database connection succeed');
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
