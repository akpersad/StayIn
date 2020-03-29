import React, { Component } from "react";

import FirstQuestion from "../firstQuestion/firstQuestion";
import SecondQuestion from "../secondQuestions/secondQuestions";
import { toggleClass, addClass } from "../../global/_util";

class formContainer extends Component {
	handleFirstSelection(event) {
		if (event.target.value === "yes") {
			addClass(document.querySelector(".question-one"), "fadeOutLeftBig");
			toggleClass(document.querySelector(".question-two"), "d-none");
		}
	}

	render() {
		return (
			<>
				<div className="text-center question-one animated">
					<FirstQuestion onChoiceSelection={this.handleFirstSelection} />
				</div>
				<div className="animated fadeInRightBig text-center d-none question-two">
					<SecondQuestion />
				</div>
			</>
		);
	}
}

export default formContainer;
