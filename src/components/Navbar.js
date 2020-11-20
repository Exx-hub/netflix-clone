import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
function Navbar() {
	const [handleShow, setHandleShow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setHandleShow(true);
			} else {
				setHandleShow(false);
			}
			return () => {
				window.removeEventListener("scroll");
			};
		});
	}, []);
	return (
		<div className={handleShow ? "navbar navbar__show" : "navbar"}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
				alt=""
				className="navbar__netflixLogo"
			/>
			<img
				src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
				alt=""
				className="navbar__netflixAvatar"
			/>
		</div>
	);
}

export default Navbar;
