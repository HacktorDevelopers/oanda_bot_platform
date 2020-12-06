const express = require('express');
const { ACCESS_KEY } = require('../resources/config');
const OandaPlugin = require('../resources/oanda_plugin/oanda_plugin');
const router = express.Router();
var pageData = {};
pageData['access_key'] = ACCESS_KEY;

router.get('/:id/:transId', async(req, res) => {
    let transactionDetail = await OandaPlugin.getAccountTransactionDetails(req.params.id, req.params.transId);
    pageData['transactionDetail'] = transactionDetail;
    pageData['layout'] = 'no-layout';
    console.log(transactionDetail)
    res.render('user/account/transaction_details', pageData);
});




module.exports = router;