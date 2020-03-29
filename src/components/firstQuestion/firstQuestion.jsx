import React, { Component } from "react";
import PropTypes from "prop-types";

class FirstQuestion extends Component {
	handleLangChange(event) {
		const { onSelectLanguage } = this.props;
		onSelectLanguage(event);
	}

	render() {
		// const { onClick } = this.props;
		return (
			<div className="row margin-top_push">
				<div className="col-12">
					<span>Are you an essential worker?</span>
				</div>
				<div className="col-12" onChange={this.handleLangChange.bind(this)}>
					<label htmlFor="Male" className="radio-btn_group">
						<input id="Male" type="radio" value="MALE" name="gender" />
						Male
					</label>
					<label htmlFor="Female" className="radio-btn_group">
						<input id="Female" type="radio" value="FEMALE" name="gender" />
						Female
					</label>
				</div>
			</div>
		);
	}
}

FirstQuestion.propTypes = {
	onSelectLanguage: PropTypes.func.isRequired
};

export default FirstQuestion;
