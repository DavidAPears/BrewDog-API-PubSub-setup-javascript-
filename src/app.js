const Beers = require('./models/beers.js');
const BeerListView = require('./views/beer_list_view.js');
const BeerFormView = require('./views/beer_form_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const beerForm = document.querySelector('form')
  const beerFormView = new BeerFormView(beerForm);
  beerFormView.bindEvents();

// The below returns/publishes ALL BEERS:
  const listContainer = document.querySelector('#beer-list');
  const beerListView = new BeerListView(listContainer);
  beerListView.bindEvents();

  const beers = new Beers;
  beers.getData();
  beers.bindEvents();



})
