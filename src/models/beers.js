const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Beers = function () {
  this.data = null;
}


Beers.prototype.bindEvents = function () {
  PubSub.subscribe('BeerFormView:form-submitted', (evt)=>{
    this.getBeerByName(evt.detail)
  } )
};

// OPTION A 'GETTER': Get request, returns all data from API (all beers)
Beers.prototype.getData = function () {
 const url = `https://api.punkapi.com/v2/beers?page=2&per_page=80`;
 const request = new Request(url);
 request.get()
   .then((data) => {
     this.data = data
     PubSub.publish('Beers:beers-ready', this.data)
   })
   .catch((message) => {
     console.error(message);
   });
}

Beers.prototype.getBeerByName = function (beer_name) {
 const url = `https://api.punkapi.com/v2/beers?beer_name=${beer_name}`;
 const request = new Request(url);
 request.get()
   .then((data) => {
     this.data = data
     PubSub.publish('Beers:beers-ready', this.data)
   })
   .catch((message) => {
     console.error(message);
   });
}

// OPTION B 'GETTER': Get request, returns all data from API (all beers)

// Beers.prototype.getData = function () {
//   const requestHelper = new RequestHelper('https://api.punkapi.com/v2/beers')  //https://api.punkapi.com/v2/ ??
//   requestHelper.get((data) => {
//     PubSub.publish('Beers:beers-ready', data);
//   });
// }

module.exports = Beers;
