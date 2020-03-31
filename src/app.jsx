import React, { Component } from "react";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

import FormContainer from "./components/formContainer/formContainer";

class App extends Component {
	render() {
		return (
			<div>
				<FormContainer />
			</div>
		);
	}
}

export default App;
