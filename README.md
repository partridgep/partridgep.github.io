# Quarantine Movie Release Schedule
A Front-End responsive web application that displays a timeline of all movie releases affected by the pandemic using HTML, CSS, JavaScript and jQuery and utilizing data from two movie database APIs.


## Getting Started
[Click Here](https://partridgep.github.io/) to get started.

## Technologies Used
* HTML
* CSS
* JavaScript/jQuery
* Google Fonts
* OMDB API for movie data on posters, director, cast and release date
* Unofficial IMDb API for movie data on trailers and plot

## Screenshots

### Wireframe
![image](https://i.imgur.com/uBlWmlj.png)
![image](https://i.imgur.com/7oZvzNX.png)

### Completed Project
![image](https://i.imgur.com/6SgAtsW.png)
![image](https://i.imgur.com/n3NOoG2.png)

## Functioning

This web app takes movie data from APIs to display a release schedule timeline, which can be toggled between *Original* and *Delayed*.

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
8. Additionally, the Search bar allows the user to type in movie title and see results, which will be in the form of a link that, upon being clicked, will render a movie info window.
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

### How and why are movies sorted by release dates into calendar objects?

Initially, we have one big array that contains all the movie objects. When it comes to adding each movie to the DOM, it is necessary that we add them year by year, month by month, and finally release date by release date. That's why we iterate through our movies array and, for both the original and delayed calendar:

* Place each movie in a year "bucket" (a year object)
	* If a bucket doesn't exist yet for that year, it must be created
* Then, place it in a month "bucket"
	* If a bucket doesn't exist yet for that month, it must be created
* Then, place it in a release date bucket
	* If a bucket doesn't exist yet for that date, it must be created

Now, for the question: **How do we know these buckets will end up sorted?** How do we guarantee the 2020 bucket comes before the 2022 bucket, if JavaScript objects aren't known to guarantee order? 

Well, it turns out [property order is predictable in JavaScript objects since ES6](https://www.stefanjudis.com/today-i-learned/property-order-is-predictable-in-javascript-objects-since-es2015/). All properties that are integer indices appear first in the overall object property order and are sorted numerically, so if we represent all of our date values by integers (by converting all month strings to integers), then the calendar object should render as required.

### How does each release date get rendered on the right point on the timeline in the DOM?

Horizontally, it's quite simple. If we take the line as a representation of a month, which is about 31 days, then each date is a point on that line. All we have to do is set its x-position as a percentage of the line. If the movie comes out on the 10th of month, then we calculate its position as:

```
let positioning = parseInt((d/32)*100);
```
(we make it out of 32 so that any movie that comes out on the 31st isn't too far off the line)

Then, we set its position in jQuery:

```
$currentReleaseDate.last().css('left', `${positioning}%`);
```

That's it!

The problem arises when you add a second release date on the same month. By default, it will push the previous release div up, as it will take up its place vertically. Therefore, after adding each release div, we must adjust the previous div's bottom margin:

```
$(`#${prevID}`).css('margin-bottom', `-${divMargin}px`);
```
with ``divMargin`` being equal to the number of posters of the current release div multiplied the height of a poster.

*Without fixing bottom margins:*

![image](https://i.imgur.com/Ajuxdet.png)

*After fixing bottom margins:*

![image](https://i.imgur.com/fG55G3h.png)


## Future Enhancements
- Add more trivia and sources for movies
- Ensure movie posters are not too close to one another