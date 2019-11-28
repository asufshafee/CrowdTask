var cityRepository=require('../repository/city.js');
var fields=require('../constant/field.js');
var models=require('../models/models.js');
module.exports={
    Create:function(newcityData){
        return new Promise(function(resolve,reject){
            var newcityModel={};
            newcityModel[fields.NAME]=newcityData.name;
            newcityModel[fields.FK_COUNTRY_ID]=newcityData.fk_country_id;
            var newcity=models.City.build(newcityModel);
            cityRepository.Save(newcity).then(function(result){
                resolve(result);
            },function(error){
                reject(error);
            }); 
        });
    },
};