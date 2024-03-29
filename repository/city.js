var models=require('../models/models.js');
var commonRepository=require('./common.js');
var CountryRepository={
    FindAllByDeleted:function(deleted){
        return new Promise(function(resolve,reject){
            models.Country.findAll().then(existingCountries=>{
                resolve(existingCountries);
            },error=>{
                reject(error);
            }); 
        });
    },
    FindByIdAndDeleted:function(id,deleted){
        return new Promise(function(resolve,reject){
            models.Country.findOne({where:{pk_country_id:id}}).then(existingCountries=>{
                resolve(existingCountries);
            },error=>{
                reject(error);
            }); 
        });
    }
};
Object.assign(CountryRepository,commonRepository);
module.exports=CountryRepository;