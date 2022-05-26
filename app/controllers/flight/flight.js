/*******************************************************/
// Importing Files.
/*******************************************************/
const response = require("../../utility/functions/response");
const { Duffel } = require('@duffel/api')
require('dotenv').config()
/*******************************************************/
// Importing Npm Modules.
/*******************************************************/
/*******************************************************/
//Main Controllers.
/*******************************************************/
const duffel = new Duffel({
    token : process.env.token
})


/**
 * Controller: It is used add a  Admin.
 */
const fetch = async (req, res, next) => {
    try{
        const {from,where,date,way,classType,before,limit,after} = req.query
        
        const oneWaySlice = [
            {
                origin: from,//'NYC',
                destination: where,//'ATL',
                departure_date: date,
            }
        ]
        const twoWaySlice = [
            {
                origin: from,//'NYC',
                destination: where,//'ATL',
                departure_date: date,
            },
            {
                origin: where,//'NYC',
                destination: from,//'ATL',
                departure_date: date,
            },
        ]
        let obj;
        if(way=="oneWay")
        {
            obj = oneWaySlice
        }
        else if(way=="twoWay")
        {
            obj = twoWaySlice
        }
    
        const offerRequestResponse = await duffel.offerRequests.create({
            slices: obj,
            passengers: [{ type: 'adult' }],
            cabin_class: classType,
            return_offers: false,
          })
        
          const offers = await duffel.offerRequests.get(offerRequestResponse.data.id)
    
          const offers_v2 = await duffel.offers.list({ 
            offer_request_id: offerRequestResponse.data.id,
            sort: 'total_amount',
            limit: limit,
            //after: "g3QAAAACZAACaWRtAAAAGm9mZl8wMDAwQUpTczN5REtkQlBkZXlUdzhQZAAMdG90YWxfYW1vdW50dAAAAARkAApfX3N0cnVjdF9fZAAORWxpeGlyLkRlY2ltYWxkAARjb2VmYgAATJRkAANleHBi_____mQABHNpZ25hAQ=="
            ...(before && {before: before}),
            ...(after && {after: after}),
        })
    
            let data = {}
            let flightInfo_v2 = []
            let obj_v2
            let passengers = []
            passengers = offers_v2.data[0].passengers
            for(const element of offers_v2.data)
            {
                try{
                    // let passenger = passengers.filter(x=> x[0].id== element.passengers)[0])
                    // if(!passengers.includes(element.passengers))
                    // {
                    //     passengers.push(element.passengers)
                    // }
                    let obj,obj_v2
                    obj= {
                        id: element.id,
                        airline_name: element.slices[0].segments[0].operating_carrier.name ,
                        origin_city: element.slices[0].segments[0].origin.city.name,
                        destination_city: element.slices[0].segments[0].destination.city.name,
                        departure_time: element.slices[0].segments[0].departing_at,
                        arrival_time: element.slices[0].segments[0].arriving_at,
                        flight_duration: element.slices[0].duration,
                        total_amount: element.total_currency+" " + element.total_amount
                    }
                    if(way=="twoWay")
                    {
                        obj_v2= {
                            id: element.id,
                            airline_name: element.slices[1].segments[0].operating_carrier.name ,
                            origin_city: element.slices[1].segments[0].origin.city.name,
                            destination_city: element.slices[1].segments[0].destination.city.name,
                            departure_time: element.slices[1].segments[0].departing_at,
                            arrival_time: element.slices[1].segments[0].arriving_at,
                            flight_duration: element.slices[1].duration,
                            total_amount: element.total_currency + " " +element.total_amount
                        }
                    }
                    let array = [obj,obj_v2]
                    flightInfo_v2.push(array)
                  
                    
                }catch(err)
                {
                    console.log('=== >>> err === >> ',err)
                }
            let pagination ={
                limit: offers_v2.meta.limit,
                before: offers_v2.meta.before,
                after: offers_v2.meta.after,
            }
            data = {
            flights: flightInfo_v2,
            passengers,
            pagination
            }
            // res.send(data).json()
              //return offerDetailList;
            }
        //   res.send(data).json()
            return response.send(
                req,
                res,
                next,
                "info",
                200,
                "FETCH_SUCCESSFULLY",
                data//flightInfo_v2
            );
        }
        catch(error)
        {
            console.log('=== >>> error === >>> ',error)
            // return next({
            //     code: 500,
            //     message: "SERVER_ERROR",
            //     data: error
            // });
        }

};


