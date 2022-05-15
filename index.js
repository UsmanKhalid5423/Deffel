






/*******************************************************/
// Importing Npm Modules.
/*******************************************************/
const express = require('express');
const bodyParser = require('body-parser');
const { Duffel } = require('@duffel/api')
const cors = require('cors');
const request = require('request')
/*******************************************************/
// Configuring Application.
/*******************************************************/
const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
const options = {
    optionsSuccessStatus: 200
};
app.use(cors(options));
app.options('*', cors(options));
app.use(bodyParser.json());
const duffel = new Duffel({
    // token: "duffel_test_Ga3nJCfnTI21eC1bvxyLSHrFx-guikOcW2UFRaNPhIF"
    //token: process
  })

  const duffelToken = "duffel_test_Ga3nJCfnTI21eC1bvxyLSHrFx-guikOcW2UFRaNPhIF"
  
/*******************************************************/
// Configuring Server.
/*******************************************************/
const server = app.listen(2600, function () {
    // logger.consoleInfo("Node application is listening at " + process.env.PORT + " port.");
    console.log("Node application is listening at " + 2600 + " port.");
});



// const airlines = duffel.airlines.listWithGenerator()
// for await (const airline of airlines) {
//   console.log(airline)
// }

// app.get('/check',async (req,res,next)=>{

//     try{


//         var body = {
//             "data": {
//                 "slices": [
//                     {
//                         "origin": "NYC",
//                         "destination": "ATL",
//                         "departure_date": "2022-06-21"
//                     },
//                     {
//                         "origin": "ATL",
//                         "destination": "NYC",
//                         "departure_date": "2022-07-21"
//                     }
//                 ],
//                 "passengers": [
//                     {
//                         "type": "adult"
//                     },
//                     {
//                         "type": "adult"
//                     },
//                     {
//                         "age": 1
//                     }
//                 ],
//                 "cabin_class": "business"
//             }
//         }
//         const options = {
//             method: 'POST',
//             url: 'https://api.duffel.com/air/offer_requests?return_offers=false',
//             json: body,
//             headers: {
//                 'Authorization': duffelToken,
//                 'Content-Type': 'application/json',
//                 'User-Agent': 'PostmanRuntime/7.29.0',
//                 'Accept': '/',
//                 'Accept-Encoding': 'gzip, deflate, br',
//                 'Connection': 'keep-alive',
//                 'Accept-Encoding': 'gzip',
//                 'Accept': 'application/json',
//                 'Duffel-Version': 'beta'
//             }
//         };
        

//         request(options, function (error, response, body) {
//             if (error) throw new Error(error);
//             res.send(body)
//         });
    


//     res.send('connected')
//     }
//     catch(err)
//     {
//         console.log('==== >>> errr === >> ',err)
//     }
// })


// app.get('/search/flight',async(req,res,next)=>{

//     try{
//     const {from,where,date,way,classType,before,limit} = req.query

//     const oneWaySlice = [
//         {
//             origin: from,//'NYC',
//             destination: where,//'ATL',
//             departure_date: date,
//         }
//     ]
//     const twoWaySlice = [
//         {
//             origin: from,//'NYC',
//             destination: where,//'ATL',
//             departure_date: date,
//         },
//         {
//             origin: where,//'NYC',
//             destination: from,//'ATL',
//             departure_date: date,
//         },
//     ]
//     let obj;
//     if(way=="oneWay")
//     {
//         obj = oneWaySlice
//     }
//     else if(way=="twoWay")
//     {
//         obj = twoWaySlice
//     }

//     const offerRequestResponse = await duffel.offerRequests.create({
//         slices: obj,
//         passengers: [{ type: 'adult' }],
//         cabin_class: classType,
//         return_offers: false,
//       })
    
//       const offers = await duffel.offerRequests.get(offerRequestResponse.data.id)

//       const offers_v2 = await duffel.offers.list({ 
//         offer_request_id: offerRequestResponse.data.id,
//         sort: 'total_amount',
//         limit: limit,
//         //after: "g3QAAAACZAACaWRtAAAAGm9mZl8wMDAwQUpTczN5REtkQlBkZXlUdzhQZAAMdG90YWxfYW1vdW50dAAAAARkAApfX3N0cnVjdF9fZAAORWxpeGlyLkRlY2ltYWxkAARjb2VmYgAATJRkAANleHBi_____mQABHNpZ25hAQ=="
//         ...(before && {before: before})
//     })

