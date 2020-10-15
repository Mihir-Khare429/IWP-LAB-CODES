const express = require('express');
const app = require('express')();
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.post('/prize',async (req,res) => {
    try{
        let prize = req.body.prize
        prize = parseInt(prize)
        const lst = prize%10
        if(lst == 7){
            return res.send({
            prize : 1000
            })
        }
        else if(lst == 9){
            return res.send({
                prize : 3000
            })
        }   
        else{
            return res.send({
                prize : 100
            })
        }
    }catch(err){
        console.log(err)
    }
})

app.listen('3000')