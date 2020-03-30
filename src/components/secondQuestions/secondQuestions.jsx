import React, { Component } from "react";
import PropTypes from "prop-types";

import { questions } from "../computeNumbers/_listOfQuestions";

class SecondQuestions extends Component {
	constructor() {
		super();
		this.state = {
			selections: [],
			question: "",
			answers: [],
			list: []
		};

		this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	componentDidMount() {
		this.renderQuestions();
	}

	handleCheckboxClick(event) {
		this.handleDisable(event);
	}

	handleDisable(event) {
		const { selections, list } = this.state;
		const val = event.currentTarget.value;

		if (event.currentTarget.checked) {
			selections.push(val);
			this.setState({ selections });
		} else {
			const index = selections.indexOf(val);
			selections.splice(index, 1);
			this.setState({ selections });
		}

		if (selections.length === 0) {
			for (let i = 0; i < list.length; i++) {
				document.querySelector(`#${list[i]}`).disabled = false;
			}
		} else if (!selections.includes("none")) {
			document.querySelector("#none").disabled = "disabled";
		} else if (selections.includes("none")) {
			for (let i = 0; i < list.length - 1; i++) {
				document.querySelector(`#${list[i]}`).disabled = "disabled";
			}
		}
	}

	handleButtonClick() {
		const { onCheckboxSelection } = this.props;
		const { selections } = this.state;
		onCheckboxSelection(selections);
	}

	renderQuestions() {
		const {
			sectionTwo: { question, answers }
		} = questions;
		const list = [];
		const renderArr = answers.map(item => {
			const key = Object.keys(item)[0];
			const value = item[key];
			list.push(key);
			return (
				<label key={key} htmlFor={key} className="checkbox-inputs">
					<input
						type="checkbox"
						onClick={this.handleCheckboxClick}
						id={key}
						name={key}
						value={key}
					/>
					<span>{value}</span>
				</label>
			);
		});
		return this.setState({ question, answers: renderArr, list });
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

SecondQuestions.propTypes = {
	onCheckboxSelection: PropTypes.func.isRequired
};

export default SecondQuestions;
