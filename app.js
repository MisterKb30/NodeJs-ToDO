const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

const admin = require('./routes/user');
const shopRoutes = require('./routes/todolist');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bulma/css')));
app.use('/fonts', express.static(path.join(__dirname,'node_modules/@mdi/font')));

app.use(admin.routes);
app.use(shopRoutes);

app.listen(3000);