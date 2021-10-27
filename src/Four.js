import React from "react";

function Four() {
	return (
		<div className="four">
			<div className="two-head">Brands We Dealing</div>
			<img src="./assets/11.png" alt="red logo" />
			<p className="four-para">
				Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s,
				<br />
				when an unknown printer took a galley of type.
			</p>
			<div className="four-flex">
				{[...Array(5)].map((e) => {
					return (
						<img
							src="./assets/15.png"
							alt="product 1"
							className="prod-img1"
						/>
					);
				})}
			</div>
			<div className="four-flex">
				{[...Array(5)].map((e) => {
					return (
						<img
							src="./assets/15.png"
							alt="product 1"
							className="prod-img1"
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Four;
