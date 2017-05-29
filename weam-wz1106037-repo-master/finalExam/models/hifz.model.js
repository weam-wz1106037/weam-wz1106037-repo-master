let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let  hifzSchema = new Schema({
    suraName: {type:String, required:true},
    fromAya: {type:Number, required:true},
    toAya:{type:Number, required:true},
    taskType: {type:String, required:true},
    completedDate: {type:Date},
    hifzLevel:{type:String}
})

module.exports = mongoose.model('Hifz',hifzSchema);