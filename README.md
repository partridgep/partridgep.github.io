# Quarantine Movie Release Schedule
One resource to view all movies whose release has been impacted by the coronavirus.

## Getting Started
[Click Here] (https://partridgep.github.io/) to get started.

## Technologies Used
* HTML
* CSS
* JavaScript/jQuery
* Google Fonts
* OMDB API for movie data on posters, director, cast and release date
* Unofficial IMDb API for movie data on trailers and plot

## Screenshots

### Wireframe
![image](https://i.imgur.com/HKZXBsz.png)
![image](https://i.imgur.com/bkH4J44.png)

### Completed Project
![image](https://i.imgur.com/iY5hXzo.png)
![image](https://i.imgur.com/TyiyOv0.png)

## Functioning

This web app takes movie data from APIs to display a release schedule timelines, which can be toggled between *Original* and *Delayed*.

It works through the following steps:

1. For each movie in an initial array, grab external data from OMDB API
2. Once ALL data is gathered, place movies into release date objects, that are organized by Year > Month > Day. We do this twice, once for each calendar.
3. Then, render the calendar, first in the original timeline. We iterate through each year in the calendar, then through each month, then through each release date and add a corresponding div to the DOM.
4. Event listeners allow the user to either:
	* Toggle between calendars
	* Search for a movie in the array
	* Access the nav menu
	* Click on any poster
5. If the user clicks on a poster, render an info window with data from our array and first API.
6. While the window loads, grab data from the Unofficial IMDb API *just for the movie that was clicked on* and obtain trailer and plot data.
7. Render all new data to info window, including embedded trailer (if there is one.) Links on the window allow the user to: 
	* Access Previous and Next movie in the calendar
	* Switch timelines and view in corresponding timeline
	* Add that movie to a release tracker
	* Exit window and return to timeline 
8. Additionally, Search bar allows user to type in movie title and see results, which will be in the form of a link that, upon being clicked, will render a movie info window.
9. Clicking on the hamburger nav icon will make the nav menu slide over, with options to:
	* Go Home (more useful if already on another page)
	* View FAQ
	* View Release Tracker (functions by accessing and saving to local storage)

### Why use two different Movie APIs?

Ideally, we would only have to use one API, but OMDB and the Unofficial IMDb API each offer their advantages.

OMDB is *way* faster to load, so using it as we initialize the webpage on over 60 movies makes more sense. Their release dates also include months and dates, unlike the Unofficial IMDb API.

On the other hand, the Unofficial IMDb API offers access to IMDb IDs to embed movie trailers, a nifty feature to add to any info window about a movie. It also makes sense to use if we are only loading one movie at a time.

### Why include a movie's new release date in the initial array if we are going to grab it from IMDb anyways?

Again, in a perfect world, all the data from IMDb would be perfect and ready to use. However, there are cases where the release date listed on IMDb is its international release date, or the date it premiered at a festival. To avoid these confusions, we start off with what we know to be a delayed date, and then check it against the data from IMDb. If it is later than the date we have, we will change it.

## Future Enhancements
- Writing up text on FAQ section
- Adding media queries to make webpage mobile-friendly
- Have timeline switch in the background of movie info window when user clicks on the option, so when they X out, they see the correct timeline