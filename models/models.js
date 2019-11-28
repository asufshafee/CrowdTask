var {sequelize,Sequelize}=require('../util/db.js');
var tbl_country=require('../models/country.js');
var tbl_city=require('../models/city.js');
module.exports={
    Country:tbl_country(sequelize,Sequelize),
    City:tbl_city(sequelize,Sequelize),
};