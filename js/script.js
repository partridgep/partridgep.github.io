/*----- constants -----*/
//all the movies that have been delayed due to pandemic
const movies = [
    {title: 'Mission Impossible 7',
    originalRelease: '23 Jul 2021',
    imdb: 'tt9603212'}
    ,
    {title: 'Blue Story',
    originalRelease: '20 Mar 2020',
    imdb: 'tt9285882'}
    ,
    {title: 'A Quiet Place Part II', 
    originalRelease: '08 Mar 2020',
    imdb: 'tt8332922'}
    ,
    {title: 'No Time To Die',
    originalRelease: '10 Apr 2020',
    imdb: 'tt2382320'}
    ,
    {title: 'Black Widow',
    originalRelease: '11 May 2020',
    imdb: 'tt3480822'}
    ,
    {title: 'Bull',
    originalRelease: '20 Mar 2020',
    imdb: 'tt10008784'}
    ,
    {title: 'Mulan',
    originalRelease: '27 Mar 2020',
    imdb: 'tt4566758'}
    ,
    {title: 'The Lovebirds',
    originalRelease: '03 Apr 2020',
    imdb: 'tt8851668'}
    ,
    {title: 'The Climb',
    originalRelease: '20 Mar 2020',
    imdb: 'tt8637440'
    }
    ,
    {title: 'Deerskin',
    originalRelease: '20 Mar 2020',
    imdb: 'tt8193790'}
    ,
    {title: 'Run',
    originalRelease: '08 May 2020',
    imdb: 'tt8633478'}
    ,
    {title: 'Scoob!',
    originalRelease: '15 May 2020',
    imdb: 'tt3152592'}
    ,
    {title: 'Working Man',
    originalRelease: '27 Mar 2020',
    imdb: 'tt8391044'}
]

//constants for first movie API
//for faster loading, management of long array of movies
const apiKey = "e19d524f";
const baseUrl = "https://www.omdbapi.com/";
const requests = [];

//we will be using a second API to pull
//more information when we access a specific film
const apiForIndividualMovie = {
	"async": true,
	"crossDomain": true,
	"url": "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1375666",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
		"x-rapidapi-key": "c72e51845amsh13ded685a732780p12270ejsn5acc10aa1952"
	}
}
const urlForIndividualMovie = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/";

//constants used to sort movies
const originalReleaseCalendar = {};
const newReleaseCalendar = {};
const releaseMonths = {};


/*----- app's state (variables) -----*/
let movieAPIData, isOriginal;


/*----- cached element references -----*/
const $main = $('main');
const $input = $('input[type="text"]')
const $slider = $("#cal_type");


/*----- event listeners -----*/
$slider.change(setCurrentCalendar);
$main.click(getMovieOnPoster);


/*----- functions -----*/

//initalize webpage app
//init();


function init() {
    isOriginal = true;
    getAPIMovieData();
};


//grab movie data from API
function getAPIMovieData() {
  
    //create variable for easy interpolation
    const url = baseUrl + "?apiKey=" + apiKey + "&i=";
  
    //for each movie in movies array,
    //grab data from API
    movies.forEach(function(movie) {
        //push AJAX request with individualized url
        requests.push($.ajax({url: url + movie.imdb}));
    });

    //once we got that request, proceed
    $.when.apply(undefined, requests).then(function(...args) {
        //push array of results into our API array
        movieAPIData = args;

        //call function to add API data to movies array
        addAPIDataToMovies();

        //place movies in original release time objects
        organizeMoviesByOriginalRelease();

        //we also want to have the delayed movie calendar prepared
        organizeMoviesByDelayedRelease();

        //render original calendar in DOM
        render(originalReleaseCalendar);
  });
};


