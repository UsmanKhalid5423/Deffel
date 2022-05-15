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

router.route('/book/flight-booking').post(flight.add);


/*******************************************************/
// Exporting Routes.
/*******************************************************/
module.exports = router;