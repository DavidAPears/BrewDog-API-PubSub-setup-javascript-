// const PubSub = require('../helpers/pub_sub.js');
//
// const BeerFormView = function (element) {
//   this.element = element;
// }
//
// BeerFormView.prototype.bindEvents = function () {
//   this.element.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     const beer = event.target['beer-input'].value;
//     PubSub.publish('BeerFormView:form-submitted', beer);
//     this.element.reset();
//   });
// }
//
// module.exports = BeerFormView;