//         let data = {}
//         let offerDetailList = []
//         let flightInfo = []
//         let flightInfo_v2 = []
//         let flightInfo_v3 = []
//         let obj_v2
//         for(const element of offers_v2.data)
//         {
//             try{
                
//                 offerDetailList.push(element)
//                 let obj,obj_v2
//                 obj= {
//                     airline_name: element.slices[0].segments[0].operating_carrier.name ,
//                     origin_city: element.slices[0].segments[0].origin.city.name,
//                     destination_city: element.slices[0].segments[0].destination.city.name,
//                     departure_time: element.slices[0].segments[0].departing_at,
//                     arrival_time: element.slices[0].segments[0].arriving_at,
//                     flight_duration: element.slices[0].duration,
//                     total_amount: element.total_currency + element.total_amount
//                 }
//                 if(way=="twoWay")
//                 {
//                     obj_v2= {
//                         airline_name: element.slices[1].segments[0].operating_carrier.name ,
//                         origin_city: element.slices[1].segments[0].origin.city.name,
//                         destination_city: element.slices[1].segments[0].destination.city.name,
//                         departure_time: element.slices[1].segments[0].departing_at,
//                         arrival_time: element.slices[1].segments[0].arriving_at,
//                         flight_duration: element.slices[1].duration,
//                         total_amount: element.total_amount
//                     }
//                 }
//                 let array = [obj,obj_v2]
//                 flightInfo_v2.push(array)
              
                
//             }catch(err)
//             {
//                 console.log('=== >>> err === >> ',err)
//             }
       
//         data = {
//         flightInfo_v2,
//         }
//         // res.send(data).json()
//           //return offerDetailList;
//     }
//       res.send(data).json()
//     }
//     catch(error)
//     {
//         console.log('=== >>> error === >>> ',error)
//     }
// })

// const getOffersList = async (offers,res,way) =>{
//     let offerDetailList = []
//     let flightInfo = []
//     let flightInfo_v2 = []
//     let flightInfo_v3 = []

//     console.log('=== >>> offers.data.offers.length === >> ',offers.data.offers.length)

//     console.log('=== >>> way=== >> ',way)


//         for(const element of offers.data.offers)
//         {
//           try{
//               //if(offerDetailList.length<=5)
//               //{
//                 const offerDetail = await duffel.offers.get(element.id)
//                 if(offerDetail && offerDetail.data)
//                 {
//                     console.log('=== >>> offerDetail === >> ')
//                     offerDetailList.push(offerDetail.data)
//                     let obj,obj_v2
//                     obj= {
//                         airline_name: offerDetail.data.slices[0].segments[0].operating_carrier.name ,
//                         origin_city: offerDetail.data.slices[0].segments[0].origin.city.name,
//                         destination_city: offerDetail.data.slices[0].segments[0].destination.city.name,
//                         departure_time: offerDetail.data.slices[0].segments[0].departing_at,
//                         arrival_time: offerDetail.data.slices[0].segments[0].arriving_at,
//                         flight_duration: offerDetail.data.slices[0].duration,
//                         total_amount: offerDetail.data.total_currency + offerDetail.data.total_amount
//                     }
//                     //console.log('=== >>> offerDetail.data.slices[1] === > ',offerDetail.data.slices[1])
//                     if(way=="twoWay")
//                     {
//                         obj_v2= {
//                             airline_name: offerDetail.data.slices[1].segments[0].operating_carrier.name ,
//                             origin_city: offerDetail.data.slices[1].segments[0].origin.city.name,
//                             destination_city: offerDetail.data.slices[1].segments[0].destination.city.name,
//                             departure_time: offerDetail.data.slices[1].segments[0].departing_at,
//                             arrival_time: offerDetail.data.slices[1].segments[0].arriving_at,
//                             flight_duration: offerDetail.data.slices[1].duration,
//                             total_amount: offerDetail.data.total_amount
//                         }
//                     }
//                     flightInfo.push(obj)
//                     flightInfo_v2.push([
//                         {
//                             phase1: obj
//                         },
//                         {
//                             phase2: obj_v2
//                         }
//                     ])
//                     flightInfo_v3.push({
//                             phase1: obj,
//                             phase2: obj_v2
//                     })
//                 }
//               //}
//               }catch(err)
//               {
//                 console.log('=== >>> err === >> ',err)
//               }
//         }


