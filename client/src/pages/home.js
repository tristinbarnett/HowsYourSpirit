// Global
import React from "react";
import "../components/App/app.css";
import { Button } from "react-bootstrap";

// Local
import EmotionMap from "../utils/EmotionMap";

// Page Content
function Home({ entries }) {
	// wellbeing for most recent entries
	const calculateWellbeing = () => {
		if (entries) {
			// narrow down to most recent
			/* need to figure out how to get current week data rather than most recent entries */
			const recent = entries.length > 5 ? entries.slice(Math.max(entries.length - 5, 0)) : entries;
			// get numerical averages
			const averageEmotions = EmotionMap.average(recent);
			// translate numbers to descriptors
			const description = EmotionMap.descriptors(averageEmotions);
			// set wellbeing state
			return {
				mood: description.mood,
				energy: description.energy,
			};
		} else {
			return null;
		}
	};
	const wellbeing = calculateWellbeing();

	return (
		<body style={{ backgroundColor: "#BFE2FF" }}>
			<div class="flexbox-container" style={{ backgroundColor: "white" }}>
				<div class="container" style={{ clear: "both" }}>
					<h2 style={{ color: "#FFC300", textAlign: "center" }}>
						<em>Hi! How's Your Spirit today?</em>
					</h2>
					<br />
					<span>
						{/* need to figure out how to get current week data */}
						{/* <h3 style={{ color: "#007bff" }}>This Week:</h3> */}
						<h3 style={{ color: "#007bff" }}>Recently:</h3>
					</span>
				</div>
				<br />
				{wellbeing ? (
					<div class="container">
						<h3 style={{ color: "#FFC300", textAlign: "center" }}>Mood is {wellbeing.mood}</h3>
						<br />
						<h3 style={{ color: "#BFE2FF", textAlign: "center" }}>Energy is {wellbeing.energy}</h3>
						<br />
					</div>
				) : (
					<div></div>
				)}
				<br />
				<div class="container">
					<Button color="primary" size="lg" block href="/add">
						New entry
					</Button>
					<Button outline color="primary" size="lg" block href="/review">
						Review past entries
					</Button>
					<Button color="primary" size="lg" block href="/learn">
						Learn More
					</Button>
				</div>

				<br /><br /><br /><br /><br />
			</div>
		</body>
	);
}

export default Home;
