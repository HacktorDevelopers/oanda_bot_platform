const express = require('express');
const { ACCESS_KEY } = require('../resources/config');
const OandaPlugin = require('../resources/oanda_plugin/oanda_plugin');
const router = express.Router();
// var pageData = {
//     'layout': 'main'
// };
// pageData['access_key'] = ACCESS_KEY;

router.get('/', async(req, res) => {
    var pageData = {};
    let userAccounts = await OandaPlugin.getAllUserAccounts();
    pageData['active'] = 'account-detail';
    pageData['userAccounts'] = userAccounts;
    res.render('user/account/details', pageData);
});

router.get('/:id', async(req, res) => {
    var pageData = {};
    let accountDetail = await OandaPlugin.getAccountDetail(req.params.id);
    let accountTransactions = await OandaPlugin.getAccountTransactions(req.params.id);
    let accountInstruments = await OandaPlugin.getAccountInstruments(req.params.id);
    // console.log(accountTransactions);
    pageData['userAccounts'] = req.userAccounts;
    pageData['active'] = 'account-detail';
    pageData['accountDetail'] = accountDetail;
    pageData['accountInstruments'] = accountInstruments;
    pageData['accountTransactions'] = accountTransactions;
    res.render('user/account/details', pageData);
});

router.get('/:id/details', async(req, res) => {
    var pageData = {};
    pageData['layout'] = 'no-layout';
    let accountDetail = await OandaPlugin.getAccountDetail(req.params.id);
    let accountTransactions = await OandaPlugin.getAccountTransactions(req.params.id);
    let accountInstruments = await OandaPlugin.getAccountInstruments(req.params.id);
    // console.log(accountTransactions);
    pageData['active'] = 'account-detail';
    pageData['accountDetail'] = accountDetail;
    pageData['accountInstruments'] = accountInstruments;
    pageData['accountTransactions'] = accountTransactions;
    res.render('user/account/account_detail_loaded', pageData);
});

router.get('/:id/orders', async(req, res) => {
    var pageData = {};
    let accountOrders = await OandaPlugin.getAccountOrders(req.params.id);
    console.log(accountOrders);
    pageData['active'] = 'account-orders';
    pageData['userAccounts'] = req.userAccounts;
    pageData['accountId'] = req.params.id;
    pageData['accountOrders'] = accountOrders;
    res.render('user/account/orders', pageData);
});

router.post('/:id/orders', async(req, res) => {
    // console.log(req.body);
    var pageData = {};
    var createOrderResponse = await OandaPlugin.getCreateOrders(req.params.id, req.body);
    console.log(createOrderResponse)
    console.log(createOrderResponse.orderCreateTransaction);
    if (createOrderResponse.orderCreateTransaction) {
        pageData['response'] = createOrderResponse.orderCreateTransaction;
        pageData['status'] = true;
    } else {
        pageData['status'] = false;
    }
    pageData['accountOrderPage'] = `/user/accounts/${req.params.id}/orders`;
    res.render('user/account/order_creation_response', pageData)
});

router.get('/:id/orderForm', async(req, res) => {
    var pageData = {};
    let accountInstruments = await OandaPlugin.getAccountInstruments(req.params.id);
    pageData['accountInstruments'] = accountInstruments;
    pageData['accountId'] = req.params.id;
    pageData['createUrl'] = '/user/accounts/' + req.params.id + '/orders';
    pageData['layout'] = 'no-layout';
    res.render('user/account/create_order_form', pageData);
});

module.exports = router;