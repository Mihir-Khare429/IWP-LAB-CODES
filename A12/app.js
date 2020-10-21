const { json } = require('express');
const express = require('express');
const app = express();
const Transaction = require('./model');
const port = 3002;

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post('/debit',async (req,res) => {
    try{
        const data = req.body
        let account = await Transaction.findOne({accountNumber : data.accountNumber})
        console.log(account)
        if(!account){
            return res.send({
                message : 'No Account Registered'
            })
        }
        else{
            if(account.balance >= data.amount){
                let newBalance = parseInt(account.balance)-data.amount
                account = await Transaction.updateOne({accountNumber : data.accountNumber},{balance:newBalance},{upsert:true})
                // await account.save()
                return res.send({
                    message : `Amount Deducted Successfully . Available Balance ${newBalance}`
                })
            }else{
                return res.send({
                    message : 'Insufficient Balance'
                })
            }
        }
    }catch(err){
        console.log(err)
    }
})

app.listen(port)