var express=require('express');
const { check, validationResult } = require('express-validator/check');
var format=require('string-format');

var logger=require('../util/logger.js');
var statics=require('../constant/static.js');
var messages=require('../constant/message.js');
var codes=require('../constant/code.js');
var fields=require('../constant/field.js');
var cityService=require('../service/city.js');

var router=express.Router();


router.post('/add_city',[
    check([fields.NAME]).isLength({ min:statics.DEFAULT_MIN_CHARACTER_LENGTH,max: statics.DEFAULT_CHARATER_LENGTH }).withMessage(format(messages.INVALID_LENGTH,[fields.NAME],statics.DEFAULT_MIN_CHARACTER_LENGTH,statics.DEFAULT_CHARATER_LENGTH)),
    check([fields.FK_COUNTRY_ID]).isLength({ min:statics.DEFAULT_MIN_CHARACTER_LENGTH,max: statics.DEFAULT_CHARATER_LENGTH }).withMessage(format(messages.INVALID_LENGTH,[fields.FK_COUNTRY_ID],statics.DEFAULT_MIN_CHARACTER_LENGTH,statics.DEFAULT_CHARATER_LENGTH))
],function(req,res){
    var errors = validationResult(req);
    if(errors.array().length==0){
        cityService.Create(req.body).then(function(result){
            res.json({status:statics.STATUS_SUCCESS,code:codes.SUCCESS,message:messages.DATA_SAVED,data:null});
        },function(error){
            logger.error(messages.SERVER_ERROR+' '+error)
            res.json({status:statics.STATUS_SUCCESS,code:codes.SUCCESS,message:messages.DATA_NOT_SAVED,data:null});
        });
    }else{
        res.json({status:statics.STATUS_FAILURE,code:codes.INVALID_DATA,message:messages.INVALID_DATA,data:errors.array()});
    }
});

module.exports=router;