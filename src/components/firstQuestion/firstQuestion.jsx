import React, { Component } from "react";
import PropTypes from "prop-types";

class FirstQuestion extends Component {
	handleButtonChange(event) {
		const { onChoiceSelection } = this.props;
		onChoiceSelection(event);
	}

	render() {
		// const { onClick } = this.props;
		return (
			<div className="row">
				<div className="col-12">
					<span>Are you an essential worker?</span>
				</div>
				<div className="col-12" onChange={this.handleButtonChange.bind(this)}>
					<label htmlFor="yes" className="radio-btn_group">
						<input id="yes" type="radio" value="yes" name="gender" />
						<span>Yes</span>
					</label>
					<label htmlFor="no" className="radio-btn_group">
						<input id="no" type="radio" value="no" name="gender" />
						<span>No</span>
					</label>
				</div>
			</div>
		);
	}
}

FirstQuestion.propTypes = {
	onChoiceSelection: PropTypes.func.isRequired
};

export default FirstQuestion;
