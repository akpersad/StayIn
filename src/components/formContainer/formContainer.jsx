import React, { Component } from "react";

import FirstQuestion from "../firstQuestion/firstQuestion";
import SecondQuestion from "../secondQuestions/secondQuestions";
import ThirdQuestion from "../thirdQuestions/thirdQuestions";
import ThanksModal from "../thanksModel/thanksModel";
import { toggleClass, addClass, removeClass } from "../../global/_util";

class formContainer extends Component {
	constructor() {
		super();
		this.handleFirstSelection = this.handleFirstSelection.bind(this);
		this.handleSecondSelection = this.handleSecondSelection.bind(this);
		this.handleThirdSelection = this.handleThirdSelection.bind(this);

		this.state = {
			showThanksModal: false
		};
	}

	componentDidMount() {
		const questionOne = document.querySelector(".question-one");
		const questionTwo = document.querySelector(".question-two");
		const questionThree = document.querySelector(".question-three");
		this.questionOne = questionOne;
		this.questionTwo = questionTwo;
		this.questionThree = questionThree;

		questionOne.addEventListener("animationend", function() {
			toggleClass(questionOne, "d-none");
		});
	}

	handleFirstSelection(event) {
		if (event.target.value === "no") {
			addClass(this.questionOne, "fadeOutLeftBig");
			toggleClass(this.questionTwo, "d-none");
		} else {
			addClass(this.questionOne, "fadeOutLeftBig");
			this.setState({ showThanksModal: true });
		}
	}

	handleSecondSelection(selection) {
		this.questionTwo.addEventListener(
			"animationend",
			function() {
				toggleClass(this.questionTwo, "d-none");
			}.bind(this)
		);

		if (selection.includes("none")) {
			removeClass(this.questionTwo, "fadeInRightBig");
			addClass(this.questionTwo, "faster");
			addClass(this.questionTwo, "fadeOutLeftBig");
			toggleClass(this.questionThree, "d-none");
		}
	}

	handleThirdSelection() {
		console.log("Hello");
	}

	render() {
		const { showThanksModal } = this.state;
		return (
			<div className="center-page">
				<div className="text-center w-100 question-one animated faster">
					<FirstQuestion onChoiceSelection={this.handleFirstSelection} />
				</div>
				<div className="animated fadeInRightBig text-center w-100 d-none question-two">
					<SecondQuestion onCheckboxSelection={this.handleSecondSelection} />
				</div>
				<div className="animated fadeInRightBig text-center w-100 d-none question-three">
					<ThirdQuestion onCheckboxSelection2={this.handleThirdSelection} />
				</div>

				<div className="animiated fadeInUpBig">
					<ThanksModal showModal={showThanksModal} />
				</div>
			</div>
		);
	}
}

export default formContainer;
