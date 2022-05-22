/*******************************************************/
// Importing Files.
/*******************************************************/
const sequelize = require("./../sequelize/instance");

/*******************************************************/
// Defining Instances of Databases
/*******************************************************/
const Sequelize = sequelize.Sequelize;
const instance = sequelize.databaseInstance();

/*******************************************************/
// Syncing Campaign Database with Database Models.
/*******************************************************/



const database = {
	instance: instance,
	Sequelize: Sequelize,

	booking: require("../schemas/booking")(instance,Sequelize),
	flight: require("../schemas/flight")(instance,Sequelize),
	user: require("../schemas/user")(instance,Sequelize),
	

	//term: require("../schemas/term")(instance, Sequelize),
};

/*******************************************************/
// Making Database Relations.
/*******************************************************/
require("./associations")(database);
require("./scopes")(database);
(require("./hooks"))(database);

/*******************************************************/
// Exporting Database.
/*******************************************************/
module.exports = database;
