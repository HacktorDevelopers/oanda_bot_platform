const express = require('express');
const { PORT } = require('./resources/config');
const path = require('path');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const OandaPlugin = require('./resources/oanda_plugin/oanda_plugin');

dotenv.config();

var app = express();

// handlebar middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    helpers: require('./resources/handle-bar-helpers'),
}))
app.set('view engine', 'handlebars')

// Body Parser middle ware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// You can set static folders
app.use(express.static(path.join(__dirname, 'public')))

app.use(async(req, res, next) => {
    let userAccounts = await OandaPlugin.getAllUserAccounts();
    req.userAccounts = userAccounts;
    console.log(`${req.protocol}://${req.hostname}${req.url} => ${req.method}`);
    next();
})

// Body Parser middle ware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/auth', require('./routes/auth-route'));
app.use('/user', require('./routes/user-route'));
app.use('/user/accounts', require('./routes/user-account-route'));
app.use('/user/transactions', require('./routes/user-transaction-route'));
app.use('/oanda', require('./routes/oanda-route'));
app.use('/bot', require('./routes/bot-route'));
app.use('/', require('./routes/bot-route'));


app.listen(PORT, () => console.log("Server Started: Listening to port: " + PORT))