/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    let newAr = array.concat();

    newAr.sort(function (a, b) {
        if (a.year > b.year) {
            return 1;
        }
        else if (a.year < b.year) {
            return -1;
        }
        else if (a.year == b.year) {
            if (a.title > b.title) {
                return 1;
            }
            else {
                return -1
            }
        }
    });

    return newAr;

}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
    let count = 0;
    array.filter(function (movies) {

        if (movies.director === "Steven Spielberg" &&
            movies.genre.includes("Drama") == true) {
            count++;
        }

    })
    return count;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {

    let newAr = array.map(function (movies) {
        return movies.title;
    });

    newAr.sort();

    return newAr.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {

    let avgRate = array.map(function (rate) {
        return rate.rate;
    })
    let length = avgRate.length;

    avgRate = avgRate.filter(function (element) {
        if (element !== false) {
            return element;
        }
    })

    let rates = avgRate.reduce(function (sum, num) {
        return sum + num;
    }, 0);

    let round = rates / length;
    round = +round.toFixed(2);

    if (array.length == 0) {
        return 0;
    }

    return round;
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    let dramaMovies = array.filter(function (movie) {
        if (movie.genre.indexOf('Drama') !== -1) {
            return true;
        }
        return false
    });

    if (dramaMovies.length == 0) {
        return 0;
    }

    return (ratesAverage(dramaMovies));

}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(inputArray) {

    return inputArray.map(function (movie) {


        let movieTime = { ...inputArray };
        let hours = 0;
        let minutes = 0;
        if (movie.duration.indexOf('h') !== -1) {
            hours = movie.duration.charAt(0)[0];
        }
        if (movie.duration.indexOf('min') !== -1) {
            if (movie.duration.indexOf(' ') !== -1) {
                minutes = movie.duration.split(' ')[1].split('min')[0];
            }
            else {
                minutes = movie.duration.split('min')[0];
            }
        }

        movieTime.duration = parseInt(hours * 60) + parseInt(minutes);
        return movieTime;
    })

}


//done


// BONUS Iteration: Best yearly rate average - Best yearly rate average
