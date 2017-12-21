const CountryInfo = function () {
  this.ul = document.querySelector('#country-info');
}

CountryInfo.prototype.render = function (country) {

  const ul = document.querySelector('#country-info');
  const li = document.createElement('li');
  const img = document.createElement("img")
  li.innerText = "Name: " + country.name;
  img.src = country.flag;
  ul.innerHTML = "";
  ul.appendChild(li);
  ul.appendChild(img);

}

CountryInfo.prototype.createListItem = function (label, content) {
  const li = document.createElement('li');
  li.innerText = `${ label }: ${ content }`;
  return li;
}

module.exports = CountryInfo;
