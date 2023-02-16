const express = require("express");
const router = express. Router();
const Booking =  require("../models/bookingModel");
const Car = require("../models/carModel");
const stripe = require('stripe')('sk_test_51MbqChKLf3MTi9NR41Ya4IhfxFneVOhn8r9h4dEccuYLIrn6RlHAsHu1Yzxj9x6AbZnYuP9vmUIIwVCgEjOp3oO700ESgy5oAc');
const { request } = require("express");

router.post("/bookcar", async(req, res) => {

    

    try {
        console.log('called');
        const car = await Car.findOne({_id: req.body.car});
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          mode: "payment",
          line_items: [
            {
                price_data: {
                    currency: "USD",
                    
                    product_data: {
                      name: car.name,
                      images:[car.image]
                    },
                    unit_amount: req.body.totalAmount * 100,
                  },
                  quantity: 1
            },
          ],
          success_url: `http://localhost:5000/success.html`,
          cancel_url: `http://localhost:5000/cancel.html`,
        })

        res.json({ url: session.url })

        console.log(session.id);

    if(session){
        req.body.transactionId = session.id;
        const newbooking = new Booking (req.body);
        await newbooking.save();
        const car = await Car.findOne({_id: req.body.car});
        console.log(req.body.car[0].name);
        car.bookedTimeSlots.push(req.body.bookedTimeSlots);
        await car.save();
        
    }else{
        res.status(400).json(error);
        console.log(error);
    }

    } catch (error) {
   
    console.log(error);
    }
    });


    router.get("/getallbookings",async(req, res) => {

        try {
            
            const bookings = await Booking.find().populate('car')
            res.send(bookings)

        } catch (error) {
            return res.status(400).json(error);
            
        }

    });

module.exports = router