/**
 * Controller: It is used add a  Admin.
 */
 const add = async (req, res, next) => {
    try{
        const {offerId,passengerId,currency,amount,title,phone_number,gender,given_name,family_name,email,born_on} = req.body

        const booking = await duffel.orders.create({ 
            selected_offers: [offerId],
            // type: "instant",
            type: "hold",
            // commented for hold
            // payments: [
            //     {
            //     type: "balance",
            //     currency: currency,//"USD",//TOTAL_CURRENCY,
            //     amount: amount,//"199.85",//TOTAL_AMOUNT
            //     }
            // ],
            passengers: [
                {
                    type: "adult",
                    title: title,
                    phone_number: phone_number,
                    id: passengerId,
                    given_name: given_name,
                    gender: gender,
                    family_name: family_name,
                    email: email,
                    born_on: born_on
                }
                ],            
            
        })

        // const payment = await duffel.payments.create({
        //     "payment": {
        //       "type": "balance",
        //       "currency": "USD",
        //       "amount": booking.data.total_amount
        //     },
        //     "order_id": booking.data.id//"ord_00003x8pVDGcS8y2AWCoWv"
        //   })

        let passengers = []
        let flightInfo_v2 = []
        let data = {}
        const element = booking.data
        passengers = booking.data.passengers
            //{
            try{
                let obj,obj_v2
                obj= {
                    id: element.id,
                    airline_name: element.slices[0].segments[0].operating_carrier.name ,
                    origin_city: element.slices[0].segments[0].origin.city.name,
                    destination_city: element.slices[0].segments[0].destination.city.name,
                    departure_time: element.slices[0].segments[0].departing_at,
                    arrival_time: element.slices[0].segments[0].arriving_at,
                    flight_duration: element.slices[0].duration,
                    total_amount: element.total_currency+" " + element.total_amount
                }
                if(booking.data.slices.length>0)
                {
                    obj_v2= {
                        id: element.id,
                        airline_name: element.slices[1].segments[0].operating_carrier.name ,
                        origin_city: element.slices[1].segments[0].origin.city.name,
                        destination_city: element.slices[1].segments[0].destination.city.name,
                        departure_time: element.slices[1].segments[0].departing_at,
                        arrival_time: element.slices[1].segments[0].arriving_at,
                        flight_duration: element.slices[1].duration,
                        total_amount: element.total_currency + " " +element.total_amount
                    }
                }
                let array = [obj,obj_v2]
                flightInfo_v2.push(array)
                
                
            }catch(err)
            {
                console.log('=== >>> err === >> ',err)
            }
        
            data = {
            flights: flightInfo_v2,
            passengers,
            //booking,
            bookingDetail: booking.data.id
            //payment
            //}
            // res.send(data).json()
              //return offerDetailList;
            }
        

        return response.send(
            req,
            res,
            next,
            "SUCCESS",
            201,
            "BOOKING_CREATED_SUCCESSFULLY",
            data
        );

        //res.send(booking).json()
        }
        catch(err)
        {
            console.log('=== >>> ERROR ==== >> ',err)

            if(err.meta && err.meta.status == 422 && err.errors[0].title=="Can't book multiple offers from the same offer request")
            {
                return response.send(
                    req,
                    res,
                    next,
                    "WARNING",
                    208,
                    "BOOKING_ALREADY_EXISTS",
                    null
                );
            }

            return response.send(
                req,
                res,
                next,
                "ERROR",
                500,
                "SERVER_ERROR",
                err
            );
        }

};



/**
 * Controller: It is used add a  Admin.
 */
 const remove = async (req, res, next) => {
    try{
        const {orderId} = req.body

        let data = {}
        // const orderCancel = await duffel.orderCancellations.create({
        //     order_id: orderId
        //   })

        //const confirmOrderCancel = await duffel.orderCancellations.confirm(orderCancel.data.id)

        
          const orderDetail = await duffel.orders.get(orderId)


          data = {
            //orderCancel,
            orderDetail,
            //confirmOrderCancel
          }
        return response.send(
            req,
            res,
            next,
            "SUCCESS",
            200,
            "BOOKING_CANCELLED_SUCCESSFULLY",
            data
        );

        //res.send(booking).json()
        }
        catch(err)
        {
            console.log('=== >>> ERROR ==== >> ',err)

            return response.send(
                req,
                res,
                next,
                "ERROR",
                500,
                "SERVER_ERROR",
                err
            );
        }

};



