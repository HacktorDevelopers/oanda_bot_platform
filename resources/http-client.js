const http = require('https');
const base_url = 'https://api-fxpractice.oanda.com/';
const fetch = require('node-fetch');
const { ACCESS_KEY } = require('./config');

exports.makeGetRequest = async function makeGetRequest({ url }) {
    let finalUrl = base_url + url;
    console.log(finalUrl);
    response = await fetch(finalUrl, {
        headers: {
            'Authorization': 'Bearer ' + ACCESS_KEY,
            'Accept-Datetime-Format': 'RFC3339'
        }
    });
    return await response.json();
}

exports.makePostRequest = async function makePostRequest({ url, data }) {
    console.log(data);
    let finalUrl = base_url + url;
    console.log(finalUrl);
    response = await fetch(finalUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Authorization': 'Bearer ' + ACCESS_KEY,
            'Accept-Datetime-Format': 'RFC3339',
            'Content-Type': 'application/json'
        },
    });
    return await response.json();
}