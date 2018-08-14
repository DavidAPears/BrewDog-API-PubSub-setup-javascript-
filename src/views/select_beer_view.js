 // SELECT_BEER_VIEW = BEER DROPDOWN BOX

const PubSub = require('../helpers/pub_sub.js');

const SelectBeerView = function (selectElement) {
  this.element = selectElement;
};

SelectBeerView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-ready', (evt) => {
    this.populate(evt.detail)
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  })
};

SelectBeerView.prototype.populate = function (beers) {
  beers.forEach((beer, index) => {
    const beerOption = this.createOption(beer.name, index);
    this.element.appendChild(beerOption);
  });
};

SelectBeerView.prototype.createOption = function (name, index) {
  const option = document.createElement('option');
  option.textContent = name;
  option.value = name;
  return option;
};

module.exports = SelectBeerView;
