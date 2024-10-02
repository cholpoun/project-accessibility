const MOVIES = [
    {
        title: 'Mad Max: Fury Road',
        director: 'George Miller',
        year: 2015,
        genre: 'Action',
        rating: 8.1,
        description: 'In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrannical leader and his army.',
        img: 'https://neiloseman.com/wp-content/uploads/2015/05/cars.jpg'
    },
    {
        title: 'John Wick',
        director: 'Chad Stahelski',
        year: 2014,
        genre: 'Action',
        rating: 7.4,
        description: 'An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him.',
        img: 'https://images.squarespace-cdn.com/content/v1/58c9b86bd1758e1f19dec72a/1501069711610-DG98OOT2PVRWH7K317BJ/SKC+Blog+Hero+John+Wick+2+BW.jpg'
    },
    {
        title: '2001: A Space Odyssey',
        director: 'Stanley Kubrick',
        year: 1968,
        genre: 'Sci-Fi',
        rating: 8.7,
        description: 'A mysterious black monolith is discovered on the moon, leading to a journey of exploration and philosophical contemplation.',
        img: 'https://ychef.files.bbci.co.uk/1280x720/p0639ffn.jpg'
    },
    {
        title: 'Die Hard',
        director: 'John McTiernan',
        year: 1988,
        genre: 'Action',
        rating: 8.2,
        description: 'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party.',
        img: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/06/die-hard-movies-ranked.jpg'
    },

    {
        title: 'The Hangover',
        director: 'Todd Phillips',
        year: 2009,
        genre: 'Comedy',
        rating: 7.7,
        description: 'Three friends wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing.',
        img: 'https://cdn.europosters.eu/image/750/posters/the-hangover-strips-i8824.jpg'
    },
    {
        title: 'Superbad',
        director: 'Greg Mottola',
        year: 2007,
        genre: 'Comedy',
        rating: 7.6,
        description: 'Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to throw a party goes awry.',
        img: 'https://media.vanityfair.com/photos/62fa88ecd703349a746d4ea2/4:3/w_1776,h_1332,c_limit/vf-822-superbad-making-of-005.jpg'
    },
    {
        title: 'Anchorman: The Legend of Ron Burgundy',
        director: 'Adam McKay',
        year: 2004,
        genre: 'Comedy',
        rating: 7.2,
        description: 'Ron Burgundy is the top-rated newsman in San Diego in the 1970s, but that\'s all about to change for him and his cronies.',
        img: 'https://www.hollywoodreporter.com/wp-content/uploads/2013/12/anchorman_2.jpg?w=1280'
    },
    {
        title: 'Jurassic Park',
        director: 'Steven Spielberg',
        year: 1993,
        genre: 'Sci-Fi',
        rating: 8.3,
        description: 'A theme park featuring cloned dinosaurs is opened, but things go wrong when the dinosaurs escape.',
        img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/jurassic-park-sequels-dinosaurs-humans-more-important.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5'

    },
    {
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        year: 1994,
        genre: 'Drama',
        rating: 9.3,
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        img: 'https://i.guim.co.uk/img/media/6495f40152ef3ec8408d1ebfe33fdbf28e7f002b/0_0_3062_1838/master/3062..jpg?width=1200&quality=85&auto=format&fit=max&s=58392c0605f25196166513ff721510c8'
    },
    {
        title: 'Forrest Gump',
        director: 'Robert Zemeckis',
        year: 1994,
        genre: 'Drama',
        rating: 8.8,
        description: 'The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.',
        img: 'https://m.media-amazon.com/images/M/MV5BMTcwNzc4NjE1OV5BMl5BanBnXkFtZTcwMTE5NjkyMQ@@._V1_QL75_UX1640_.jpg'
    },
    {
        title: 'The Godfather',
        director: 'Francis Ford Coppola',
        year: 1972,
        genre: 'Drama',
        rating: 9.2,
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        img: 'https://wallpapers.com/images/high/the-godfather-red-zigzag-komiqqdvm2mg8eju.webp'
    },
    {
        title: 'Blue Valentine',
        director: 'Derek Cianfrance',
        year: 2010,
        genre: 'Drama',
        rating: 8.1,
        description: `A couple's relationship deteriorates over the course of several years as they navigate the challenges of love, marriage, and parenthood.`,
        img: 'https://www.intofilm.org/intofilm-production/scaledcropped/970x546https%3A/s3-eu-west-1.amazonaws.com/images.cdn.filmclub.org/film__16416-blue-valentine--hi_res-c050c251.jpg/film__16416-blue-valentine--hi_res-c050c251.jpg'
    },
    {
        title: 'Interstellar',
        director: 'Christopher Nolan',
        year: 2014,
        genre: 'Sci-Fi',
        rating: 8.6,
        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.',
        img: 'https://www.ljudochbild.se/wp-content/uploads/Interstellar_1.jpg'
    },
    {
        title: 'Gladiator',
        director: 'Ridley Scott',
        year: 2000, genre: 'Drama',
        rating: 8.7,
        description: 'A Roman general is betrayed and sold into slavery, forced to fight as a gladiator in the Colosseum. He seeks revenge against the emperor who ruined his life.',
        img: 'https://m.media-amazon.com/images/M/MV5BMjExOTEyNDgxOV5BMl5BanBnXkFtZTcwMDU0NjcxNA@@._V1_.jpg'
    },
    {
        title: 'Dogville',
        director: 'Lars von Trier',
        year: 2003,
        genre: 'Drama',
        rating: 8.0,
        description: 'A woman on the run from the mob seeks refuge in a small town, but the townspeople gradually become increasingly hostile and controlling.',
        img: 'https://www.destudio.com/sites/default/files/styles/project_media/public/2023-06/photo-3-dogville.jpg?h=dfb83448&itok=n68Nrmp-'
    },
    {
        title: 'The Matrix',
        director: 'Lana Wachowski, Lilly Wachowski',
        year: 1999,
        genre: 'Sci-Fi',
        rating: 8.7,
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        img: 'https://www.syfy.com/sites/syfy/files/styles/scale_1280/public/2021/03/the-matrix.jpeg'
    },
    {
        title: 'Blade Runner 2049',
        director: 'Denis Villeneuve',
        year: 2017,
        genre: 'Sci-Fi',
        rating: 8.0,
        description: 'A young blade runner\'s discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who\'s been missing for thirty years.',
        img: 'https://vfxblog.com/wp-content/uploads/2019/11/bfb30-096_0010_wvg_v182_1069ab.jpg?w=1200&h=773'
    },
    {
        title: 'Raiders of the Lost Ark',
        director: 'Steven Spielberg',
        year: 1981,
        genre: 'Action',
        rating: 8.7,
        description: 'Archaeologist Indiana Jones embarks on a perilous quest to find the Ark of the Covenant before it falls into the wrong hands.',
        img: 'https://www.kennedy-center.org/globalassets/whats-on/millennium-stage/2023/05.-may/film_raidersofthelostark_web.jpg?format=webp&width=1600&quality=70'

    },
];

