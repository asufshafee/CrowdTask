var models = require('../models/models.js');
var fields = require('../constant/field.js');
var commonRepository = require('./common.js');
var CountryRepository = {
    FindAllByRelation: function () {
        return new Promise(function (resolve, reject) {
            models.Country.hasMany(models.City, { foreignKey: 'fk_country_id' })
            models.Country.findAll({
                include: [{
                    model: models.City,
                }]
            }).then(existingCountries => {
                resolve(existingCountries);
            }, error => {
                reject(error);
            });
        });
    },
    FindAllByDeleted: function (deleted) {
        return new Promise(function (resolve, reject) {
            models.Country.findAll().then(existingCountries => {
                resolve(existingCountries);
            }, error => {
                reject(error);
            });
        });
    },
    FindByIdAndDeleted: function (id, deleted) {
        return new Promise(function (resolve, reject) {
            models.Country.findOne({ where: { pk_country_id: id } }).then(existingCountries => {
                resolve(existingCountries);
            }, error => {
                reject(error);
            });
        });
    }
};
Object.assign(CountryRepository, commonRepository);
module.exports = CountryRepository;