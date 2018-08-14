 // BEER_DETAIL_VIEW: PRESENTS BEERS IN GRIDBOX FORMAT

const BeerDetailView = function () {

}

// Creates a div/container that holds beer detail/data
BeerDetailView.prototype.createBeerDetail = function (beer) {
  const beerDetail = document.createElement('div');
  beerDetail.classList.add('beer-detail');

// Creates the main header populated with main piece of data (i.e data.name)
  const name = document.createElement('h2');
  name.textContent = beer.name;
  beerDetail.appendChild(name);

// Creates a list 'holder'
  const detailsList = document.createElement('div');

// populates that list with other info from original data (i.e tag & description)
  const tagline = this.createDetailListItem('Tagline', beer.tagline);
  tagline.classList.add('tagline');
  detailsList.appendChild(tagline);

  const description = this.createDetailListItem('Description', beer.description);
  description.classList.add('description');
  detailsList.appendChild(description);

  const food_pairing = this.createDetailListItem('Try with: ', beer.food_pairing);
  food_pairing.classList.add('food_pairing');
  detailsList.appendChild(food_pairing);

  const image_url = this.createImage(beer.image_url);
  detailsList.appendChild(image_url);


  // publishes this list
    beerDetail.appendChild(detailsList);
    return beerDetail;
  };

  BeerDetailView.prototype.createDetailListItem = function (label, property) {
    const element = document.createElement('p');
    element.textContent = `${label}: ${property}`;
    return element;
  };


// IMAGE (NB: Ones provided by BrewDog are not great tbh)
BeerDetailView.prototype.createImage = function (image) {
  const img = document.createElement('img');
  img.src = image;
  return img;
}


module.exports = BeerDetailView;
