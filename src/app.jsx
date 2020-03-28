import React, { Component } from "react";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

import NOW from "./components/computeNumbers/computeNumbers";

class App extends Component {
	render() {
		return (
			<div>
				Hello World
				<NOW />
			</div>
		);
	}
}

export default App;