function addAPIDataToMovies() {

    for(i=0; i<movies.length; i++) {

        //rename variables
        let movie = movies[i];
        let movieAPI = movieAPIData[i][0];

        //grab relevant API data
        movie.poster = movieAPI.Poster;
        movie.newRelease = movieAPI.Released;
        movie.runtime = movieAPI.Runtime;
        movie.director = movieAPI.Director;
        movie.cast = movieAPI.Actors;
        movie.plot = movieAPI.Plot;

    }
};


//place each movie in corresponding original release object
function organizeMoviesByOriginalRelease() {

    for(movie of movies) {

        let releaseDate = movie.originalRelease;

        //get original release year (last 4 characters of release date)
        let originalYear = releaseDate.slice(-4);

        //get original release month (middle 3 characters of release date)
        let originalMonth = releaseDate.slice(-8, -5);
        //get monthly index (ex. 1 for Jan)
        originalMonth = convertMonthStrToIdx(originalMonth);

        //get original release day (first 2 characters of released date)
        let originalDay = releaseDate.slice(0, 2);

        //if the release calendar does not have a year object, create it
        if (!originalReleaseCalendar[`${originalYear}`]) {
            originalReleaseCalendar[`${originalYear}`] = {
                [`${originalMonth}`]: []
                }
            ;}

        //if the release year does not have a month object, create it
        if (!originalReleaseCalendar[`${originalYear}`][`${originalMonth}`]) {
            originalReleaseCalendar[`${originalYear}`][`${originalMonth}`] = [];
        }

        //if the release month does not have a date object, create it
        if (!originalReleaseCalendar[`${originalYear}`][`${originalMonth}`][`${originalDay}`]) {
            originalReleaseCalendar[`${originalYear}`][`${originalMonth}`][`${originalDay}`] = [];
        }
        
        //once those objects exist, add movie to that timeframe release bucket
        originalReleaseCalendar[`${originalYear}`][`${originalMonth}`][`${originalDay}`].push(movie); 

        //this will end up sorted because integers are sorted 
        //numerically in objects since ES6!!!!

    }
    //console.log(originalReleaseCalendar);  
};


//place each movie in corresponding original release object
function organizeMoviesByDelayedRelease() {

    for(movie of movies) {

        //if no new release date, go onto next movie
        if (movie.newRelease === 'N/A') return;

        let releaseDate = movie.newRelease;

        //get original release year (last 4 characters of release date)
        let newYear = releaseDate.slice(-4);

        //get original release month (middle 3 characters of release date)
        let newMonth = releaseDate.slice(-8, -5);
        //get monthly index (ex. 1 for Jan)
        newMonth = convertMonthStrToIdx(newMonth);

        //get original release day (first 2 characters of released date)
        let newDay = releaseDate.slice(0, 2);

        //if the release calendar does not have a year object, create it
        if (!newReleaseCalendar[`${newYear}`]) {
            newReleaseCalendar[`${newYear}`] = {
                [`${newMonth}`]: []
                }
            ;}

        //if the release year does not have a month object, create it
        if (!newReleaseCalendar[`${newYear}`][`${newMonth}`]) {
            newReleaseCalendar[`${newYear}`][`${newMonth}`] = [];
        }

        //if the release month does not have a date object, create it
        if (!newReleaseCalendar[`${newYear}`][`${newMonth}`][`${newDay}`]) {
            newReleaseCalendar[`${newYear}`][`${newMonth}`][`${newDay}`] = [];
        }
        
        //once those objects exist, add movie to that timeframe release bucket
        newReleaseCalendar[`${newYear}`][`${newMonth}`][`${newDay}`].push(movie); 

        //this will end up sorted because integers are sorted 
        //numerically in objects since ES6!!!!

    }
    console.log(newReleaseCalendar);  
};



