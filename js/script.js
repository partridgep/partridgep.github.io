/*----- constants -----*/
//all the movies that have been delayed due to pandemic
const movies = [
    {title: 'A Quiet Place Part II', imdb: 'tt8332922', originalRelease: '08 Mar 2020', newRelease: '04 Sep 2020', sources: ['https://www.indiewire.com/2020/03/a-quiet-place-2-release-date-delayed-coronavirus-1202217148/'] 
    }
    ,
    {title: 'Antebellum', imdb: 'tt10065694', originalRelease: '24 Apr 2020', newRelease: '21 Aug 2020', sources: ['https://www.variety.com/2020/film/news/janelle-monae-antebellum-new-release-date-1234595089/']}
    ,
    {title: 'Antlers', imdb: 'tt7740510', originalRelease: '17 Apr 2020', newRelease: 'TBD', sources: ['https://www.theguardian.com/film/2020/mar/13/disney-delays-release-of-mulan-the-new-mutants-and-antlers-as-black-widow-speculation-grows']}
    ,
    {title: 'Artemis Fowl', imdb: 'tt3089630', originalRelease: '29 May 2020', newRelease: '12 Jun 2020', onVOD: 'Disney+', sources: ['https://www.deadline.com/2020/04/artemis-fowl-disney-release-trolls-world-tour-1202900186/'], trivia: ['The first Disney movie to be pushed to its streaming service due to the pandemic.']}
    ,
    {title: 'Black Widow', imdb: 'tt3480822', originalRelease: '11 May 2020', newRelease: '06 Nov 2020', sources: ['https://www.hollywoodreporter.com/heat-vision/black-widow-mulan-nab-new-release-dates-jungle-cruise-delayed-a-year-1286854', 'https://www.theverge.com/2020/3/17/21183747/black-widow-delayed-coronavirus-marvel-studios-disney-mulan-new-mutants-amc-regal', 'https://time.com/5804878/black-widow-coronavirus-release-delayed/'], trivia:['There was speculation that Disney would release the film on Disney+, but as a Marvel title, it was necessary to the studio that it  do well in theaters.', "'Black Widow' shifting dates could trigger a domino effect on release dates for the rest of the movies set in the Marvel Cinematic Universe due to their interconnected nature."]}
    ,
    {title: 'Blue Story', imdb: 'tt9285882', originalRelease: '20 Mar 2020', newRelease: 'TBD', sources: ['https://www.hollywoodreporter.com/news/paramount-pulls-lovebirds-blue-story-due-coronavirus-1284257']}
    ,
    {title: 'Bull', imdb: 'tt10008784', originalRelease: '20 Mar 2020', newRelease: '01 May 2020', onVOD: 'yes', sources: ['https://www.deadline.com/2020/03/dosed-human-capital-searchlight-pictures-focus-features-a24-specialty-box-office-1202886970/']}
    ,
    {title: 'Candyman', imdb: 'tt9347730', originalRelease: '12 Jun 2020', newRelease: '25 Sep 2020', sources: ['https://variety.com/2020/film/box-office/candyman-delayed-coronavirus-jordan-peele-1203542508/']}
    ,
    {title: 'Charm City Kings', imdb: 'tt9048840', originalRelease: '10 Apr 2020', newRelease: 'TBD', onVOD: 'HBO Max', sources: ['https://deadline.com/2020/05/sony-pictures-classics-charm-city-kings-sells-to-hbo-max-1202926812/'], trivia: ['The opening was shifted from April 10, 2020, then to August 14, 2020, again to August 21, 2020 until it was acquired by HBO Max in May.']}
    ,
    {title: 'The Climb', imdb: 'tt8637440', originalRelease: '20 Mar 2020', newRelease: 'TBD', sources: ['https://deadline.com/2020/03/sony-pictures-classics-release-the-climb-postponed-in-wake-of-ny-la-theater-closures-1202884481/']}
    ,
    {title: 'Deerskin', imdb: 'tt8193790', originalRelease: '20 Mar 2020', newRelease: 'TBD'}
    ,
    {title: 'Doctor Strange in the Multiverse of Madness', imdb: 'tt9419884', originalRelease: '07 May 2021', newRelease: '25 Mar 2022', sources: ['https://www.theverge.com/2020/4/24/21235283/spider-man-spiderverse-homecoming-delay-release-date-trilogy-marvel-venom-doctor-strange-thor'], trivia: ["The film was first pushed to November 5th, 2021, but was delayed again when Sony Studio's Spiderman sequel was pushed back."]}
    ,
    {title: 'Dungeons & Dragons', imdb: 'tt2906216', originalRelease: '19 Nov 2021', newRelease: '27 May 2022', sources: ['https://theplaylist.net/paramount-mission-impossible-delays-20200424/']}
    ,
    {title: 'F9', imdb: 'tt5433138', originalRelease: '22 May 2020', newRelease: '02 Apr 2021'}
    /*
    {title: 'Mission Impossible 7', imdb: 'tt9603212', originalRelease: '23 Jul 2021', newRelease: '19 Nov 2021'
    }
    /*
    {title: 'Mission Impossible 7',
    originalRelease: '23 Jul 2021',
    imdb: 'tt9603212'}
    ,
    ,
    {title: 'No Time To Die',
    originalRelease: '10 Apr 2020',
    imdb: 'tt2382320'}
    ,
    {title: 'Mulan',
    originalRelease: '27 Mar 2020',
    imdb: 'tt4566758',
    trivia: ["Disney first cancelled Mulan's premiere in China, despite hopes that it would perform well there, but did not move its opening date in the rest of the world. Finally, the movie got pushed back to July."]}
    ,
    {title: 'The Lovebirds',
    originalRelease: '03 Apr 2020',
    imdb: 'tt8851668',
    onVOD: 'Netflix'}
    ,
    ,
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
    imdb: 'tt8391044'
}*/
]

