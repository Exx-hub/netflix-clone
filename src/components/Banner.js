import React, { useEffect, useState } from "react";
import { instance, requests } from "../apirequests/requests";
import "../styles/Banner.css";
import Button from "@material-ui/core/Button";

const base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
	const [background, setBackground] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const result = await instance(requests.fetchNetflixOriginals);
			const random = Math.floor(Math.random() * result.data.results.length);
			console.log(random);
			setBackground(result.data.results[random]);
		};
		fetchData();
	}, []);

	// for lengthy description texts. reduces the string to a limit 'n'.
	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};
	return (
		<div
			className="banner"
			style={{
				backgroundImage: `url(${base_url}${background?.backdrop_path})`,
				backgroundSize: "cover",
				backgroundPosition: "center center",
			}}
		>
			<div className="banner__info">
				<h1>
					{background?.name || background?.title || background?.original_name}
				</h1>
				<div>
					<Button variant="outlined">Play</Button>
					<Button variant="outlined">My List</Button>
				</div>
				<p>{truncate(background?.overview, 170)}</p>
			</div>
			<div className="banner__fadeBottom" />
		</div>
	);
}

export default Banner;
