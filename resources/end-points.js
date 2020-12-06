exports.getAllAccountsEndpoint = () => 'v3/accounts';
exports.getAccountDetailEndpoint = (accountId) => 'v3/accounts/' + accountId;
exports.getAccountSummaryEndpoint = (accountId) => 'v3/accounts/' + accountId + '/summary';
exports.getAccountInstrumentsEndpoint = (accountId) => 'v3/accounts/' + accountId + '/instruments';
exports.getAccountOrdersEndpoint = (accountId) => 'v3/accounts/' + accountId + '/orders';
exports.getCreateOrdersEndpoint = (accountId) => 'v3/accounts/' + accountId + '/orders';
exports.getAccountTransactionsEndpoint = (accountId) => 'v3/accounts/' + accountId + '/transactions/idrange?from=1&to=50';
exports.getAccountTransactionDetailEndpoint = (accountId, transId) => 'v3/accounts/' + accountId + '/transactions/' + transId;
exports.getAccountTradedEndpoint = (accountId, state, count) => 'v3/accounts/' + accountId + '/trades?state=' + state + '&count=' + count;

exports.getInstrumentsEndpoint = () => '';