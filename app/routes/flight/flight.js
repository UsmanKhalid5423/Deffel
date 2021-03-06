/*******************************************************/
// Importing Npm Modules.
/*******************************************************/
const router = require('express').Router();
require('dotenv').config();

/*******************************************************/
// Importing Files.
/*******************************************************/
const flight = require('../../controllers/flight/flight');
/*******************************************************/
// Configuring Multer.
/*******************************************************/

/*******************************************************/
// Defining Routes.
/*******************************************************/

/**
 * It is used by admin to to login
 */
router.route('/search/flight').get(flight.fetch);

router.route('/add/flight-booking').post(flight.add);

router.route('/cancel/flight-booking').post(flight.remove);

router.route('/initiate/payment').post(flight.initiatePayment);

router.route('/confirm/payment').post(flight.confirmPayment);

router.route('/cancel/booking').post(flight.cancelBooking);

router.route('/confirm/cancel-booking').post(flight.confirmOrderCancel);

router.route('/validate/cancel-booking').post(flight.validateOrderCancel);





/*******************************************************/
// Exporting Routes.
/*******************************************************/
module.exports = router;
