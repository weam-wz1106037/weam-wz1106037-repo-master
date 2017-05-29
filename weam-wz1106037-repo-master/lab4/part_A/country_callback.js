let fs =require('fs');

class CallBack {
    constructor() {}
    getCountries(callback) {
        fs.readFile("country.Json", "utf8", function (error, data) {
            if (error)
                callback(error);
            else {
                let countries = JSON.parse(data);
                callback(null, countries);

            }

        });
    }

    getCountry(countryName, callback) {
        fs.readFile("country.Json", "utf8", function (error, data) {
            if (error)
                callback(error);
            else {
                let countries = JSON.parse(data);
                countries = countries.filter(x => x.name == countryName);
                callback(null, countries);

            }
        });


    }

    getCountryLiteracy(countryCode, callback) {
        fs.readFile("country.Json", "utf8", function (error, data) {
            if (error)
                callback(error);
            else {
                let countries = JSON.parse(data);
                countries = countries.filter(x => x.countryCode == countryCode);
                callback(null, countries);
            }
        });
    }
        getCountryUpdated(countryName, callback) {
            let country = this.getCountry(countryName, function (error, country) {
                console.log(country);
            });
            fs.readFile("country-literacy-rate.json", "utf8", function (error, data) {
                if (error)
                    callback(error);
                else {
                    let countries_lit = JSON.parse(data);
                    callback(null, countries_lit);
                }
            });

        }
}
module.exports=CallBack;