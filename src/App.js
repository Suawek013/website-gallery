import React, { Component } from "react";
import "./App.css";
// import { AwesomeButton } from "react-awesome-button";
// import "react-awesome-button/dist/styles.css";
// import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<nav>
						<ul>
							<li>
								{/* <AwesomeButton
									cssModule={AwesomeButtonStyles}
									type="primary"
									href="https://google.com"
									target="_blank"
								>
									Home
								</AwesomeButton> */}
							</li>
							<li>
								<a>item1</a>
							</li>
							<li>
								<a>item1</a>
							</li>
							<li>
								<a>item1</a>
							</li>
						</ul>
					</nav>
				</header>
				<main>
					<div className="image">
						<img src="./assets/free_time/groupimage.jpg" alt="project" />
					</div>
					<div className="image-description">
						<p>Description</p>
					</div>
				</main>
				{/* <footer>Sławomir Sojka 2022</footer> */}
			</div>
		);
	}
}

export default App;
