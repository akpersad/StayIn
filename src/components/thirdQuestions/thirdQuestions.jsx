import React, { Component } from "react";
import PropTypes from "prop-types";

import { questions } from "../computeNumbers/_listOfQuestions";

class ThirdQuestions extends Component {
	constructor() {
		super();
		this.state = {
			question: "",
			answers: []
		};
	}

	componentDidMount() {
		const { onCheckboxSelection2 } = this.props;
		this.renderQuestions();
	}

	renderQuestions() {
		const {
			sectionThree: { question, answers }
		} = questions;
		const renderArr = answers.map(item => {
			const key = Object.keys(item)[0];
			const value = item[key];
			return (
				<label key={key} htmlFor={key} className="checkbox-inputs">
					<input type="checkbox" id={key} name={key} value={key} />
					<span>{value}</span>
				</label>
			);
		});
		return this.setState({ question, answers: renderArr });
	}

	render() {
		const { question, answers } = this.state;
		return (
			<>
				<div>
					<span>{question}</span>
				</div>
				<div>{answers}</div>
				<div className="submit-button_group">
					<button onClick={this.handleButtonClick} type="button">
						Next
					</button>
				</div>
			</>
		);
	}
}

ThirdQuestions.propTypes = {
	onCheckboxSelection2: PropTypes.func.isRequired
};

export default ThirdQuestions;
