const express = require('express');
const { getAllAccountsEndpoint, getAccountDetailEndpoint } = require('../resources/end-points');
const { makeGetRequest } = require('../resources/http-client');
const router = express.Router();

router.get('/accounts', async (req, res) => {
    var url = getAllAccountsEndpoint();
    response = await makeGetRequest({url: url})
    res.send(response);
});

router.get('/accounts/:id', async (req, res) => {
    var id = req.params.id;
    var url = getAccountDetailEndpoint(id);
    response = await makeGetRequest({url: url})
    res.send(response);
});

router.get('/trades', async (req, res) => {
    response = await makeGetRequest({url: "Hello"})
    res.send(response);
});

router.get('/transactions', async (req, res) => {
    response = await makeGetRequest({url: "Hello"})
    res.send(response);
});

module.exports = router;