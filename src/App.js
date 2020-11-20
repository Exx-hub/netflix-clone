import React from "react";
import "./styles/app.css";
import { requests } from "./apirequests/requests";
import Banner from "./components/Banner";
import MovieRow from "./components/MovieRow";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Banner />
			<MovieRow
				title="NETFLIX ORIGINALS"
				requests={requests.fetchNetflixOriginals}
				netflix
			/>
			<MovieRow title="Trending Now" requests={requests.fetchTrending} />
			<MovieRow title="Top Rated" requests={requests.fetchTopRated} />
			<MovieRow title="Action Movies" requests={requests.fetchActionMovies} />
			<MovieRow title="Comedy Movies" requests={requests.fetchComedyMovies} />
			<MovieRow title="Horror Movies" requests={requests.fetchHorrorMovies} />
			<MovieRow title="Romance Movies" requests={requests.fetchRomanceMovies} />
			<MovieRow title="Documentaries" requests={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