/**
 * Controller: It is used add a  Admin.
 */
 const initiatePayment = async (req, res, next) => {
    try{
        const {orderId,amount} = req.body
        // const payment = await duffel.payments.create({ 
        //     order_id: orderId,
        //     payment: {
        //       type: "balance",
        //       amount: amount,
        //       currency: "USD"
        //     }
        //   })


          const payment = await duffel.paymentIntents.create({
            "currency": "USD",
            "amount": amount
          })
          
          

        return response.send(
            req,
            res,
            next,
            "SUCCESS",
            201,
            "PAYMENT_SUCCESSFULL",
            payment
        );

        //res.send(booking).json()
        }
        catch(err)
        {
            console.log('=== >>> ERROR ==== >> ',err)

            return response.send(
                req,
                res,
                next,
                "ERROR",
                500,
                "SERVER_ERROR",
                err
            );
        }

};




/**
 * Controller: It is used add a  Admin.
 */
 const confirmPayment = async (req, res, next) => {
    try{
        const {orderId,amount} = req.body
       
        const payment = await duffel.payments.create({
            payment: {
              type: "balance",
              currency: "USD",
              amount: amount
            },
            order_id: orderId
          })
          
          

        return response.send(
            req,
            res,
            next,
            "SUCCESS",
            201,
            "PAYMENT_SUCCESSFULL",
            payment
        );

        //res.send(booking).json()
        }
        catch(err)
        {
            console.log('=== >>> ERROR ==== >> ',err)

            return response.send(
                req,
                res,
                next,
                "ERROR",
                500,
                "SERVER_ERROR",
                err
            );
        }

};


/**
 * Controller: It is used add a  Admin.
 */
 const cancelBooking = async (req, res, next) => {
    try{
        const {orderId} = req.body

        let data = {}
        const orderCancel = await duffel.orderCancellations.create({
            order_id: orderId
        })


          data = {
            orderCancel
          }
        return response.send(
            req,
            res,
            next,
            "SUCCESS",
            200,
            "BOOKING_CANCELLED_SUCCESSFULLY",
            data
        );

        //res.send(booking).json()
        }
        catch(err)
        {
            console.log('=== >>> ERROR ==== >> ',err)

            return response.send(
                req,
                res,
                next,
                "ERROR",
                500,
                "SERVER_ERROR",
                err
            );
        }

};


/**
 * Controller: It is used add a  Admin.
 */
 const confirmOrderCancel = async (req, res, next) => {
    try{
        const {orderId} = req.body

        let data = {}
        const orderCancelConfirm = await duffel.orderCancellations.confirm(orderId)


          data = {
            orderCancelConfirm
          }
        return response.send(
            req,
            res,
            next,
            "SUCCESS",
            200,
            "BOOKING_CANCELLED_SUCCESSFULLY",
            data
        );

        //res.send(booking).json()
        }
        catch(err)
        {
            console.log('=== >>> ERROR ==== >> ',err)

            return response.send(
                req,
                res,
                next,
                "ERROR",
                500,
                "SERVER_ERROR",
                err
            );
        }

};


/**
 * Controller: It is used add a  Admin.
 */
 const validateOrderCancel = async (req, res, next) => {
    try{
        const {orderId} = req.body

        let data = {}
        const validateOrderCancelConfirm = await duffel.orders.get(orderId)

          data = {
            validateOrderCancelConfirm
          }
        return response.send(
            req,
            res,
            next,
            "SUCCESS",
            200,
            "BOOKING_CANCELLED_SUCCESSFULLY",
            data
        );

        //res.send(booking).json()
        }
        catch(err)
        {
            console.log('=== >>> ERROR ==== >> ',err)

            return response.send(
                req,
                res,
                next,
                "ERROR",
                500,
                "SERVER_ERROR",
                err
            );
        }

};






/*******************************************************/
// Exporting Controllers.
/*******************************************************/
module.exports = {
    fetch,
    add,
    remove,
    initiatePayment,
    confirmPayment,
    cancelBooking,
    confirmOrderCancel,
    validateOrderCancel
}

/*******************************************************/
// Internal Functions.
/*******************************************************/

/**
 * Function: It is manage admin.
 */

/**
 * FETCH FLIGHT
 * CREATE BOOKING/BOOK FLIGHT
 * INITIATE PAYMENT
 * CONFIRM PAYMENT
 */

