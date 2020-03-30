import React, { Component } from "react";

import FirstQuestion from "../firstQuestion/firstQuestion";
import SecondQuestion from "../secondQuestions/secondQuestions";
import { toggleClass, addClass } from "../../global/_util";

class formContainer extends Component {
	constructor() {
		super();
		this.handleFirstSelection = this.handleFirstSelection.bind(this);
	}

	componentDidMount() {
		const questionOne = document.querySelector(".question-one");
		const questionTwo = document.querySelector(".question-two");
		this.questionOne = questionOne;
		this.questionTwo = questionTwo;

		questionOne.addEventListener("animationend", function() {
			toggleClass(questionOne, "d-none");
		});
	}

	handleFirstSelection(event) {
		if (event.target.value === "no") {
			addClass(this.questionOne, "fadeOutLeftBig");
			toggleClass(this.questionTwo, "d-none");
		}
	}

	render() {
		return (
			<div className="center-page">
				<div className="text-center w-100 question-one animated faster">
					<FirstQuestion onChoiceSelection={this.handleFirstSelection} />
				</div>
				<div className="animated fadeInRightBig text-center w-100 d-none question-two">
					<SecondQuestion />
				</div>
			</div>
		);
	}
}

export default formContainer;