//     //   offers.data.offers.forEach(async element => {
//     //       try{
//     //         const offerDetail = await duffel.offers.get(element.id)
//     //         if(offerDetail && offerDetail.data)
//     //         {
//     //             console.log('=== >>> offerDetail === >> ')
//     //             offerDetailList.push(offerDetail.data)
//     //         }
//     //       }catch(err)
//     //       {
//     //       }
//     //   });
//       console.log('=== >>> SENDING RESPONSE === >> ',offerDetailList.length)
//       let data = {
//         offerDetailList,
//         flightInfo,
//         flightInfo_v2,
//         flightInfo_v3
//       }
//       res.send(data).json()
//       //return offerDetailList;
// }


// app.get('/offer/details',async(req,res,next)=>{

//     try{
        
//         const {offerId} = req.body
//         //const offerDetail = await duffel.offerRequests.get(offerId)

//         const offerDetail_v2 = await duffel.offers.get(offerId)

//         let data={
//             //offerDetail,
//             offerDetail_v2
//         }

//       res.send(data).json()
//     }
//     catch(err)
//     {
//         console.log('=== >>> ERROR ==== >> ',err)
//         res.send(err)
//     }
// })


// app.post('/create/booking',async(req,res,next)=>{

//     try{
        
//         const {offerId,passengerId,currency,amount} = req.body

//         const booking = await duffel.orders.create({ 
//             // "metadata": {
//             //                 "payment_intent_id": "pit_00009htYpSCXrwaB9DnUm2"
//             //             },
//             selected_offers: [offerId],
//             type: "instant",
//             payments: [
//               {
//                 type: "balance",
//                 currency: currency,//"USD",//TOTAL_CURRENCY,
//                 amount: amount,//"199.85",//TOTAL_AMOUNT
//               }
//             ],
//             passengers: [
//                 {
//                   type: "adult",
//                   title: "mrs",
//                   phone_number: "+442080160509",
//                   //"infant_passenger_id": infantId,//"pas_00009hj8USM8Ncg32aTGHL",
//                 //   identity_documents: [
//                 //     {
//                 //       unique_identifier: "19KL56147",
//                 //       type: "passport",
//                 //       issuing_country_code: "GB",
//                 //       expires_on: "2025-04-25"
//                 //     }
//                 //   ],
//                   id: passengerId,
//                   given_name: "Amelia",
//                   gender: "f",
//                   family_name: "Earhart",
//                   email: "amelia@duffel.com",
//                   born_on: "1987-07-24"
//                 }
//               ],            
//             //   {
//             //     phone_number: "+442080160509",
//             //     email: "potts@example.com",
//             //     born_on: "1983-11-02",
//             //     title: "mrs",
//             //     gender: "m",
//             //     family_name: "Potts",
//             //     given_name: "Pepper",
//             //     id: ADULT_PASSENGER_ID_2
//             //   },
//             //   {
//             //     phone_number: "+442080160506",
//             //     email: "morgan@example.com",
//             //     born_on: "2019-08-24",
//             //     title: "mrs",
//             //     gender: "f",
//             //     family_name: "Stark",
//             //     given_name: "Morgan",
//             //     id: INFANT_PASSENGER_ID
//             //   }
//           })

//       res.send(booking).json()
//     }
//     catch(err)
//     {
//         console.log('=== >>> ERROR ==== >> ',err)
//         res.send(err)
//     }
// })


server.timeout = 8000 * 10000;


/*******************************************************/
// Handling Errors.
/*******************************************************/
// app.use((req, res, next) => {
//     console.log('=== >> here in 404 == >> ')
//     // next({
//     //     code: 404,
//     //     message: "ROUTE_NOT_AVAILABLE"
//     // })
//     res.send('not found').json()
// });


require("./app/routes/index")(app);

// app.get('/api/v1/duffel/common',require('./app/routes/common/common'))

// app.get('/api/v1/duffel/common/search/flight',(req,res,next)=>{
//     res.send('done').json()
// })



/*******************************************************/
// Exporting Modules.
/*******************************************************/
module.exports = server

