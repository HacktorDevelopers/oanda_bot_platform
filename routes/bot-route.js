const express = require('express');
const router = express.Router();
const cron = require('node-cron');
const uuid = require('uuid');
var jobs = new Map();
var botKeys = [];
var pageData = {};

router.post('/start_bot', (req, res) => {
    var botId = uuid.v4();
    var job = {};
    const task = cron.schedule('* * * * * *', () => {
        console.log(`Running Cron: ${botId}`);
    })
    job['id'] = botId;
    job['task'] = task;
    jobs.set(botId, job);
    botKeys.push(botId);
    res.send(`Bot with id ${botId} created and started successfully`);
})

router.get('/stop_bot/:id', (req, res) => {
    var id = req.params.id;
    // var bot = 
    console.log(id);
    console.log(jobs);
    var job = jobs.get(id);
    job['task'].stop();
    jobs.delete(id);
    botKeys.splice(botKeys.indexOf(id), botKeys.indexOf(id));
    console.log(job);
    res.send(`Bot with ID: ${id} have been stopped successfully`)
})

router.get('/active_bots', (req, res) => {
    console.log(botKeys);
    pageData['active'] = 'bots';
    pageData['bots'] = botKeys;
    // res.redi
    res.render('user/bots/active_bot', pageData)
})

router.get('/', (req, res) => {
    console.log(botKeys);
    pageData['active'] = 'bots';
    pageData['bots'] = botKeys;
    // res.redi
    res.render('user/bots/active_bot', pageData)
})

module.exports = router;