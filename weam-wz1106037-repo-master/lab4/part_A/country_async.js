let fsp =require('fs-promise');

class AsyncAwait {
    constructor() {
    }

    async getCountries() {
        try {
            let data = await fsp.readFile('country.json', {encoding: 'utf8'});
            let dataJ = JSON.parse(data);
            return dataJ;
        }
        catch (c) {
            console.log(c);
        }
    }

    async getCountry(countryName) {
        try {
            let data = await fsp.readFile('country.json', {encoding: 'utf8'});
            let dataJ = JSON.parse(data);
            dataJ = dataJ.find(x => x.name == countryName);
            console.log(dataJ);
            return dataJ;
        }
        catch (c) {
            console.log(c);
        }
    }

    async getCountryLiteracy(countryCode) {
        try {
            let data = await fsp.readFile('country-literacy-rate.json', {encoding: 'utf8'});
            let dataJ = JSON.parse(data);
            dataJ = dataJ.find(x => x.countryCode == countryCode);
            console.log(dataJ);
            return dataJ;
        }
        catch (c) {
            console.log(c);
        }
    }

    async getCountryUpdated(countryName) {
        try {
            let country = await fsp.readFile('country.json', {encoding: 'utf8'});
            country = JSON.parse(country);
            country = country.find(x => x.name == countryName);
            let data = await fsp.readFile('country-literacy-rate.json', {encoding: 'utf8'});
            let dataJ = JSON.parse(data);
            dataJ = dataJ.filter(x => x.name == countryName);
            let array = [country, dataJ];
            return array;
        }
        catch (c) {
            console.log(c);
        }

    }


}
module.exports = AsyncAwait;
