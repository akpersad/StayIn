import React, { Component } from "react";

class SecondQuestions extends Component {
	render() {
		return (
			<>
				<div>
					<span>Please select all that apply</span>
				</div>
				<div>
					<label htmlFor="vehicle1" className="checkbox-inputs">
						<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
						<span>Bike</span>
					</label>

					<label htmlFor="vehicle2" className="checkbox-inputs">
						<input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
						<span>Car</span>
					</label>

					<label htmlFor="vehicle3" className="checkbox-inputs">
						<input type="checkbox" id="vehicle3" name="vehicle3" value="Bus" />
						<span>Bus</span>
					</label>

					<label htmlFor="vehicle4" className="checkbox-inputs">
						<input type="checkbox" id="vehicle4" name="vehicle4" value="Plane" />
						<span>Plane</span>
					</label>

					<label htmlFor="vehicle5" className="checkbox-inputs">
						<input type="checkbox" id="vehicle5" name="vehicle5" value="Train" />
						<span>Train</span>
					</label>
				</div>
			</>
		);
	}
}

export default SecondQuestions;
