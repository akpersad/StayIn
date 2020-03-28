import React, { Component } from "react";
import axios from "axios";

class ComputeNumbers extends Component {
	componentDidMount() {
		const headers = {
			"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
			"x-rapidapi-key": process.env.RAPID_API
		};

		const url = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=USA";

		axios.get(url, { headers }).then(response => {
			this.computeStateNumbers(response.data);
		});
	}

	computeStateNumbers(data) {
		debugger;
	}

	render() {
		const tempVar = "helloWorld";
		return <div>{tempVar}</div>;
	}
}

export default ComputeNumbers;
