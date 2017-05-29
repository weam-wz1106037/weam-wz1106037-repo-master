let fsp =require('fs-promise');

class Promise{
    constructor(){}


    getCountries(){
        fsp.readFile('country.json',{encoding:'utf8'})
            .then(data => JSON.parse(data))
            .then(data =>console.log(data))
            .catch(error => console.log(error));
    }
    getCountry(countryName){
        fsp.readFile('country.json',{encoding:'utf8'})
            .then(data => JSON.parse(data))
            .then(countries => countries.filter(x =>x.name==countryName))
            .then(countries=>console.log(countries))
            .catch(error => console.log(error));
}
    getCountryLiteracy(countryCode){
        fsp.readFile('country-literacy-rate.json',{encoding:'utf8'})
            .then(data => JSON.parse(data))
            .then(countries => countries.filter(x =>x.countryCode==countryCode))
            .then(countries=>console.log(countries))
            .catch(error => console.log(error));
    }
    getCountryUpdated(countryName){
        fsp.readFile('country.json',{encoding:'utf8'})
            .then(data => JSON.parse(data))
            .then(data => data.find(x =>x.name==countryName))
            .then(country=> {
                fsp.readFile('country-literacy-rate.json', {encoding: 'utf8'})
                    .then(data => JSON.parse(data))
                    .then(leteracy => leteracy.filter(x => x.country == countryName))
                    .then(counrt_lit => console.log(country.name, country.capital, counrt_lit))
                    })
                    .catch(error => console.log(error));
            }



}  module.exports= Promise;


