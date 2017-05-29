let fs= require('fs-promise')
let fse = require('fs-extra')
let hifzRepo = require('../models/hifzRepo')

class HifzController {

    async getSurahs(req,res){
        // const fs= require('fs-promise')
        let surahdata = await fse.readJson('data/surahs.json');
        console.log("done.")
        res.json(surahdata);
    }

    async addHifz(req,res){

        let hifz = req.body;
        console.log("hifz reached:")
        console.log(hifz);
        hifzRepo.addHifz(hifz);
        res.send("ok").status(200);

    }

    async updateHifz(req,res){
        let hifz = req.body;
        console.log("hifz to update:")
        console.log(hifz);
        hifzRepo.updateHifz(hifz._id,hifz);
        res.send("ok").status(200);
    }

    async getHifz(req,res){
        let hifzList = await hifzRepo.getHifz();
        res.json(hifzList);
    }
}

module.exports = new HifzController();