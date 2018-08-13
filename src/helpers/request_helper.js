const Request = function (url) {
  this.url = url
}

// LONG FORM HELPER FOR USE WITH OPTION A 'GETTER'
Request.prototype.get = function (onComplete) {
 return fetch(this.url)
   .then((res) => res.json());
}

// LONG FORM HELPER FOR USE WITH OPTION B 'GETTER'

// Request.prototype.get = function (onComplete) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', this.url);
//   xhr.addEventListener('load', function() {
//     if(this.status !== 200){
//       return;
//     }
//     const data = JSON.parse(this.responseText);
//     onComplete(data);
//   });
//   xhr.send();
// };

module.exports = Request;