//constants for sources urls
const imdbUrl = 'https://www.imdb.com/title/';
const vultureUrl = 'https://www.vulture.com/2020/04/here-are-all-the-movies-and-tv-shows-affected-by-coronavirus.html';

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


//constants for movie trailer url
const trailerUrl = 'https://www.imdb.com/video/imdb/';
const trailerUrlPart2 = '/imdb/embed?autoplay=false&width=480';

//HTML constants for movie info window
const infoWindow = `<section class='movieInfo'>
                        <p id='closeInfo'><a href=''>X</a></p>
                        <div class="carousel__button--next"></div>
                        <div class="carousel__button--prev"></div>
                    </section>`;
const infoLoading = '<p id="load">Loading...</p>';
const infoWindowLinks = `<section id='infoLinks'>
                            <a href='#'>Switch Timelines</a>
                            <a href='#'>View in <span id='timeline_span'>Original</span> Timeline</a>
                            <a href='#'>Add to Release Tracker</a>
                        </section>`;
const infoWindowTrailer = `<div id='trailer'>
                                <iframe scroll = 'no' allowfullscreen='true' scrolling='no' autoplay='false' src=`;
const infoWindowTrailerPart2 = ` type="video/mp4">Your browser does not support the video tag.</iframe></div>`;
const infoWindowCovidFacts = `<section id='covid-facts'></section>`;
const infoWindowIMDbFacts = `<section id='imdb-facts'></section`;
const infoWindowSources = `<p id='sources'>Sources: </p>`

//HTML constants for FAQ
const faqSection = `<section id='faq'></section`;
const faqTitle = `<h1>Frequently Asked Questions</h1>`;
const faQuestion1 = `<p class='question'>Why this project?</p>`;
const faQuestion2 = `<p class='question'>How confident can we be about the new release dates in the delayed calendar?</p>`;
const faQuestion3 = `<p class='question'>How will this affect the entertainment industry?</p>`;
const faqAnswer1 = `<p class='answer'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae provident minima magnam odit debitis quisquam, excepturi, veritatis, sit accusamus temporibus amet nihil velit cupiditate repellendus voluptatum! Fuga beatae mollitia quos.</p>`
const faqAnswer2 = `<p class='answer'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae provident minima magnam odit debitis quisquam, excepturi, veritatis, sit accusamus temporibus amet nihil velit cupiditate repellendus voluptatum! Fuga beatae mollitia quos.</p>`
const faqAnswer3 = `<p class='answer'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae provident minima magnam odit debitis quisquam, excepturi, veritatis, sit accusamus temporibus amet nihil velit cupiditate repellendus voluptatum! Fuga beatae mollitia quos.</p>`

//HTML constants for release tracker
const trackerSection = `<section id='release_tracker'>`;
const trackerTitle = `<h1>Release Tracker</h1>`;
const trackerSubtitle = `<h2>Movies whose release dates you wish to track will appear here.</h2>`;


/*----- app's state (variables) -----*/
let movieAPIData, isOriginal, currentMovie;
let originalSorted = [];
let newSorted = [];
let moviesToTrack = localStorage.getItem('Movies To Track');
moviesToTrack = moviesToTrack ? moviesToTrack.split(',') : [];


/*----- cached element references -----*/
const $main = $('main');
const $input = $('input[type="text"]')
const $slider = $("#cal_type");
const $searchLink = $('#search-link');
const $hamburger = $('#nav-right > p');


/*----- event listeners -----*/
$slider.change(setCurrentCalendar);
$main.click(handleClick);
$('form').on('submit', handleSearch);
$hamburger.click(handleHamburger);
$('#title').click(goHome);
$('#home').click(goHome);
$('#faq-burger').click(renderFAQ);
$('#tracker').click(renderTracker);
$('#original').click(toOriginal);
$('#delayed').click(toDelayed);




/*----- functions -----*/

//initalize webpage app
init();


