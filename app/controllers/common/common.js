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
            let offerDetailList = []
            let flightInfo = []
            let flightInfo_v2 = []
            let flightInfo_v3 = []
            let obj_v2
            for(const element of offers_v2.data)
            {
                try{
                    
                    offerDetailList.push(element)
                    let obj,obj_v2
                    obj= {
                        airline_name: element.slices[0].segments[0].operating_carrier.name ,
                        origin_city: element.slices[0].segments[0].origin.city.name,
                        destination_city: element.slices[0].segments[0].destination.city.name,
                        departure_time: element.slices[0].segments[0].departing_at,
                        arrival_time: element.slices[0].segments[0].arriving_at,
                        flight_duration: element.slices[0].duration,
                        total_amount: element.total_currency + element.total_amount
                    }
                    if(way=="twoWay")
                    {
                        obj_v2= {
                            airline_name: element.slices[1].segments[0].operating_carrier.name ,
                            origin_city: element.slices[1].segments[0].origin.city.name,
                            destination_city: element.slices[1].segments[0].destination.city.name,
                            departure_time: element.slices[1].segments[0].departing_at,
                            arrival_time: element.slices[1].segments[0].arriving_at,
                            flight_duration: element.slices[1].duration,
                            total_amount: element.total_amount
                        }
                    }
                    let array = [obj,obj_v2]
                    flightInfo_v2.push(array)
                  
                    
                }catch(err)
                {
                    console.log('=== >>> err === >> ',err)
                }
           
            data = {
            flightInfo_v2,
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
                flightInfo_v2
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


/*******************************************************/
// Exporting Controllers.
/*******************************************************/
module.exports = {
    fetch
}

/*******************************************************/
// Internal Functions.
/*******************************************************/

/**
 * Function: It is manage admin.
 */