// Function that shows all movies 

const container = document.getElementById('container');

const getMovies = (moviesArray) => {
    container.innerHTML = '';
    moviesArray.forEach(movie => {
        container.innerHTML += `
        <div class="card">
          <h3>${movie.title}</h3>
          <img src="${movie.img}" alt="${movie.name}" />
          <p>Director: ${movie.director}, Year: ${movie.year}</p>
          <p>Genre: ${movie.genre}, Rating: ${movie.rating}</p>
          <p>${movie.description}</p>
        </div>`;
    });
}

getMovies(MOVIES);

// Filter movies by genre 

document.getElementById('all-btn').addEventListener('click', () => {
    showMoviesByGenre('all');
});

document.getElementById('comedy-btn').addEventListener('click', () => {
    showMoviesByGenre('Comedy');
});

document.getElementById('drama-btn').addEventListener('click', () => {
    showMoviesByGenre('Drama');
});

document.getElementById('sci-fi-btn').addEventListener('click', () => {
    showMoviesByGenre('Sci-Fi');
});

document.getElementById('action-btn').addEventListener('click', () => {
    showMoviesByGenre('Action');
});

const showMoviesByGenre = (genre) => {
    let filteredMovies = MOVIES;

    if (genre !== 'all') {
        filteredMovies = MOVIES.filter(movie => movie.genre === genre);
    }

    getMovies(filteredMovies);
};


// Function to display a random movie and hide others
const showRandomMovie = () => {
    // Get a random index
    const randomIndex = Math.floor(Math.random() * MOVIES.length);
    const randomMovie = MOVIES[randomIndex];

    // Clear the container first (hide all other movies)
    container.innerHTML = '';

    // Display only the random movie
    randomMovieContainer.innerHTML = `
      <div class="card">
        <h3>${randomMovie.title}</h3>
        <img src="${randomMovie.img}" alt="${randomMovie.title}" />
        <p>Director: ${randomMovie.director}, Year: ${randomMovie.year}</p>
        <p>Genre: ${randomMovie.genre}, Rating: ${randomMovie.rating}</p>
        <p>${randomMovie.description}</p>
      </div>
    `;
}

// Event listener for the "Show Random Movie" button
document.getElementById('random-btn').addEventListener("click", showRandomMovie);


// Function to handle sorting
const sortMovies = (sortBy) => {
    let sortedMovies = [...MOVIES]; // Create a copy of the array to sort

    switch (sortBy) {
        case 'title':
            sortedMovies.sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically by title
            break;
        case 'director':
            sortedMovies.sort((a, b) => a.director.localeCompare(b.director)); // Sort alphabetically by director
            break;
        case 'year':
            sortedMovies.sort((a, b) => b.year - a.year); // Sort by year, latest to oldest
            break;
        case 'rating':
            sortedMovies.sort((a, b) => b.rating - a.rating); // Sort by rating, highest to lowest
            break;
        case 'all':
        default:
            sortedMovies = MOVIES; // No sorting, return to original order
            break;
    }

    // Display the sorted movies
    getMovies(sortedMovies);
};

// Event listener to the dropdown for sorting

document.getElementById('filterDropdown').addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    sortMovies(selectedOption);
});