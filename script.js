
const movies = [
    {
        title: "Your Name",
        year: 2016,
        genre: "Romance",
        poster: "https://cdn.posteritati.com/posters/000/000/049/033/your-name-md-web.jpg",
        trailer: "https://www.youtube.com/results?search_query=Your+Name+official+trailer",
        video: "video/your-name.mp4"
    },
    
        {
    title: "Ponyo",
    year: 2008,
    genre: "Fantasy",
    poster: "images/ponyo.jpg",
    trailer: "https://www.youtube.com/results?search_query=Ponyo+official+trailer",
    video: "video/ponyo.mp4"

    },
    {
        title: "Weathering with You",
        year: 2019,
        genre: "Romance",
        poster: "https://www.animeclick.it/immagini/news/Tenki_no_Ko_di_Makoto_Shinkai_nuovo_poster_e_info_sullimminente_film_del_regista/gallery_original/Tenki_no_Ko_di_Makoto_Shinkai_nuovo_poster_e_info_sullimminente_film_del_regista-5ceff119eb6de.jpg",
        trailer: "https://www.youtube.com/results?search_query=Weathering+with+You+official+trailer",
         video: "video/weathering-with-you.mp4"
    },
    {
        title: "I Want to Eat Your Pancreas",
        year: 2018,
        genre: "Drama",
        poster: "images/i-want-to-eat-pancreas.jpg",
        trailer: "https://www.youtube.com/results?search_query=I+Want+to+Eat+Your+Pancreas+official+trailer",
        video: "video/pancreas.mp4"
    },
    {
        title: "My Neighbor Totoro",
        year: 1988,
        genre: "Fantasy",
        poster: "images/my neighbor toto.jpg",
        trailer: "https://www.youtube.com/results?search_query=My+Neighbor+Totoro+official+trailer",
        video: "video/My Neighbor Totoro.mp4"
    },
    {
        title: "Spirited Away",
        year: 2001,
        genre: "Fantasy",
        poster: "images/sprited.jpg",
        trailer: "https://www.youtube.com/results?search_query=Spirited+Away+official+trailer",
        video: "video/sprited.mp4"
    },
    {
        title: "Forest of Fireflies",
        year: 2011,
        genre: "Romance",
        poster: "images/forest.jpg",
        trailer: "https://www.youtube.com/results?search_query=Hotarubi+no+Mori+e+official+trailer",
        video: "video/forest.mp4"
    },
    {
        title: "Whisper of the Heart",
        year: 1995,
        genre: "Romance",
        poster: "images/whisper.jpg",
        trailer: "https://www.youtube.com/results?search_query=Whisper+of+the+Heart+official+trailer",
        video: "video/heart.mp4"
    },
    {
        title: "Wolf Children",
        year: 2012,
        genre: "Drama",
        poster: "images/wolf.jpg",
        trailer: "https://www.youtube.com/results?search_query=Wolf+Children+official+trailer",
        video: "video/wolf.mp4"
    },
    {
        title: "Arrietty",
        year: 2010,
        genre: "Fantasy",
        poster: "images/arri.jpg",
        trailer: "https://www.youtube.com/results?search_query=Arrietty+official+trailer",
        video: "video/world.mp4"
    },
 
    {
        title: "Grave of the Fireflies",
        year: 1988,
        genre: "Drama",
        poster: "images/graves.jpg",
        trailer: "https://www.youtube.com/results?search_query=Grave+of+the+Fireflies+official+trailer",
        video: "video/graves.mp4"
    },
    {
        title: "A Whisker Away",
        year: 2020,
        genre: "Fantasy",
        poster: "images/away.jpg",
        trailer: "https://www.youtube.com/results?search_query=A+Whisker+Away+official+trailer",
        video: "video/whisker.mp4"
    },
    {
        title: "A Silent Voice",
        year: 2016,
        genre: "Drama",
        poster: "images/silent.jpg",
        trailer: "https://www.youtube.com/results?search_query=A+Silent+Voice+official+trailer",
        video: "video/silent.mp4"
    },
    {
        title: "Ride Your Wave",
        year: 2019,
        genre: "Romance",
        poster: "images/wave.jpg",
        trailer: "https://www.youtube.com/results?search_query=Ride+Your+Wave+official+trailer",
         video: "video/ride.mp4"
    },
    {
        title: "In This Corner of the World",
        year: 2016,
        genre: "Drama",
        poster: "images/in.jpg",
        trailer: "https://www.youtube.com/results?search_query=In+This+Corner+of+the+World+official+trailer",
         video: "video/in this corner.mp4"
    },
    
    {
        title: "Bubble",
        year: 2022,
        genre: "Fantasy",
        poster: "images/bubble.jpg",
        trailer: "https://www.youtube.com/results?search_query=Bubble+anime+official+trailer",
         video: "video/bubble.mp4"
    },
    {
        title: "Summer Ghost",
        year: 2021,
        genre: "Drama",
        poster: "images/ghost.jpg",
        trailer: "https://www.youtube.com/results?search_query=Summer+Ghost+official+trailer",
        video: "video/summer.mp4"
    },
    {
        title: "The Cat Returns",
        year: 2002,
        genre: "Fantasy",
        poster: "images/cat.jpg",
        trailer: "https://www.youtube.com/results?search_query=The+Cat+Returns+official+trailer",
        video: "video/cat.mp4"
    },
  

    {
        title: "Naruto Shippuden the Movie: Bonds",
        year: 2008,
        genre: "Action",
        poster: "images/naruto.jpg",
        trailer: "https://www.youtube.com/results?search_query=Naruto+Shippuden+the+Movie+Bonds+official+trailer",
        video: "video/naruto.mp4"
    }
];




