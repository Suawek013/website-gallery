import React, { Component } from "react";
import "./App.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


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
								<Button class="button-shadow" size="lg" variant="primary">Home</Button>{' '}

								 
							</li>
							<li>
								<DropdownButton size="lg" id="dropdown-basic-button" title="Practice">
									<Dropdown.Item href="#/action-1">1 Week</Dropdown.Item>
									<Dropdown.Item href="#/action-2">2 Week</Dropdown.Item>
								</DropdownButton>
							</li>
							<li>
								<DropdownButton size="lg" id="dropdown-basic-button" title="Culture">
									<Dropdown.Item href="#/action-1">Leipzig</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Berlin</Dropdown.Item>
								</DropdownButton>
							</li>
							<li>
								<Button size="lg" variant="primary">Free time</Button>{' '}
							</li>
						</ul>
					</nav>
				</header>
				<main>
					<div className="image-container">
						<img src="/images/free_time/groupimage.jpg" alt="project" />
						{/* <img src="/images/unsamples/XqNsBvVZPps.jpg" alt="project"/> */}
					</div>
					<div className="image-description">
						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum.</p>
					</div>
				</main>
				{/* <footer>Sławomir Sojka 2022</footer> */}
			</div>
		);
	}
}

export default App;
