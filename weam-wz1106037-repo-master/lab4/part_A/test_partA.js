let Promise =require('./country_promise.js');
let CallBack =require('./country_callback.js');
let AsyncAwait =require('./country_async.js');
let c = new CallBack();
let promise= new Promise();
let async =new AsyncAwait();

async function lab4() {
    let data = await async.getCountry()("Bolivia");
    console.log(data);
    let a = await async.getCountries();
    console.log(a);
    let b = await async.getCountryLiteracy("LCN");
    console.log(b);
    let c = await async.getCountryUpdated("Bolivia");

    console.log(c);

}

lab4();


/*

c.getCountries(function (error, countries) {
        console.log(countries);
    });
c.getCountry("Bolivia", function (error, country) {
        console.log(country);
    });
c.getCountryLiteracy("ALB", function (error, countries) {
        console.log(countries);
    });


    c.getCountryUpdated("Bolivia", function (error, country) {
        console.log(country);
    });
    console.log("\n");
*/

   // promise.getCountries();

    promise.getCountry("Bolivia");

  //  promise.getCountryLiteracy("ALB");
    //promise.getCountryUpdated("Bolivia");



