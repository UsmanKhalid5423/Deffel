/*******************************************************/
// Assigning Endpoints to the Routes.
/*******************************************************/
module.exports = function (app) {
    app.use('/api/v1/duffel/common', require('./common/common'));
}
