/*******************************************************/
// Importing Npm Modules.
/*******************************************************/
const router = require('express').Router();
require('dotenv').config();

/*******************************************************/
// Importing Files.
/*******************************************************/
const user = require('../../controllers/user/user');
/*******************************************************/
// Configuring Multer.
/*******************************************************/

/*******************************************************/
// Defining Routes.
/*******************************************************/

/**
 * It is used by admin to to login
 */

router.route('/user/signUp').post(user.signUp);

/**
 * It is used by admin to to login
 */

 router.route('/user/login').post(user.login);


/*******************************************************/
// Exporting Routes.
/*******************************************************/
module.exports = router;
