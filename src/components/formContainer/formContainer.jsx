import React, { Component } from "react";

import FirstQuestion from "../firstQuestion/firstQuestion";
import { toggleClass } from "../../global/_util";

class formContainer extends Component {
	clickHandler() {
		toggleClass(document.querySelector(".test1"), "d-none");
		toggleClass(document.querySelector(".test2"), "d-none");
	}

	render() {
		return (
			<>
				<button type="button" onClick={this.clickHandler}>
					Click Me
				</button>
				<div className="text-center test1">
					<FirstQuestion />
				</div>
				<div className="animated fadeInRightBig text-center d-none test2">
					<p>Watch me fade in!</p>
				</div>
			</>
		);
	}
}

export default formContainer;
