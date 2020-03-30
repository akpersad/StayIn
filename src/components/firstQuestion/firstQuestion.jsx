import React, { Component } from "react";
import PropTypes from "prop-types";

import { questions } from "../computeNumbers/_listOfQuestions";

class FirstQuestion extends Component {
	constructor() {
		super();
		this.state = {
			question: "",
			answers: []
		};
	}

	componentDidMount() {
		this.renderQuestions();
	}

	handleButtonChange(event) {
		const { onChoiceSelection } = this.props;
		onChoiceSelection(event);
	}

	renderQuestions() {
		const {
			sectionOne: { question, answers }
		} = questions;
		const renderArr = answers.map(item => {
			const key = Object.keys(item)[0];
			const value = item[key];
			return (
				<label htmlFor={key} key={key} className="radio-btn_group">
					<input id={key} type="radio" value={key} name="sectionOne" />
					<span>{value}</span>
				</label>
			);
		});
		return this.setState({ question, answers: renderArr });
	}

	render() {
		const { question, answers } = this.state;
		return (
			<div className="row">
				<div className="col-12">
					<span>{question}</span>
				</div>
				<div className="col-12" onChange={this.handleButtonChange.bind(this)}>
					{answers}
				</div>
			</div>
		);
	}
}

FirstQuestion.propTypes = {
	onChoiceSelection: PropTypes.func.isRequired
};

export default FirstQuestion;
