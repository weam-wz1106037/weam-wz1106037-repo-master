let CountryRepo = require('./countryRepo.js');
let r = new CountryRepo();
async function lab4() {
 /*let b = await  r.getTop3LowLiteracy();
 let e = await r.getTop3HighLiteracy();

 console.log(e);
 console.log(b);*/
 let ff= await r.getRegionLiteracy("Asia");
    //let e = await r.getNeighborsLiteracy("Qatar");
    console.log(ff);
}
lab4();

//r.getCountryByName("Qatar");
