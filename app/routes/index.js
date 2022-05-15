/*******************************************************/
// Assigning Endpoints to the Routes.
/*******************************************************/
module.exports = function (app) {
    app.use('/api/v1/duffel/flight', require('./flight/flight'));
}
