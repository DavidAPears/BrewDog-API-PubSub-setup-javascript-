const Beers = require('./models/beers.js');
const BeerListView = require('./views/beer_list_view.js');
const BeerFormView = require('./views/beer_form_view.js');
const SelectBeerView = require('./views/select_beer_view.js');

document.addEventListener('DOMContentLoaded', () => {

// Should create a drop-down box with all beer names:
  const selectElement = document.querySelector('select#beers');
  const selectView = new SelectBeerView(selectElement);
  selectView.bindEvents();

// The below returns a searchbox, where beer can be searched by name
  const beerForm = document.querySelector('form')
  const beerFormView = new BeerFormView(beerForm);
  beerFormView.bindEvents();

// The below returns/publishes ALL BEERS in list form under search boxes:
  const listContainer = document.querySelector('#beer-list');
  const beerListView = new BeerListView(listContainer);
  beerListView.bindEvents();

  const beers = new Beers;
  beers.getData();
  beers.bindEvents();

})
