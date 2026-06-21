const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({

    username: {
        type: String
    },

    ticketCount: {
        type: Number
    },
    contact: {
        type: String
    },
        paymentStatus: {
        type: String
    },

});

module.exports = mongoose.model("Registration", RegistrationSchema);