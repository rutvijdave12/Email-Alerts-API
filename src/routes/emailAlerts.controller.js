const express = require('express');
const errors = require('../../errors/errors.js');
const router = express.Router();

router.post('/alerts/email', require('../validators/emailAlerts.validator.js'), require('./emailAlerts.service.js'))

router.all('*', (req, res, next) => {
    return res.status(405).json({
        statusCode: 1,
        timestamp: Date.now(),
        requestId: req.body.requestId || v4(),
        info: {
            code: errors['005'].code,
            message: errors['005'].message,
            displayText: errors['005'].displayText
        },
    })
})

module.exports = router