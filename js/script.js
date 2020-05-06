/*----- constants -----*/
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

const apiKey = "e19d524f";
const baseUrl = "https://www.omdbapi.com/";
const requests = [];
const originalReleaseCalendar = {};
const releaseMonths = {};

/*----- app's state (variables) -----*/
let movieAPIData;


/*----- cached element references -----*/
const $main = $('main');
const $input = $('input[type="text"]')

/*----- event listeners -----*/

/*----- functions -----*/

//initalize webpage app
init();


function init() {
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

        //render in DOM
        render();
  });
};


function addAPIDataToMovies() {

    for(i=0; i<movies.length; i++) {

        //rename variables
        let movie = movies[i];
        let movieAPI = movieAPIData[i][0];

        //check we have the right movie
        //console.log(movie);
        //console.log(movieAPI);

        //grab relevant API data
        movie.poster = movieAPI.Poster;
        movie.newRelease = movieAPI.Released;
        movie.runtime = movieAPI.Runtime;
        movie.director = movieAPI.Director;
        movie.cast = movieAPI.Actors;
        movie.plot = movieAPI.Plot;

    }
};


//place each movie in corresponding yearly release object
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
    console.log(originalReleaseCalendar);  
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
function render() {
    
    //grab entries of calendar object to make it iterable
    let iterableCalendar = Object.entries(originalReleaseCalendar);
    //console.log(iterableCalendar);

    //iterate through each year in the calendar
    for(yearValue of iterableCalendar) {
        //console.log(value[1]);
        
        //the first value will be the year
        let year = yearValue[0];
        //console.log('Year is');
        //console.log(year);

        //add year to the DOM
        $main.append(`<section class='year' id=${year}><h2>${year}</h2></section>`)

        //next get iterable monthly values
        let iterableMonths = Object.entries(yearValue[1]);

        //iterate through each month in calendar
        for(monthValue of iterableMonths) {

            //the first value will be the month 
            // (we get its long string value to render in DOM for user-friendliness)
            let month = convertMonthIdxToStr(monthValue[0]);
            //console.log(iterableMonths);
            //console.log('Month is');
            //console.log(month);

            $(`#${year}`).append(`<div class='month' id=${month}${year}><h3>${month}</h3></div>`);

            //next get iterable release date values
            let iterableDates = Object.entries(monthValue[1]);
            console.log(iterableDates);

            for(dayValue of iterableDates) {

                //the first value will be the day
                let day = dayValue[0];
                //console.log('Day is');
                //console.log(day);

                $(`#${month}${year}`).append(`<div class='release' id='${day}${month}${year}'></div>`);
                //restrict width of div so it doesn't overflow
                $(`#${day}${month}${year}`).css(`width`, '200px');



                //next get iterable movie releases
                let iterableMovies = Object.entries(dayValue[1]);

                for(i=0; i<iterableMovies.length; i++) {

                    //second value will be movie object
                    let movieToAdd = iterableMovies[i][1];
                    //console.log(movieToAdd);

                    //we will want to pass down the previous movie
                    let previousMovie;
                    if (i > 0) { previousMovie = iterableMovies[i-1][1];}

                    //console.log(day);
                    //console.log(month);
                    //console.log(year);

                    //$(`#${day}${month}${year}`).append(`<p>TEST</p>`);

                    //let currentReleaseMonth = $(`${day}${month}${year}`);
                    //console.log(currentReleaseMonth);

                    addToTimeline(movieToAdd, day, month, year, previousMovie);
                }
                //console.log(iterableMovies);
                //console.log(iterableMovies[0][1]);
            }


            //now that we have all posters situated on the month,
            //we need to adjust the bottom margins
            //so that all release dates appear on one line

            //get all release Divs
            let releaseDivs = Object.values($(`#${month}${year}`).children('.release'));

            //iterating backwards through the divs
            for(i=releaseDivs.length; i > -1; i--) {
                
                //if the div is an object (meaning if it is a cluster of posters)
                if (typeof(releaseDivs[i]) === 'object') {
                    //console.log('RD is')
                    //console.log(releaseDivs[i]);
                    //if the next div is also an object
                    if (typeof(releaseDivs[i+1]) === 'object') {
                    //console.log('next RD is');
                    //console.log(releaseDivs[i+1]);

                    //console.log(releaseDivs[i+1]['id']);

                    //get dimensions of posters for that date
                    let divHeight = $(`#${releaseDivs[i+1]['id']}`)[0].getBoundingClientRect();
                    console.log(divHeight);

                    //adjust bottom margin of div to lower it 
                    //the height of the following div
                    $(`#${releaseDivs[i]['id']}`).css('margin-bottom', `-174.98px`);
                    //this solution here in inelegant and is inputting brute data
                    //divHeight value doesn't seem to be working

                    //just a test to make sure we are affecting the right divs
                    //$(`#${releaseDivs[i]['id']}`).css('color', `blue`);

                    }               
                }
            }
        }
    } 
};



function addToTimeline(movie, d, m, y, previousMovie) {

    let posterToAdd;

    //variable for jQuery input for div ID where the movie will be inserted
    let $currentReleaseMonth = $(`#${d}${m}${y}`);
    //find poster url
    let poster = movie.poster;

    //we will want the value of the previous movie if it exists
    let previousPoster;
    if (!previousMovie === false) {
        //if it it exists, grab its poster
        previousPoster = previousMovie.poster;
    }

    //how far along on the x axis of the timeline the movie will be
    //calculation is percentage of release day divided by 30 (monthly average)
    let positioning = parseInt((d/30)*100);
    //variable for HTML input of movie poster
    posterToAdd = `<img class='poster' src=${poster}></img> ${d} ${m}`;

    //if not first movie on that date, remove date at bottom of previous poster
    //if ($currentReleaseMonth.children().length > 0) {
      // console.log(`adding poster for ${movie.title}`)
        //console.log(`the previous poster was for ${previousMovie.title}`)
        //$currentReleaseMonth.prev().html(`<img class='poster' src=${previousPoster}></img>`);
    //}

    //if no poster url is available
    if (poster === 'N/A') {
        //figure out what to do 
    }
    
    //append movie poster to timeline
    $currentReleaseMonth.append(posterToAdd);

    //adjust poster on x-axis
    $currentReleaseMonth.last().css('left', `${positioning}%`);
    //adjust bottom margin
    $currentReleaseMonth.last().css('margin-bottom', `10px`)
    //should come down distance of posters from previous date
    //it is DIV AFTER
}