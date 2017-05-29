let Hifz = require('./hifz.model')

class HifzRepository {


    async getHifz(){
        return Hifz.find({});
    }

    async addHifz(newHifz){
        return Hifz.create(newHifz);
    }

    async updateHifz(hifzId,hifz){
        delete hifz._id;
        return Hifz.update({_id: hifzId},hifz)
    }
}

module.exports = new HifzRepository()