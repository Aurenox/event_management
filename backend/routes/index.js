var express = require('express');
var router = express.Router();
const Registration = require('../models/Registration');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/Registration', async (req, res) => {

    let registration = new Registration({
        username: req.body.username,
        ticketCount: req.body.ticketCount,
        contact: req.body.contact,
        paymentStatus: req.body.paymentStatus
    });

    await registration.save();

    res.json({
        message: "Data inserted Successfully"
    });

});
router.get('/Registration', async (req, res) => {

    let registration = await Registration.find();

    res.json(registration);

});
router.get('/Registration/:id', async (req, res) => {

    let RegistrationId = req.params.id;

    let registration = await Registration.findById(RegistrationId);

    res.json(registration);

});
router.put('/Registration/:id', async (req, res) => {

    let RegistrationId = req.params.id;

    await Registration.findByIdAndUpdate(RegistrationId, {
        username: req.body.username,
        ticketCount: req.ticketCount,
        contact: req.body.contact,
        paymentStatus: req.body.paymentStatus
    });

    res.json({
        message: "Data Updated Successfully"
    });

});
router.delete('/Registration/:id', async (req, res) => {

    let RegistrationId = req.params.id;

    await Registration.findByIdAndDelete(RegistrationId);

    res.json({
        message: "Data Deleted Successfully"
    });

});

module.exports = router;
