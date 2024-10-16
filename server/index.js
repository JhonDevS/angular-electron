const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/sqlite');
const userRoutes = require('./routes/user');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use('/api', userRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});

