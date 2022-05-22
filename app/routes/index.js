/*******************************************************/
// Assigning Endpoints to the Routes.
/*******************************************************/
module.exports = function (app) {
    app.use('/api/v1/duffel/flight', require('./flight/flight'));
    app.use('/api/v1/duffel/flight', require('./user/user'));
}
