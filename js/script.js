/*----- constants -----*/
const movies = [
    {title: 'Blue Story',
    originalRelease: '20 Mar 2020',
    imdb: 'tt9285882'}
    ,
    {title: 'A Quiet Place Part II', 
    originalRelease: '8 Mar 2020',
    imdb: 'tt8332922'}
    
]
const apiKey = "e19d524f";
const baseUrl = "https://www.omdbapi.com/";
const requests = [];


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
  });
};

function addAPIDataToMovies() {

    for(i=0; i<movies.length; i++) {

        //rename variables
        let movie = movies[i];
        let movieAPI = movieAPIData[i][0];

        //check we have the right movie
        console.log(movies[i].title);
        console.log(movieAPIData[i][0].Title);

        //grab relevant API data
        movie.poster = movieAPI.Poster;
        movie.newRelease = movieAPI.Released;
        movie.runtime = movieAPI.Runtime;
        movie.director = movieAPI.Director;
        movie.cast = movieAPI.Actors;
        movie.plot = movieAPI.Plot;

        console.log(movie);
    }
};
    

//render in the DOM   
function render() {
    

    //sort movies array by original release date
    //movies.sort((a, b) => b.originalRelease - a.originalRelease)


    
};