function init() {
    isOriginal = true;
    getAPIMovieData();
    $('#hamburger-slideout').removeClass('hamburger_show');
    $main.removeClass('hamburger_push');
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
        //movie.newRelease = movieAPI.Released;
        movie.runtime = movieAPI.Runtime;
        movie.director = movieAPI.Director;
        movie.cast = movieAPI.Actors;

        //check IMDB's new release date against the one we have
        getNewReleaseDate(movie, movieAPI);

        //add sources urls too
        if (!movie.sources) {movie.sources = []}
        movie.sources.push(imdbUrl+movie.imdb);
        movie.sources.push(vultureUrl);

    };
};

function getNewReleaseDate(movie, movieAPI) {

    let imdbDate = movieAPI.Released;

    //if we have a releasee date that is TBD
    if (movie.newRelease === 'TBD'){
        //and if the IMDB release date is the same as the original release,
        //let's keep it as TBD
        if (imdbDate === movie.originalRelease) {
            console.log(movie.title);
            console.log('no new release date');
            return;
        }
        //else 
        else checkIMDBReleaseDate(movie, imdbDate, false);
        
    }
    //if we already have a new release date in our array
    else if (movie.newRelease) {
        console.log(movie.title);
        console.log(movie.newRelease);
        console.log(movieAPI.Released);
        
        checkIMDBReleaseDate(movie, imdbDate, true);   
    }
    
}

function checkIMDBReleaseDate(movie, imdbDate, againstNew) {
    
    //if IMDB has a different release,
    //and it's from before 2020,
    //don't trust it (e.g. for foreign films)
    if (parseInt(imdbDate.slice(-4)) < 2020) {
        return;
    }
    // it's after 2020, we can trust it
    else if (parseInt(imdbDate.slice(-4)) > 2020) {
        movie.newRelease = imdbDate;
    }
    //if it's in 2020, we'll have to check the date
    else if (parseInt(imdbDate.slice(-4)) === 2020) {
        let imdbMonth = convertMonthStrToIdx(imdbDate.slice(-8, -5));
        let newMonth = convertMonthStrToIdx(movie.newRelease.slice(-8, -5));
        let originalMonth = convertMonthStrToIdx(movie.originalRelease.slice(-8, -5));
        //if it's moved to a later month, trust that date
        //if our new release date is not TBD, we'll check against that
        if (againstNew) {
            if (imdbMonth > newMonth) {
                movie.newRelease = imdbDate;
            };
        }
        //otherwise we'll check against the original month
        else {
            if (imdbMonth > originalMonth) {
                movie.newRelease = imdbDate;
            };
        }
    };
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

    //finally let's make sure our sorted array is fully sorted
    createSortedArray(originalReleaseCalendar);
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

    //finally let's make sure our sorted array is fully sorted
    createSortedArray(newReleaseCalendar)
};


function createSortedArray(calendar) {

    //grab entries of calendar object to make it iterable
    let iterableCalendar = Object.entries(calendar);

    //iterate through each year in the calendar
    for(yearValue of iterableCalendar) {

        //the first value will be the year
        let year = yearValue[0];

        //next get iterable monthly values
        let iterableMonths = Object.entries(yearValue[1]);

         //iterate through each month in calendar
         for(monthValue of iterableMonths) {

            //next get iterable release date values
            let iterableDates = Object.entries(monthValue[1]);

            for(dayValue of iterableDates) {

                //the first value will be the day
                let day = dayValue[0];

                //next get iterable movie releases
                let iterableMovies = Object.entries(dayValue[1]);

                for(i=0; i<iterableMovies.length; i++) {

                    //second value will be movie object
                    let movieToAdd = iterableMovies[i][1];

                    //add movie object to sorted calendar
                    if (calendar === newReleaseCalendar) newSorted.push(movieToAdd);
                    else originalSorted.push(movieToAdd);
                }
            }
        }
    }

    //now make sure array is truly sorted
    if (calendar === newReleaseCalendar) newSorted = fullySortNew(newSorted);
    else originalSorted = fullySortOriginal(originalSorted);
};


function compareOriginalReleaseDates(a, b) {
    const releaseDateA = a.originalRelease;
    const releaseDateB = b.originalRelease;

    let comparison = 0;
    if (releaseDateA > releaseDateB) {
        comparison = 1;
    }
    else if (releaseDateA < releaseDateB) {
        comparison = -1;
    }
    return comparison;
};

function compareNewReleaseDates(a, b) {
    const releaseDateA = a.newRelease;
    const releaseDateB = b.newRelease;

    let comparison = 0;
    if (releaseDateA > releaseDateB) {
        comparison = 1;
    }
    else if (releaseDateA < releaseDateB) {
        comparison = -1;
    }
    return comparison;
}

function fullySortOriginal(array) {

    let toSort = [array[0]];
    let sorted = [];

    for (i=1; i < array.length; i++) {

        let releaseDate = array[i].originalRelease;
        let month = releaseDate.slice(-8, -5);

        if (month === array[i-1].originalRelease.slice(-8, -5)) {
            toSort.push(array[i]);
        }
        else {
            toSort.sort(compareOriginalReleaseDates);
            for(item of toSort) {
                sorted.push(item);
            }
            toSort = [array[i]];
        }
    }
    let lastMonth = toSort;
    lastMonth.sort(compareOriginalReleaseDates);
    for (item of lastMonth) sorted.push(item);
    return sorted;
};

