import React, { Component } from "react";

import FirstQuestion from "../firstQuestion/firstQuestion";
import { toggleClass, addClass } from "../../global/_util";

class formContainer extends Component {
	clickHandler() {
		addClass(document.querySelector(".test1"), "fadeOutLeftBig");
		toggleClass(document.querySelector(".test2"), "d-none");
	}

	handleLanguage(event) {
		console.log("HELLO ANDREW", event.target.value);
	}

	render() {
		return (
			<>
				<button type="button" onClick={this.clickHandler}>
					Click Me
				</button>
				<div className="text-center test1 animated">
					<FirstQuestion onSelectLanguage={this.handleLanguage} />
				</div>
				<div className="animated fadeInRightBig text-center d-none test2">
					<p>Watch me fade in!</p>
				</div>
			</>
		);
	}
}

export default formContainer;
