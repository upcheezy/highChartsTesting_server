const express = require('express');
const chartService = require('./service');
const fs = require('fs');

const highchartRouter = express.Router();
const bodyParser = express.json();

highchartRouter
    .route('/memberdamage')
    .get((req, res, next) => {
        const {year} = req.query;
        console.log(year)
        chartService.memberDamage(req.app.get('db'), year)
            .then(info => {
                res.json(info)
            })
    })

highchartRouter
    .route('/excavatordamage')
    .get((req, res, next) => {
        chartService.excavatorDamage(req.app.get('db'))
            .then(info => {
                res.json(info)
            })
    })


module.exports = highchartRouter;