
export class DataService {

  _hifz;

  constructor() {

  }

  setHifz(hifz){
    this._hifz=hifz;
  }

  get hifz(){
    return this._hifz;
  }

  async sendRequest(url, method, body) {

    let options;
    if (method == 'GET') {
      let resultsData = await fetch(url,{
        method: 'GET',
        headers: new Headers({'content-type': 'application/json'})
      });
      console.log("got the result.")
      return await resultsData.json();
    }
    options =
      {
        method: method,
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(body),
        credentials: 'same-origin'
      };
    options.body = JSON.stringify(body);
    return await fetch(url, options);
  }


}
