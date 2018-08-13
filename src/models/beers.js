const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Beers = function () {
  this.data = null;
}

// Get request, returns all data from API (all beers)

// Beers.prototype.getData = function () {
//   const requestHelper = new RequestHelper('https://api.punkapi.com/v2/beers')  //https://api.punkapi.com/v2/ ??
//   requestHelper.get((data) => {
//     PubSub.publish('Beers:beers-ready', data);
//   });
// }

// Get request, returns all data from API (all beers)
Beers.prototype.getData = function () {
 const url = `https://api.punkapi.com/v2/beers`;
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

module.exports = Beers;
