import React, { Component } from "react";

class SecondQuestions extends Component {
	constructor() {
		super();
		this.state = {
			selections: []
		};

		this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
	}

	handleCheckboxClick(event) {
		this.handleDisable(event);
	}

	handleDisable(event) {
		const { selections } = this.state;
		const val = event.currentTarget.value;
		const ids = ["vehicle1", "vehicle2", "vehicle3", "vehicle4", "vehicle5", "vehicle6"];

		if (event.currentTarget.checked) {
			selections.push(val);
			this.setState({ selections });
		} else {
			const index = selections.indexOf(val);
			selections.splice(index, 1);
			this.setState({ selections });
		}

		if (selections.length === 0) {
			for (let i = 0; i < ids.length; i++) {
				document.querySelector(`#${ids[i]}`).disabled = false;
			}
		} else if (!selections.includes("None")) {
			document.querySelector("#vehicle6").disabled = "disabled";
		} else if (selections.includes("None")) {
			for (let i = 0; i < ids.length - 1; i++) {
				document.querySelector(`#${ids[i]}`).disabled = "disabled";
			}
		}
	}

	render() {
		return (
			<>
				<div>
					<span>Please select all that apply</span>
				</div>
				<div>
					<label htmlFor="vehicle1" className="checkbox-inputs">
						<input
							type="checkbox"
							onClick={this.handleCheckboxClick}
							id="vehicle1"
							name="vehicle1"
							value="Bike"
						/>
						<span>Bike</span>
					</label>

					<label htmlFor="vehicle2" className="checkbox-inputs">
						<input
							type="checkbox"
							onClick={this.handleCheckboxClick}
							id="vehicle2"
							name="vehicle2"
							value="Car"
						/>
						<span>Car</span>
					</label>

					<label htmlFor="vehicle3" className="checkbox-inputs">
						<input
							type="checkbox"
							onClick={this.handleCheckboxClick}
							id="vehicle3"
							name="vehicle3"
							value="Bus"
						/>
						<span>Bus</span>
					</label>

					<label htmlFor="vehicle4" className="checkbox-inputs">
						<input
							type="checkbox"
							onClick={this.handleCheckboxClick}
							id="vehicle4"
							name="vehicle4"
							value="Plane"
						/>
						<span>Plane</span>
					</label>

					<label htmlFor="vehicle5" className="checkbox-inputs">
						<input
							type="checkbox"
							onClick={this.handleCheckboxClick}
							id="vehicle5"
							name="vehicle5"
							value="Train"
						/>
						<span>Train</span>
					</label>
					<label htmlFor="vehicle6" className="checkbox-inputs">
						<input
							type="checkbox"
							onClick={this.handleCheckboxClick}
							id="vehicle6"
							name="vehicle6"
							value="None"
						/>
						<span>None of these apply</span>
					</label>
				</div>
				<div className="submit-button_group">
					<button type="button">Go Back</button>
					<button type="button">Next</button>
				</div>
			</>
		);
	}
}

export default SecondQuestions;
