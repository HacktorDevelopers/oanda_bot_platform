const express = require('express');
const { ACCESS_KEY } = require('../resources/config');
const OandaPlugin = require('../resources/oanda_plugin/oanda_plugin');
const router = express.Router();
var pageData = {};
pageData['access_key'] = ACCESS_KEY;

router.get('/', async(req, res) => {
    pageData['active'] = 'home';
    pageData['userAccounts'] = req.userAccounts;
    res.render('user/dashboard', pageData);
});

router.get('/account/:id', async(req, res) => {
    let accountDetail = await OandaPlugin.getAccountDetail(req.params.id);
    pageData['active'] = 'home';
    pageData['accountDetail'] = accountDetail;
    pageData['userAccounts'] = req.userAccounts;
    res.render('user/dashboard', pageData);
});

router.get('/transactions', (req, res) => {
    pageData['active'] = 'transactions';
    pageData['userAccounts'] = req.userAccounts;
    res.render('user/transactions', pageData);
});

router.get('/settings', (req, res) => {
    pageData['active'] = 'settings';
    pageData['userAccounts'] = req.userAccounts;
    res.render('user/settings', pageData);
});

router.get('/trade/:id/:state/:count', async(req, res) => {
    // Api to get All Trades
    var tradeResponse = await OandaPlugin.getAccountTrades(req.params.id, req.params.state, req.params.count)
    pageData['trades'] = tradeResponse['trades'];
    console.log(pageData);
    pageData['active'] = 'trade';
    res.render('user/trade/trade', pageData);
});



module.exports = router;