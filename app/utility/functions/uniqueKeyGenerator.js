/*******************************************************/
// Npm Modules.
/*******************************************************/
const guid = require("guid");

/*******************************************************/
// Implementing Unique key Generator.
/*******************************************************/
const guidKey = () => {
  return `FHO${guid.create().value.replace(/-/g, "")}`;
};

/*******************************************************/
// Exporting Funtions.
/*******************************************************/
module.exports = {
    guidKey
};
