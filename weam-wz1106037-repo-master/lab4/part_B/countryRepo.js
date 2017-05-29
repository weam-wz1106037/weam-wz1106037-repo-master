let fsp = require('fs-promise');

class CountryRepo {

    constructor() {
    }

    async  getTop3HighLiteracy() {
        try {

            let c = await fsp.readFile('country-literacy-rate.json', {encoding: 'utf8'});
            let data = JSON.parse(c);
            data = data.sort((a, b) => {
                return b.rate - a.rate;
            });
            return [data[0], data[1], data[2]];
        }
        catch (e) {
            console.log(e);
        }
    }

    async  getTop3LowLiteracy() {
        try {

            let c = await fsp.readFile('country-literacy-rate.json', {encoding: 'utf8'});
            let data = JSON.parse(c);
            data = data.sort((a, b) => {
                return a.rate - b.rate;
            });
            return [data[0], data[1], data[2]];
        }
        catch (e) {
            console.log(e);
        }
    }

    async getNeighbors(neighbors){
        try{
        let e = await fsp.readFile('country-literacy-rate.json', {encoding: 'utf8'});
        e=JSON.parse(e);
        e =e.filter(c=>neighbors.indexOf(c.countryCode)>=0);
        e=e.sort(function(a,b){
            return a.rate-b.rate;
        });
        return e;}
        catch (err){console.log(err);}
    }
    async  getNeighborsLiteracy(countryName){
        try{
            let e = await fsp.readFile('country.json', {encoding: 'utf8'});
            e=JSON.parse(e);
            e=e.find(x=> x.name==countryName);
           let  neighbors = e.borders;
           neighbors = await this.getNeighbors(neighbors);
           return neighbors;
        }
        catch (err){console.log(err);}
    }
    async sortToRate(regionArr){
        try{
            let c = await fsp.readFile('country-literacy-rate.json', {encoding: 'utf8'});
            let data = JSON.parse(c);
            data =data.filter(c=> c.country==regionArr.indexOf(c).name);
            data=data.filter(c=> c.indicator =="Female Literacy Rate");
            data=data.sort(function(a,b){
                return a.rate-b.rate;
            });
            return data;
        }
        catch(e){console.log(e);}
    }

    getCountryByName(countryName){
        fsp.readFile('country.json',{encoding:'utf8'})
            .then(data => JSON.parse(data))
            .then(data => data.find(x =>x.name==countryName))
            .then(country=> {
                fsp.readFile('country-literacy-rate.json', {encoding: 'utf8'})
                    .then(data => JSON.parse(data))
                    .then(leteracy => leteracy.filter(x => x.country == countryName ))
                    .then(leteracy => leteracy.filter(x => x.indicator=="Female Literacy Rate" || x.indicator=="Male Literacy Rate" ))
                    .then(counrt_lit => console.log(country, counrt_lit))
            })
            .catch(error => console.log(error));
    }
   async getRegionLiteracy(region){
        try{
            let c = await fsp.readFile('country.json', {encoding: 'utf8'});
            let data = JSON.parse(c);
            let regionArr = data.filter(x=> x.region == region);
            regionArr = await this.sortToRate(regionArr);
            return regionArr;


        }
        catch(e){console.log(e);}
   }


}
module.exports = CountryRepo;