function fullySortNew(array) {

    let toSort = [array[0]];
    let sorted = [];

    for (i=1; i < array.length; i++) {

        let releaseDate = array[i].newRelease;
        let month = releaseDate.slice(-8, -5);

        if (month === array[i-1].newRelease.slice(-8, -5)) {
            toSort.push(array[i]);
        }
        else {
            toSort.sort(compareNewReleaseDates);
            for(item of toSort) {
                sorted.push(item);
            }
            toSort = [array[i]];
        }  
    }
    let lastMonth = toSort;
    lastMonth.sort(compareNewReleaseDates);
    for (item of lastMonth) sorted.push(item);
    return sorted;
};

//changing calendars once toggled
function setCurrentCalendar() {

    //if slider is to the left
    if ($slider.val() === '1') {
        toOriginal();
    }
    //if it's the to right
    else {
        toDelayed();
    }
};

function toDelayed() {

    //make sure the slider is at correct value
    $slider.val('2');
    //set boolean to false
    isOriginal = false;
    //put 'Original' in  bold
    $('#original').removeClass('selected');
    $('#delayed').addClass('selected');
    //render new release calendar
    render(newReleaseCalendar);
};

function toOriginal() {

    //make sure slider is at correct value
    $slider.val('1');
    //set boolean to true
    isOriginal = true;
    //put 'Original' in  bold
    $('#original').addClass('selected');
    $('#delayed').removeClass('selected');
    //render original release calendar
    render(originalReleaseCalendar);
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

    if (month === '1' || month === 'Jan') {
        month = 'January';
    }
    else if (month === '2' || month === 'Feb') {
        month = 'February';
    }
    else if (month === '3' || month === 'Mar') {
        month = 'March';
    }
    else if (month === '4' || month === 'Apr') {
        month = 'April';
    }
    else if (month === '5' || month === 'May') {
        month = 'May';
    }
    else if (month === '6' || month === 'Jun') {
        month = 'June';
    }
    else if (month === '7' || month === 'Jul') {
        month = 'July';
    }
    else if (month === '8' || month === 'Aug') {
        month = 'August';
    }
    else if (month === '9' || month === 'Sep') {
        month = 'September';
    }
    else if (month === '10' || month === 'Oct') {
        month = 'October';
    }
    else if (month === '11' || month === 'Nov') {
        month = 'November';
    }
    else if (month === '12' || month === 'Dec') {
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

        //if no release date do not add to DOM
        if (year === 'TBD') return;

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
                //append date paragraph to the bottom
                $(`#${day}${month}${year}`).append(`<p>${day} ${month}</p>`);


                //Now we run into a problem: each new release div pushes
                //previous release div up by its height. This doesn't look good!
                //To fix this, we must adjust the previous div's margin
                fixPostersYAxis(day, month, year);

            }
        }
    } 

    //after all releases have been added, 
    //create event listeners to hover
    $('img').on('mouseover', handleMouseIn);
    $('.container').on('mouseover', handleMouseIn);
    $('img').on('mouseout', handleMouseOut);
    $('div.container').on('mouseout', handleMouseOut);

};

