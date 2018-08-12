const BeerDetailView = function () {

}

// Creates a div/container that holds beer detail/data
BeerDetailView.prototype.createBeerDetail = function (beer) {
  const beerDetail = document.createElement('div');
  beerDetail.classList.add('beer-detail');

// Creates the main header populated with main piece of data (i.e data.name)
  const name = document.createElement('h3');
  name.textContent = beer.name;
  beerDetail.appendChild(name);

// Creates a list ) i.e data.1st item
  const detailsList = document.createElement('ul');

// populates that list:
  const tagline = this.createDetailListItem('Tagline', beer.tagline);
  detailsList.appendChild(tagline);

  const description = this.createDetailListItem('Description', beer.description)
  detailsList.appendChild(description);

// publishes this list
  beerDetail.appendChild(detailsList);
  return beerDetail;
};

BeerDetailView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};


module.exports = BeerDetailView;
