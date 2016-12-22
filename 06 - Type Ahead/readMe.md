Type Ahead:

Goal is to pull in a large block of JSON and make it so that as you type characters into the input box, it readjusts and displays a list of matches for cities and states plus the population.

```javascript
const cities = [];

fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data));

```
we use fetch() to make the AJAX request (similar to JQuery's JSON.get). Fetch returns a promise which requires us to make a .then call. the object return has a property inherent to it named 'json' which allows for us to call it (this also uses a promise) and return an actual array.  we want to put this into const variable array so we use .push method and apply "..." which is called 'spread'.  This keeps us from having nested array inside our declared array.  Now each object is pushed onto cities.

```javascript
function findMatches(wordToMatch, cities){
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}
```
we create a function findMatches that takes to arguments: one is whatever we are filtering against the array and two is the array we are filtering (cities).  We use the .filter method and we create a new RegExp where we pass it the wordToMatch argument and define the regex parametere 'g' for global and 'i' for insensitive(or case insensitive).  We filter this regex against the city and state properties of each place in cities using the .match method.

```javascript
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
```
we use query selectors to watch the input box for changes and the ul with the suggestions class to populate the results.  Our eventListener for change watches when we click off of the input box and keyup watches for each key we let up on so we can have a seemless update of matches.

```javascript
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}
```
displayMatches handles most of the functionality.  