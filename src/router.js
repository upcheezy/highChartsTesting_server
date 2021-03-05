const express = require('express');
const chartService = require('./service');
const fs = require('fs');

const highchartRouter = express.Router();
const bodyParser = express.json();

highchartRouter
    .route('/damagequery')
    .get((req, res, next) => {
        chartService.damageInfo(req.app.get('db'))
            .then(info => {
                res.json(info)
            })
    })


module.exports = highchartRouter;