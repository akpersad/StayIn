import axios from "axios";
import { stateList } from "./listOfStates";

const computeStateNumbers = data => {
	const tese = stateList.map(item => {
		const tempHash = {
			stateName: item,
			confirmed: 0,
			deaths: 0
		};

		for (let i = 0; i < data.covid19Stats.length; i++) {
			if (data.covid19Stats[i].province === item) {
				tempHash.confirmed += data.covid19Stats[i].confirmed;
				tempHash.deaths += data.covid19Stats[i].deaths;
			}
		}
		return tempHash;
	});

	console.log(tese);
};

const formattedList = () => {
	const headers = {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": process.env.RAPID_API
	};

	const url = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=USA";

	axios.get(url, { headers }).then(response => {
		return computeStateNumbers(response.data.data);
	});
};

export default formattedList();
