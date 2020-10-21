const mongoose = require('mongoose')

mongoose.connect('MONGO URL STRING',{useCreateIndex:true})

const Transaction = new mongoose.Schema({
    balance : {
        type : String,
        required : true,
        trim:true
    },
    accountNumber : {
        type : String,
        minlength:10,
        unique:true,
        required:true,
        trim:true
    }
})

module.exports = mongoose.model('transaction',Transaction)