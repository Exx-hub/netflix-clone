import React, { useEffect, useState } from "react";
import { instance } from "../apirequests/requests";
import "../styles/MovieRow.css";

// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";

// const movieTrailer = require('movie-trailer')

function MovieRow({ title, requests, netflix }) {
	const [movies, setMovies] = useState();
	// const [trailerUrl, setTrailerUrl] = useState(null);
	// console.log(movies);
	useEffect(() => {
		const fetchData = async () => {
			const result = await instance(requests);

			// console.log(result);

			setMovies(result.data.results);
		};
		fetchData();
	}, [requests]);

	// const opts = {
	// 	height: "390",
	// 	width: "100%",
	// 	playerVars: {
	// 		// https://developers.google.com/youtube/player_parameters
	// 		autoplay: 1,
	// 	},
	// };
	// const handleClick = (movie) => {
	// 	console.log(movie);
	// 	if (trailerUrl) {
	// 		setTrailerUrl("");
	// 	} else {
	// 		movieTrailer("Lucifer")
	// 			.then((url) => {
	// 				console.log(url);
	// 			})
	// 			.catch((error) => console.log(error));
	// 	}
	// };

	return (
		<div className="movieRow">
			<h1>{title}</h1>
			<div className={"movieRow__posters"}>
				{movies?.map((movie) => (
					<img
						src={`${base_url}${
							netflix ? movie.poster_path : movie.backdrop_path
						}`}
						className={
							netflix ? "movieRow__posterNetflix" : "movieRow__posterBackdrop"
						}
						alt={movie.name}
						key={movie.id}
						// onClick={() => handleClick(movie)}
					/>
				))}
			</div>
			{/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
		</div>
	);
}

export default MovieRow;
