const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const cartModel = require('../models/product')
router.post('/Add', (req, res) => {

    cartModel.find({ id: req.body.id }).exec().then(data => {

        if (data.length >= 1) {
            //   console.log(data);

            res.status(409).json({


                message: 'Product Exists'

            })

        }

        else {


            const cartdata = new cartModel({
                id: req.body.id,
                productName: req.body.productName,
                productQuantity: req.body.productQuantity,
                imageLink: req.body.imageLink,
                productPrice: req.body.productPrice,


            })
            cartdata.save().then(results => {


                res.status(201).json({
                    message: 'data added to cart'
                })

            }).catch(err => {
                res.status(500).json({ message: err })
            })
        }



    })

});
router.get('/get', (req, res) => {

    cartModel.find({}).then(result => {


        res.status(200).json({

            messaage: 'success',
            data: result,


        })

    }).catch(err => {


        res.status(404).json({




        })

    })


})
router.post('/update', (req, res) => {

    var myquery = { id: req.body.id };
    var newvalues = { $set: {productQuantity: req.body.productQuantity } };
    cartModel.updateOne(myquery, newvalues).then(result => {

        res.status(200).json({ message: "data updated" })


    }).catch(err => { 

        res.status(500).json({ message: "data not  updated" })
    })
})


module.exports = router;