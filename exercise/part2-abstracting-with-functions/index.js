/* =====================

# Excercise: Abstracting with Functions

## Introduction

In this exercise you will be writing and refactoring code to show data on
multiple maps on the same page.


## Task 1: Change the marker location to your favorite place to eat food in Philadelphia

Take a look at the code below. The part of the code that adds a marker looks
like this:

    L.marker([39.9522, -75.1639]).bindTooltip('My Location').addTo(foodMap);

The 39.9522, -75.1639 part refers to a set of coordinates: latitude and
longitude (lat, lng). The 'My Location' part represents the text that will be
shown when you hover over the marker (this is called a tooltip in leaflet).

In our class, we'll learn a number of ways to find coordinates for a location
that we want to map. An easy way to do this for a single address is to use
Google Maps. Check out these instructions to Get the coordinates of a place:
https://support.google.com/maps/answer/18539?hl=en

Find the coordinates of your favorite place to eat in Philadelphia and update
the marker coordinates to that place. Change the text in the tooltip to the name
of that place.


## Task 2: Add two more markers

Add two additional markers to your map. These two markers should be two
additional places where you like to eat food.

To add an additional marker, copy the code you used to create the first marker
onto the next line. Change the coordinates for your new markers. When you are
finished, save your file and reload the browser. You should see three markers.


## Task 3: Abstract out repeated code

Refactor the code from the previous steps to leverage some of the Javascript
functionality we have been learning about. We will start by reducing the number
of times we call the L.marker method. We will do this by "abstracting" from the
concept of a marker with a tooltip to the concept of a place with a name.

Create a function called "addPlace" that will add a marker with a tooltip to a
map. Your function should take three arguments in this order:

  1. lat,
  2. lng,
  3. name.

Now, instead of using L.marker directly, use your function to add your places to
the map.


## Task 4: Add your favorite places to play in Philadelphia

Notice that there are TWO maps on the page -- one for favorite places to eat and
the other for favorite places to play. We can use the same function to add
places to both maps, but first we'll have to update the addPlace function to
accept an additional argument. Update the function to take the following four
arguments in this order:

  1. map,
  2. lat,
  3. lng,
  4. name.

Now use the addPlace function to add your three favorite places to play
(whatever that means to you) in Philadelphia.

## Stretch Task: Use custom icons

Using the Leaflet documentation (https://leafletjs.com/), try to set up your
maps to use custom icons on your markers.

===================== */

const foodMap = L.map('food-map', {
  center: [40.04389139038451, -75.39526462554932],
  zoom: 6,
});

L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png',
}).addTo(foodMap);

const playMap = L.map('play-map', {
  center: [40.00079396953218, -75.27076721191406],
  zoom: 11,
});

L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png',
}).addTo(playMap);

// Create green icon - from https://leafletjs.com/examples/custom-icons/
let LeafIcon = L.Icon.extend({
  options: {
    shadowUrl: 'leaf-shadow.png',
    iconSize: [15, 38],
    shadowSize: [25, 32],
    iconAnchor: [11, 47],
    shadowAnchor: [2, 31],
    popupAnchor: [-2, -38],
  },
});

let orangeIcon = new LeafIcon({ iconUrl: 'leaf-orange.png' });

/* =====================

Start code

===================== */

// L.marker([40.45071088979802, -79.98556092381476]).bindTooltip('Primanti Bros').addTo(foodMap);
// L.marker([40.04389139038451, -75.39526462554932]).bindTooltip("Minella's Diner").addTo(foodMap);
// L.marker([41.71571201183046, -73.92983436584473]).bindTooltip("Palace Diner").addTo(foodMap);

function addPlace(map, lat, lng, name) {
  L.marker([lat, lng], { icon: orangeIcon }).addTo(map).bindTooltip(name);
}

// Add markers to foodMap
addPlace(foodMap, 40.45071088979802, -79.98556092381476, 'Primanti Bros, Original Location');
addPlace(foodMap, 40.04389139038451, -75.39526462554932, 'Minellas Diner');
addPlace(foodMap, 41.71571201183046, -73.92983436584473, 'Palace Diner');

// Add markers to playMap
addPlace(playMap, 40.10463173609721, -75.32953977584839, 'Reach Climbing and Fitness');
addPlace(playMap, 39.95828200388112, -75.1731026172638, 'The Franklin Institute');
addPlace(playMap, 39.95678937071908, -75.1712304353714, 'The Academy of Natural Sciences');

/* =====================

End code

===================== */
