const constants = {
  ROUTE_NOT_AVAILABLE: "Requested route is not available",
  FETCH_SUCCESSFULLY: "Records fetched successfully.",
  SERVER_ERROR: "Unknown Server Error.",
  BOOKING_CREATED_SUCCESSFULLY: "Booking created successfully",
  BOOKING_ALREADY_EXISTS: "You had already booked such package."

};
module.exports = function (key) {
  return constants[key];
};