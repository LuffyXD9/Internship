const express  = require('express');
const app = express();

app.listen(3000);
app.use(express.urlencoded({
    extended: true
  }))

app.set('view engine', 'ejs');

const countryRouter = require('./routes/country');


app.use('/', countryRouter);

