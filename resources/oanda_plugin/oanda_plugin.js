const { getCreateOrdersEndpoint, getAllAccountsEndpoint, getAccountDetailEndpoint, getAccountSummaryEndpoint, getAccountInstrumentsEndpoint, getAccountOrdersEndpoint, getAccountTransactionsEndpoint, getAccountTransactionDetailEndpoint, getAccountTradedEndpoint } = require("../end-points");
const { makeGetRequest, makePostRequest } = require("../http-client");

const OandaPlugin = {
    getAllUserAccounts: async() => {
        var url = getAllAccountsEndpoint();
        response = await makeGetRequest({ url: url });
        return await response;
    },
    getAccountDetail: async(accountId) => {
        var url = getAccountDetailEndpoint(accountId);
        response = await makeGetRequest({ url: url });
        return await response;
    },
    getAccountSummary: async(accountId) => {
        var url = getAccountSummaryEndpoint(accountId);
        response = await makeGetRequest({ url: url });
        return await response;
    },
    getAccountInstruments: async(accountId) => {
        var url = getAccountInstrumentsEndpoint(accountId);
        response = await makeGetRequest({ url: url });
        return await response;
    },
    getAccountOrders: async(accountId) => {
        var url = getAccountOrdersEndpoint(accountId);
        response = await makeGetRequest({ url: url });
        return await response;
    },
    getCreateOrders: async(accountId, orderRequest) => {
        // console.log("OrderRequest: ", orderRequest);
        var url = getCreateOrdersEndpoint(accountId);
        response = await makePostRequest({ url: url, data: { 'order': orderRequest } });
        return await response;
    },
    getAccountTransactions: async(accountId) => {
        var url = getAccountTransactionsEndpoint(accountId);
        response = await makeGetRequest({ url: url });
        return await response;
    },
    getAccountTransactionDetails: async(accountId, transId) => {
        var url = getAccountTransactionDetailEndpoint(accountId, transId);
        response = await makeGetRequest({ url: url });
        return await response;
    },
    getAccountTrades: async(accountId, state, count) => {
        var url = getAccountTradedEndpoint(accountId, state, count);
        response = await makeGetRequest({ url: url });
        return await response;
    },
    getMovingAverage: async(accountid, stock, period) => {
        var url = getAccountTradedEndpoint(accountId, state, count);
        response = await makeGetRequest({ url: url });
        return await response;
    },
}

module.exports = OandaPlugin;