import React, { Component } from "react";
import axios from "axios";
import stateList from "./listOfStates";

class ComputeNumbers extends Component {
	componentDidMount() {
		const headers = {
			"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
			"x-rapidapi-key": process.env.RAPID_API
		};

		const url = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=USA";

		axios.get(url, { headers }).then(response => {
			this.computeStateNumbers(response.data.data);
		});
	}

	computeStateNumbers(data) {
		const tese = stateList.map(item => {
			const tempHash = {
				stateName: item,
				confirmed: 0,
				deaths: 0
			};

			for (let i = 0; i < data.length; i++) {
				if (data[i].province === item) {
					tempHash.confirmed += data[i].confirmed;
					tempHash.deaths += data[i].deaths;
				}
			}
			return tempHash;
		});

		console.log(tese);
	}

	render() {
		const tempVar = "helloWorld";
		return <div>{tempVar}</div>;
	}
}

export default ComputeNumbers;