const movieList = document.getElementById("movie-list");
const searchInput = document.getElementById("search-input");
const genreFilter = document.getElementById("genre-filter");
const noResults = document.getElementById("no-results");

const videoPlayer = document.getElementById("video-player");
const movieVideo = document.getElementById("movie-video");
const closeVideo = document.getElementById("close-video");
const videoMessage = document.getElementById("video-message");

function displayMovies() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedGenre = genreFilter.value;

    const filteredMovies = movies.filter(function(movie) {
        const matchesSearch =
            movie.title.toLowerCase().includes(searchText) ||
            movie.genre.toLowerCase().includes(searchText) ||
            String(movie.year).includes(searchText);

        const matchesGenre =
            selectedGenre === "All" ||
            movie.genre === selectedGenre;

        return matchesSearch && matchesGenre;
    });

    movieList.innerHTML = "";

    filteredMovies.forEach(function(movie) {
        const card = document.createElement("article");
        card.className = "movie-card";

        card.innerHTML = `
            <img
                src="${movie.poster}"
                alt="${movie.title} poster"
                loading="lazy"
            >

            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.year} • ${movie.genre}</p>

                <a
                    href="${movie.trailer}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="trailer-button"
                >
                    ▶ Watch Trailer
                </a>

                ${
                    movie.video
                    ? `<button
                        type="button"
                        class="fullmovie-button"
                        data-video="${movie.video}"
                        data-title="${movie.title}"
                    >
                        🎬 Watch Video
                    </button>`
                    : ""
                }
            </div>
        `;

        movieList.appendChild(card);
    });

    noResults.hidden = filteredMovies.length !== 0;
}

searchInput.addEventListener("input", displayMovies);
genreFilter.addEventListener("change", displayMovies);

displayMovies();

// ===== Video Player =====

document.addEventListener("click", function(event) {
    const button = event.target.closest(".fullmovie-button");

    if (!button) return;

    const videoPath = button.dataset.video;

    if (!videoPlayer || !movieVideo) {
        alert("Video Player HTML ကို ပြန်စစ်ပါ။");
        return;
    }

    if (!videoPath) {
        alert("ဒီ Anime အတွက် Video လမ်းကြောင်း မရှိသေးပါ။");
        return;
    }

    movieVideo.pause();
    movieVideo.src = videoPath;
    movieVideo.load();

    videoPlayer.hidden = false;

    if (videoMessage) {
        videoMessage.hidden = true;
        videoMessage.textContent = "";
    }

    videoPlayer.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    movieVideo.play().catch(function(error) {
        console.error("Video playback error:", error);

        if (videoMessage) {
            videoMessage.textContent =
                "Video မဖွင့်နိုင်ပါ။ ဖိုင်နာမည်၊ လမ်းကြောင်းနဲ့ Video ဖိုင်ကို စစ်ဆေးပါ။";
            videoMessage.hidden = false;
        }
    });
});

if (movieVideo) {
    movieVideo.addEventListener("error", function() {
        if (videoMessage) {
            videoMessage.textContent =
                "Video ဖိုင်ကို ဖတ်မရပါ။ video folder ထဲက ဖိုင်နာမည်နဲ့ လမ်းကြောင်းကို စစ်ပါ။";
            videoMessage.hidden = false;
        }
    });
}

function stopVideo() {
    if (!movieVideo || !videoPlayer) return;

    movieVideo.pause();
    movieVideo.removeAttribute("src");
    movieVideo.load();

    videoPlayer.hidden = true;

    if (videoMessage) {
        videoMessage.hidden = true;
        videoMessage.textContent = "";
    }
}

if (closeVideo) {
    closeVideo.addEventListener("click", stopVideo);
}
