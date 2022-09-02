import React, { Component, useState } from "react";
import "./App.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import SimpleImageSlider from "react-simple-image-slider";

export default function App(){

	const descriptions = [
	"Hello, my name is Sławomir Sojka 👨‍🎓, I come from Poland 🇵🇱 , and I am a Student in Szybinski's Secondary School, with specialization in Programming 💻 . I took a part in the Erasmus Project 🇪🇺 to Gut Wehlitz in order to gain new skills, meet new people and get to know German 🇩🇪 culture in general!",
	"In the start of the first week we had workshops ✍🏻 about the soft skills as well as how to introduce ourselves durign the job interview 💼 .Later in the week we've started the HTML/CSS course, after which we were developing website application 🔧 ",
	"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum.",
	"On Sunday, after the morning lessons 📚, we went on a trip 🚃 to Leipzig, were we had a guided tour. We walked and saw the Market Square, the Old City Hall, as well as the Augusteum and the Church of St. Nicolas ⛪",
	"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum.",
	"Work usually ends at 3pm ⏰ , so we spent all the rest of the time doing activities like swimming, playing volleyball 🏐 , going downtown or visiting the club and playing board games! 🎲"
	]

	const [description, setDescription] = useState(0)
	const [images, setImages] = useState([{ url: "images/home/1.jpg" },
		{ url: "images/home/2.jpg" },
		{ url: "images/home/3.jpg" },])

	const switchPage = (pageName,index) => {
		setDescription(index);
		setImages([
			{ url: `images/${pageName}/1.jpg` },
			{ url: `images/${pageName}/2.jpg` },
			{ url: `images/${pageName}/3.jpg` },
		  ]);
	}

	return (
		<div className="App">
			<header>
				<nav>
					<ul>
						<li>
							<Button onClick={()=>switchPage("home",0)} className="button-shadow" size="lg" variant="primary">Home</Button>{' '}
						</li>
						<li>
							<DropdownButton  size="lg" id="dropdown-basic-button" title="Practice">
								<Dropdown.Item onClick={()=>switchPage("practice/1week",1)}>1 Week</Dropdown.Item>
								<Dropdown.Item onClick={()=>switchPage("practice/2week",2)}>2 Week</Dropdown.Item>
							</DropdownButton>
						</li>
						<li>
							<DropdownButton size="lg" id="dropdown-basic-button" title="Culture">
								<Dropdown.Item onClick={()=>switchPage("culture/leipzig",3)}>Leipzig</Dropdown.Item>
								<Dropdown.Item onClick={()=>switchPage("culture/berlin",4)}>Berlin</Dropdown.Item>
							</DropdownButton>
						</li>
						<li>
							<Button onClick={()=>switchPage("free_time",5)} className="button-shadow" size="lg" variant="primary">Free time</Button>{' '}
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<div className="image-container">
					{/* {description == 0 &&  */}
						{/* <img src={`/images/home/1.jpg`} alt={`friends`}></img> */}
					{/* } */}
					{/* {description != 0 &&  */}
						<SimpleImageSlider
							className="slideshow"
							autoPlay={true}
							width={700}
							height={400}
							images={images}
							showBullets={true}
							showNavs={true}
						/>
					{/* } */}
				</div>
				<div className="image-description">
					<p>{descriptions[description]}</p>
				</div>
			</main>
			{/* <footer>Sławomir Sojka 2022</footer> */}
		</div>
	);
}