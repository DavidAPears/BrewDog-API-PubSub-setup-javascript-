const PubSub = require('../helpers/pub_sub.js');

const BeerFormView = function (element) {
  this.element = element;
}

BeerFormView.prototype.bindEvents = function () {
  this.element.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log(evt.target[0].value);
    const beer = evt.target[0].value;
    PubSub.publish('BeerFormView:form-submitted', beer);
    this.element.reset();
  });
}

module.exports = BeerFormView;