function addToTimeline(movie, d, m, y) {

    let posterToAdd;

    //variable for jQuery input for div ID where the movie will be inserted
    let $currentReleaseMonth = $(`#${d}${m}${y}`);
    //find poster url
    let poster = movie.poster;

    //how far along on the x axis of the timeline the movie will be
    //calculation is percentage of release day divided by 30 (monthly average)
    let positioning = parseInt((d/31)*100);
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

//show movie details
function handleClick(e) {

    //get value of movie clicked
    let clickedItem = e.target;
    console.log(clickedItem);

    //wrap it in jQuery money
    let $clickedItem = $(clickedItem);
    //get source attribute
    let clickedItemSrc = $clickedItem.attr('src')
    //get text value
    let clickedItemText = $(clickedItem).text();

    //check if we've clicked on a movie poster
    for(movie of movies) {
        //if it's a poster with same poster src as a movie in movies array
        if (movie.poster === clickedItemSrc && !movie.poster === false) {
            //create movie info window
            showMovieDetails(movie);      
        }
        //if it's a placeholder poster whose text matches a title in the movie array
        else if (movie.title === $(clickedItem).text() && $clickedItem.hasClass('posterTitle')){
            //create movie info window
            showMovieDetails(movie);
        }
    };

    //if we click on a movie link on the search page or tracker page
    if (($clickedItem).attr('id') === 'search-link' || ($clickedItem).attr('id') === 'tracked-link') {
        //the movie to show will be the text of the link
        let movieToShow = clickedItemText;
        //find movie with that title
        for (movie of movies) {
            if (movieToShow === movie.title) {
                //show corresponding movie info window
                showMovieDetails(movie);
            };
        };
    };
};

function handleMouseIn(e) {

    //get value of movie hovered
    let hoveredItem = e.currentTarget;

    //wrap it in jQuery money
    let $hoveredItem = $(hoveredItem);

    //make it bigger
    $hoveredItem.animate({height: '160px', width: '110px', marginLeft: '-5px'}, 100);  
    
    //in case it's a poster with no image
    //grab title div
    let target = e.target;
    if ($(target).hasClass('posterTitle')) {
        //make title bigger as well
        $(target).animate({fontSize: '20px'}, 100);
    };

    //lower all previous release divs
    //so the y axis isn't messed up
    let parentDiv = $hoveredItem.parent();
    let previousReleases = $(parentDiv).prevAll();
    for(release of previousReleases) {
        if ($(release).hasClass('release'))
        $(release).animate({bottom: '-=10px'}, 100);
    };

};

function handleMouseOut(e) {

    hoveredItem = e.currentTarget;
    $hoveredItem = $(hoveredItem);
    $hoveredItem.animate({height: '150px', width: '100px', marginLeft: '0px'}, 100);

    let target = e.target;
    if ($(target).hasClass('posterTitle')) {
        $(target).animate({fontSize: '18px'}, 100);
    };

    //bring back up all previous release divs
    //so the y axis isn't messed up
    let parentDiv = $hoveredItem.parent();
    let previousReleases = $(parentDiv).prevAll();
    for(release of previousReleases) {
        if ($(release).hasClass('release'))
        $(release).animate({bottom: '+=10px'}, 100);
    };

};

function showMovieDetails(movie) {

    //make background of page dark and non-interactable
    dimPageBackground();

    //prevent function from repeatedly creating 
    //multiple info windows at once
    if ( $(".movieInfo").parents("main").length == 1 ) { 
        console.log('already movie info here');
        return;
    };

    //render minimal movie info window while API data is loading
    $main.append(infoWindow);
    $infoWindow = $('.movieInfo');
    //show title
    $infoWindow.append(`<h3>${movie.title}</h3>`);

    //if we've already loaded the data from the second API
    if(movie.dataRetrieved) {
        //no need for load time
        renderInfoWindow(movie);
        console.log('rendering now');
    }
    else {
        //tell user data is loading
        $infoWindow.append(infoLoading);
        //grab API data from second API
        getSecondAPIData(movie);
    }
};

//grab new movie info from second API
function getSecondAPIData(movie) {

    //define the URL needed for the API
    apiForIndividualMovie.url = urlForIndividualMovie + movie.imdb;

    //get AJAX data
    $.ajax(apiForIndividualMovie).then(
        function(data) {
            //grab the data
            movieAPIData = data;
            //grab plot
            movie.plot = movieAPIData.plot;
            //grab trailer ID
            movie.trailer = movieAPIData.trailer.id;

            //render the DOM accordingly
            renderInfoWindow(movie);

            movie.dataRetrieved = true;

        }, function(error) {
            //show error if it doesn't work
            console.log(error)
        });
};

//form appropriate URL for movie trailer
function createTrailerLink(movie) {

    //add  trailer ID to URL
    let trailerLink = trailerUrl + movie.trailer + trailerUrlPart2;
    return trailerLink;
};

//load data onto movie indo window
function renderInfoWindow(movie) {

    //get window
    let $infoWindow = $('.movieInfo');
    //remove 'Loading'
    $('#load').remove();
    //add nav links
    $infoWindow.append(infoWindowLinks);
    //change nav links to fit current timeline
    if (isOriginal === false) {$('#infoLinks a > span').text('Delayed');};
    //change last nav link to reflect whether or not the movie is in the release tracker
    if (checkIfInTracker(movie)) {$('#infoLinks > a:last').text('✓ Added to Release Tracker')};

    //add all info
    addTrailer(movie);
    addCovidFacts(movie);
    addIMDbFacts(movie);
    addSources(movie);

    //create event listeners to interact with window
    $main.click(handleWindowClick);

    currentMovie = movie;

};

function checkIfInTracker(movie) {
    //go through array of tracked movies
    for(trackedMovie of moviesToTrack) {
        if (trackedMovie === movie.title) {
            return true
        };
    };
};

function addTrailer(movie) {
    //check if there is a trailer available
    if (movie.trailer) {
        //if there is, get trailer link
        let trailerLink = createTrailerLink(movie);
        //append trailer div to HTML
        let trailerInfoToAppend = `${infoWindowTrailer}'${trailerLink}'${infoWindowTrailerPart2}`;
        //append trailer div to DOM
        $infoWindow.append(trailerInfoToAppend);
    };
};

function addCovidFacts(movie) {
    
    //add a section for Covid facts
    $infoWindow.append(infoWindowCovidFacts);
    let $covidFacts = $('#covid-facts');
    //append release dates
    $covidFacts.append(`<p class='covid_info'>Original Release Date: <span>${movie.originalRelease}</span></p>`);
    $covidFacts.append(`<p class='covid_info'>New Release Date: <span>${movie.newRelease}</span></p>`);
    //if there is info about VOD release
    if (movie.onVOD) {
        //add info
        if (movie.onVOD === 'yes') {$covidFacts.append(`<p class='covid_info'>Release Format: <span> VOD</span></p>`);}
        else $covidFacts.append(`<p class='covid_info'>Release Format: <span> VOD (${movie.onVOD})</span></p>`);
    }
    else {
        $covidFacts.append(`<p class='covid_info'>Release Format: <span> Theatrical</span></p>`);
    }
    //if there is trivia to add
    if (movie.trivia) {
        //create list 
        $covidFacts.append(`<ul>Facts about COVID-19 impact on film: </ul>`);
        let $trivia = $('#covid-facts > ul');
        //add trivia to list
        for (trivia of movie.trivia) {
            $trivia.append(`<li>${trivia}</li`);
        };
    };

    //fix layout if there is no trailer to the left
    if (!movie.trailer) {
        $('#covid-facts > p').removeClass('covid-info');
        $('#covid-facts > p').addClass('noTrailer');
        $('#covid-facts').css({gridColumn: 'span 2'});
        $infoWindow.css({maxWidth: '550px'});
        $('#covid-facts  li').removeClass('covid-info');
        $('#covid-facts > ul').addClass('noTrailer');
        $('#covid-facts  li').addClass('noTrailer');
    };

    $('#movie-infi')
    
};

function addIMDbFacts(movie)  {

    //add section for movie details
    $infoWindow.append(infoWindowIMDbFacts);
    let $imdbFacts = $('#imdb-facts');
    //add plot description if there is one
    if (movie.plot) $imdbFacts.append(`<p class='imdb_info'>Plot: <span>${movie.plot}</span></p>`);
    //add director if there is one
    if (movie.director) $imdbFacts.append(`<p class='imdb_info'>Director: <span>${movie.director}</span></p>`);
    //add cast if there is one
    if (movie.cast) $imdbFacts.append(`<p class='imdb_info'>Cast: <span>${movie.cast}</span></p>`);

    //fix layout if there is no trailer
    if (!movie.trailer) {
        $imdbFacts.css('margin-left', '20px');
    };
};

function addSources(movie) {

    //add new section for sources
    $infoWindow.append(infoWindowSources);
    let $sources = $('#sources');

    //get displayable sources (i.e. 'IMDB' for an IMDb link)
    let sourcesForDisplay = createSources(movie.sources);

    //for each source
    for (i=0; i < movie.sources.length; i++) {
        //add link
        $sources.append(`<a href='${movie.sources[i]}'target='_blank'>${sourcesForDisplay[i]}</a>`)
        //while there is still a source to add, add a comma
        if (i < (movie.sources.length -1)) {$sources.append(', ');}
    };
};

//create displayable sources (i.e. 'IMDB' for an IMDb link)
function createSources(sources) {
    
    //create empty array of displayable sources
    let sourcesForDisplay = [];

    //for each source
    for (source of sources) {
        //create link without 'https://wwww.'
        let gettingSource = source.slice(12, source.length);
        //create empty string to which we will add the final source displauy
        let finalSourceDisplay = '';
        //for each character
        for (char of gettingSource) {
            //add character to final source display
            //if it's a period, stop adding to final source display
            if (char === '.') {break}
            finalSourceDisplay = finalSourceDisplay + char; 
        };

        //change formatting for IMDb 
        if (finalSourceDisplay === 'imdb') {
            sourcesForDisplay.push('IMDb');
        }
        else if (finalSourceDisplay === 'theguardian') {
            sourcesForDisplay.push('The Guardian');
        }
        else if (finalSourceDisplay === 'hollywoodreporter') {
            sourcesForDisplay.push('Hollywood Reporter');
        }
        else if (finalSourceDisplay === 'theverge') {
            sourcesForDisplay.push('The Verge');
        }
        else {
            //for others, add source display in Title Case
            sourcesForDisplay.push(finalSourceDisplay[0].toUpperCase()+finalSourceDisplay.slice(1, finalSourceDisplay.length));
        }
    };
    return sourcesForDisplay;
};

function handleWindowClick(e) {

    //get value of movie clicked
    let clickedItem = e.target;
    console.log(clickedItem);

    //wrap it in jQuery money
    let $clickedItem = $(clickedItem);
    //get text value
    let clickedItemText = $(clickedItem).text();

    //if user clicks on X to close window
    if (clickedItemText === 'X') {
        //prevent from going back to top of page
        e.preventDefault();
        console.log('close window');
        //close window
        $('.movieInfo').remove();
        //restore page background
        removeDim();
    }
    else if (clickedItemText === 'Switch Timelines') {
        console.log('switching');
        switchTimelines();
    }
    //if user clicks on 'View in Timline'
    //(make sure the span acts the same way as the rest as the link)
    else if (clickedItemText[0] === 'V'  || $clickedItem.attr('id') === 'timeline_span') {
        showInTimeline();
    }
    else if (clickedItemText === 'Add to Release Tracker') {
        addToReleaseTracker(currentMovie);
        //tell user item has been added to release tracker
        $clickedItem.text('✓ Added to Release Tracker');
    }
    //if the user clicks on the link that says the movie is already in the release tracker
    else if (clickedItemText[0] === '✓') {
        removeFromReleaseTracker(currentMovie);
        //tell user item has been removed from release tracker
        $clickedItem.text('Add to Release Tracker');
    }
    else if ($clickedItem.hasClass('carousel__button--prev')) {
        getPreviousFilm();
    }
    else if ($clickedItem.hasClass('carousel__button--next')) {
        getNextFilm();
    }
};


function switchTimelines() {

    //change boolean
    if (isOriginal) {isOriginal = false;}
    else (isOriginal = true);

    //change the middle timeline nav to reflect current timeline
    if ($('#infoLinks a > span').text() === 'Original') {
        $('#infoLinks a > span').text('Delayed');
        //change value of toggler in page background
        $('#cal_type').val('2');
        //change display of toggler in background
        $('#original').removeClass('selected');
        $('#delayed').addClass('selected');
    }
    else {
        $('#infoLinks a > span').text('Original');
        $('#cal_type').val('1'); 
        //change display of toggler in background
        $('#original').addClass('selected');
        $('#delayed').removeClass('selected');     
    };
};

function showInTimeline() {

    //make sure timeline switcher is back on page
    $('#changeView').removeClass('hidden');
    $slider.on();
    $('#cal_type').prop('disabled', false);

    //if in Original Timeline
    if (isOriginal) {
        //render page in original timeline
        removeDim()
        render(originalReleaseCalendar);
        //find matching release div
        let releaseMonth = convertMonthIdxToStr(currentMovie.originalRelease.slice(-8, -5));
        let releaseYear = currentMovie.originalRelease.slice(-4);
        //animate and jump to matching release div
        $('html, body').animate({
            scrollTop: $(`#${releaseMonth}${releaseYear}`).offset().top-300,
        }, 1000);
    }
    else {
        removeDim();
        render(newReleaseCalendar);
        let releaseMonth = convertMonthIdxToStr(currentMovie.newRelease.slice(-8, -5));
        let releaseYear = currentMovie.newRelease.slice(-4);
        $('html, body').animate({
            scrollTop: $(`#${releaseMonth}${releaseYear}`).offset().top-300,
        }, 1000);
    };
};

function addToReleaseTracker(movie) {

    //add movie to array of movies to track
    moviesToTrack.push(movie.title);
    //add array of movies to track to local storage
    localStorage.setItem('Movies To Track', moviesToTrack.toString());

};

function removeFromReleaseTracker(movie) {

    //go through array of tracked movies
    for (i=0; i<moviesToTrack.length; i++) {
        //if movie matches one of the tracked movies
        if (moviesToTrack[i] === movie.title) {
            //remove from array of tracked movies
            moviesToTrack.splice(i, 1);
            //add updated array of tracked movies to local storage
            localStorage.setItem('Movies To Track', moviesToTrack.toString());
        }
    };
};

function getPreviousFilm() {

    //create variable for the previous film
    let previousFilm = '';

    //check which timeline we're in
    if (isOriginal) {
        //iterate through all movies in original sorted array
        for (i=1; i<originalSorted.length; i++) {
            //if we find a match
            if (currentMovie.title === originalSorted[i].title) {
                //get the previous film in the array
                previousFilm = originalSorted[i-1];
                //take down info window for current film
                $('.movieInfo').remove();
                //create info window for previous film
                showMovieDetails(previousFilm);
                //make sure the loop stops iterating
                //this is a bug fix, otherwise repeatedly clicking previous button doesn't work
                break;
            }
        }
    }
    //do similar process in delayed timeline
    else if (isOriginal === false) {
        for (i=1; i<newSorted.length; i++) {
            if (currentMovie.title === newSorted[i].title) {
                previousFilm = newSorted[i-1];
                $('.movieInfo').remove();
                showMovieDetails(previousFilm);
                break;
            }
        }
    }
};

function getNextFilm() {

    if (isOriginal) {
        for (i=0; i<originalSorted.length-1; i++) {
            if (currentMovie.title === originalSorted[i].title) {
                let nextFilm = originalSorted[i+1];
                $('.movieInfo').remove();
                showMovieDetails(nextFilm);
                break;
            }
        }
    }
    else if (isOriginal === false) {
        for (i=0; i<newSorted.length-1; i++) {
            if (currentMovie.title === newSorted[i].title) {
                let nextFilm = newSorted[i+1];
                $('.movieInfo').remove();
                showMovieDetails(nextFilm);
                break;
            }
        }
    }
};

function handleSearch(e) {

    //prevent reloading of page
    e.preventDefault();

    //if nothing has been entered, don't search
    if ($input.val() === '') return; 

    //get lower case so it doesn't matter how user typed in title
    userInput = $input.val().toLowerCase();

    //clear the input
    $input.val('');

    //check if it matches a movie in array
    for (movie of movies) {
        if (userInput === movie.title.toLowerCase()) {
            //if so, render the search results
            renderSearchResults(movie.title);
            //exit function
            return;
        };
    };

    //if not a movie in array display lack of results
    renderSearchResults('No Results Found');

};

function renderSearchResults(title) {

    //remove timeline switcher (no need here)
    $('#changeView').addClass('hidden');
    $slider.off();
    $('#cal_type').prop('disabled', true);

    //create new search results section on page
    $main.html('');
    $main.append("<section id='search-results'></section>");
    $('#search-results').append("<h1>Search Results</h1>");
    if (title === 'No Results Found') {
        $('#search-results').append(`<ul><li>${title}</li></ul>`);
    }
    else {
        $('#search-results').append(`<ul><li><a id='search-link' href='#'>${title}</a></li></ul>`);
    };
};

function handleHamburger() {

    //show or remove hamburger menu from view
    $('#hamburger-slideout').toggleClass('hamburger_show');
    //change opacity of HTML elements
    $('img').toggleClass('half_opacity');
    $('.posterTitle').toggleClass('half_opacity');
    $('#changeView p').toggleClass('half_opacity');
    $('.year p').toggleClass('half_opacity');
    $('#title').toggleClass('half_opacity');
    $('footer').toggleClass('half_opacity');

    //if we are showing the hamburger menu
    if ($('#hamburger-slideout').hasClass('hamburger_show')) {
        //push the rest of the page to the left
        pushToLeft();
        }
     else {
         //otherwise push it back to the right
         pushToRight();
    }
};

function pushToLeft() {
    
    $main.animate({right: '300px'}, 250);
    $('nav').animate({right: '300px'}, 250);
    $('#changeView').animate({right: '300px'}, 250);
    $('footer').animate({right: '300px'}, 250);
    $slider.off();
    $main.off();
    $('#cal_type').prop('disabled', true);
    $('input[type="text"]').prop('disabled', true);
    
};

function pushToRight() {
    
    $main.animate({right: '0'}, 250);
    $('nav').animate({right: '0'}, 250);
    $('#changeView').animate({right: '0'}, 250);
    $('footer').animate({right: '0'}, 250);
    $slider.change(setCurrentCalendar);
    $main.click(handleClick);
    $('#cal_type').prop('disabled', false);
    $('input[type="text"]').prop('disabled', false);

};


function goHome() {

    //make sure timeline switcher is back on page
    //(if we clicked on this after the search page)
    $('#changeView').removeClass('hidden');
    $slider.on();
    $('#cal_type').prop('disabled', false);

    //remove hamburger menu and go back to main 
    goBackToMain();

    //render appropriate calendar
    if (isOriginal) render(originalReleaseCalendar);
    else render(newReleaseCalendar);
    
};

function goBackToMain() {

    //remove hamburger menu from view
    $('#hamburger-slideout').removeClass('hamburger_show');
    //reset opacity for all HTML elements
    fullOpacity();
    //push HTML elements back to the right
    pushToRight();
    //reset main
    $main.html('');
    
};

function fullOpacity() {
    $('img').removeClass('half_opacity');
    $('.posterTitle').removeClass('half_opacity');
    $('#changeView p').removeClass('half_opacity');
    $('.year p').removeClass('half_opacity');
    $('#title').removeClass('half_opacity');
    $('footer').removeClass('half_opacity');   
};

function renderFAQ() {

    //remove hamburger menu and go back to main 
    goBackToMain();

    //make sure timeline switcher is off page
    //(if we clicked on this after the search page)
    $('#changeView').addClass('hidden');
    $slider.off();
    $('#cal_type').prop('disabled', true);

    $main.append(faqSection);
    $faqSection = $('#faq');
    $faqSection.append(faqTitle);
    $faqSection.append(faQuestion1);
    $faqSection.append(faqAnswer1);
    $faqSection.append('<br>');
    $faqSection.append(faQuestion2);
    $faqSection.append(faqAnswer2);
    $faqSection.append('<br>');
    $faqSection.append(faQuestion3);
    $faqSection.append(faqAnswer3);
    $faqSection.append('<br>');


    
};

function renderTracker() {

    //remove hamburger menu and go back to main 
    goBackToMain();

    //make sure timeline switcher is off page
    //(if we clicked on this after the search page)
    $('#changeView').addClass('hidden');
    $slider.off();
    $('#cal_type').prop('disabled', true);

    $main.append(trackerSection);
    $trackerSection = $('#release_tracker');
    $trackerSection.append(trackerTitle);
    $trackerSection.append(trackerSubtitle);
    $trackerSection.append(`<ul></ul>`);

    for(movie of moviesToTrack) {
        $('#release_tracker ul').append(`<li><a id='tracked-link' href='#'>${movie}</a></li>`);
    }


};

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
    $('img').off();
    $('.container').off();
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
    $main.click(handleClick);
    $('#cal_type').prop('disabled', false);
    $('input[type="text"]').prop('disabled', false);
    $('img').on('mouseover', handleMouseIn);
    $('.container').on('mouseover', handleMouseIn);
    $('img').on('mouseout', handleMouseOut);
    $('div.container').on('mouseout', handleMouseOut);
};