//return month idx for easy calendar object sorting
function convertMonthStrToIdx(month) {

    if (month === 'Jan') {
        month = 1;
    }
    else if (month === 'Feb') {
        month = 2;
    }
    else if (month === 'Mar') {
        month = 3;
    }
    else if (month === 'Apr') {
        month = 4;
    }
    else if (month === 'May') {
        month = 5;
    }
    else if (month === 'Jun') {
        month = 6;
    }
    else if (month === 'Jul') {
        month = 7;
    }
    else if (month === 'Aug') {
        month = 8;
    }
    else if (month === 'Sep') {
        month = 9;
    }
    else if (month === 'Oct') {
        month = 10;
    }
    else if (month === 'Nov') {
        month = 11;
    }
    else if (month === 'Dec') {
        month = 12;
    }   
    return month;
};

//return full month string for user view in the DOM
function convertMonthIdxToStr(month) {

    if (month === '1') {
        month = 'January';
    }
    else if (month === '2') {
        month = 'February';
    }
    else if (month === '3') {
        month = 'March';
    }
    else if (month === '4') {
        month = 'April';
    }
    else if (month === '5') {
        month = 'May';
    }
    else if (month === '6') {
        month = 'June';
    }
    else if (month === '7') {
        month = 'July';
    }
    else if (month === '8') {
        month = 'August';
    }
    else if (month === '9') {
        month = 'September';
    }
    else if (month === '10') {
        month = 'October';
    }
    else if (month === '11') {
        month = 'November';
    }
    else if (month === '12') {
        month = 'December';
    }
    return month;
};
    

//render in the DOM   
function render(calendar) {

    //clear calendar in the DOM
    $main.html('');
    
    //grab entries of calendar object to make it iterable
    let iterableCalendar = Object.entries(calendar);

    //iterate through each year in the calendar
    for(yearValue of iterableCalendar) {
        
        //the first value will be the year
        let year = yearValue[0];

        //add year to the DOM
        $main.append(`<section class='year' id=${year}><h2>${year}</h2></section>`)

        //next get iterable monthly values
        let iterableMonths = Object.entries(yearValue[1]);

        //iterate through each month in calendar
        for(monthValue of iterableMonths) {

            //the first value will be the month 
            //(we get its long string value to render in DOM for user-friendliness)
            let month = convertMonthIdxToStr(monthValue[0]);

            $(`#${year}`).append(`<div class='month' id=${month}${year}><h3>${month}</h3></div>`);

            //next get iterable release date values
            let iterableDates = Object.entries(monthValue[1]);

            for(dayValue of iterableDates) {

                //the first value will be the day
                let day = dayValue[0];

                //add a release day div
                $(`#${month}${year}`).append(`<div class='release' id='${day}${month}${year}'></div>`);
                //restrict width of div so it doesn't overflow
                //$(`#${day}${month}${year}`).css(`width`, '200px');

                //next get iterable movie releases
                let iterableMovies = Object.entries(dayValue[1]);

                for(i=0; i<iterableMovies.length; i++) {

                    //second value will be movie object
                    let movieToAdd = iterableMovies[i][1];

                    addToTimeline(movieToAdd, day, month, year);
                }

                //now that all posters are added to the release div, 
                // append date paragraph to the bottom
                $(`#${day}${month}${year}`).append(`<p>${day} ${month}</p>`);


                //Now we run into a problem: each new release div pushes
                //previous release div up by its height. This doesn't look good!
                //To fix this, we must adjust the previous div's margin
                fixPostersYAxis(day, month, year);

            }
        }
    } 
};

function addToTimeline(movie, d, m, y) {

    let posterToAdd;

    //variable for jQuery input for div ID where the movie will be inserted
    let $currentReleaseMonth = $(`#${d}${m}${y}`);
    //find poster url
    let poster = movie.poster;

    //how far along on the x axis of the timeline the movie will be
    //calculation is percentage of release day divided by 30 (monthly average)
    let positioning = parseInt((d/30)*100);
    //variable for HTML input of movie poster
    posterToAdd = `<img class='poster' src=${poster}>`;

    //if no poster url is available
    if (poster === 'N/A') {
        //figure out what to do 
        posterToAdd = `<div class='container'><img class='poster'><div class='posterTitle'>${movie.title}</div></div>`;
    }
    
    //append movie poster to timeline
    $currentReleaseMonth.append(posterToAdd);

    //adjust poster on x-axis
    $currentReleaseMonth.last().css('left', `${positioning}%`);
};

//make sure all movie posters are well aligned on the y-axis
function fixPostersYAxis(d, m, y) {

    //if the previous div is also a release div
    if ($(`#${d}${m}${y}`).prev().hasClass('release')) {
                    
        //grab that div's ID for easy manipulatiom
        let prevID = $(`#${d}${m}${y}`).prev().attr('id');
        
        //see how many posters are in the current div
        //we substract 1 because 1 child will be the date paragraph
        let numPosters = $(`#${d}${m}${y}`).children().length - 1;
        
        //get the height of an individual poster (first three characters)
        //add 5 for its margin
        let posterHeight = parseInt(($(`.poster`).css('height')).slice(0, 3)) + 5;

        //finally, calculate the margin we'll have to substract to our current div
        //that's the number of posters times the height of a poster
        //plus 18px for the date paragraph
        let divMargin = numPosters * posterHeight + 18;

        //set the bottom margin for the previous release div 
        //to be negative that amount
        $(`#${prevID}`).css('margin-bottom', `-${divMargin}px`);

        //now all of our release divs are aligned on the timeline!!!
    }
};

//changing calendars once toggled
function setCurrentCalendar() {

    //if slider is to the left
    if ($slider.val() === '1') {
        //set boolean to true
        isOriginal = true;
        //render original release calendar
        render(originalReleaseCalendar);
    }
    //if it's the to right
    else {
        //set boolean to false
        isOriginal = false;
        //render new release calendar
        render(newReleaseCalendar);
    }
};

//show movie details
function getMovieOnPoster(e) {

    //get value of movie clicked
    let clickedPoster = e.target;

    let $clickedPoster = $(clickedPoster);
    let clickedPosterSrc = $clickedPoster.attr('src')
    let clickedPosterText = $(clickedPoster).text();

    for(movie of movies) {
        if (movie.poster === clickedPosterSrc && !movie.poster === false) {
            showMovieDetails(movie);      
        }
        else if (movie.title === $(clickedPoster).text() && $clickedPoster.hasClass('posterTitle')){
            showMovieDetails(movie);
        }
    }
};

function showMovieDetails(movie) {

    console.log(movie);

    dimPageBackground();
                     
    $main.append(`<section class="movieInfo">${movie.title}</section>`);

}

function dimPageBackground() {
    
    //add overlay darkening filter to page sections
    $main.addClass('overlay');

    //lower items opacity so they get darkened too
    $('h1').css('opacity', '0.5');
    $('input').css('opacity', '0.5');
    $('img').css('opacity', '0.5');
    $('h2').css('opacity', '0.5');
    $('h3').css('opacity', '0.5');
    $('p').css('opacity', '0.5');
    $('.posterTitle').css('opacity', '0.5');

    //turn off any event listeners or toggles
    //so user can't access them
    $slider.off();
    $main.off();
    $('#cal_type').prop('disabled', true);
    $('input[type="text"]').prop('disabled', true);
};


function removeDim() {

    //remove overlay darkening filter to page sections
    $main.removeClass('overlay');

    //reset items opacity
    $('h1').css('opacity', '1');
    $('input').css('opacity', '1');
    $('img').css('opacity', '1');
    $('h2').css('opacity', '1');
    $('h3').css('opacity', '1');
    $('p').css('opacity', '1');
    $('.posterTitle').css('opacity', '1')

    //turn back on any event listeners or toggles
    $slider.change(setCurrentCalendar);
    $main.click(getMovieOnPoster);
    $('#cal_type').prop('disabled', false);
    $('input[type="text"]').prop('disabled', false);
};


