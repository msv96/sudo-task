import React from "react";

function Three() {
	return (
		<>
			<div className="three">
				<div className="two-head">All Our Products</div>
				<img src="./assets/11.png" alt="red logo" />
				<p className="two-para">
					Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, <br /> when an unknown printer took a
					galley of type and scrambled it to make a type <br />{" "}
					specimen book. It has survived not only five centuries
				</p>
				<div className="three-flex">
					{[...Array(4)].map((e) => {
						return (
							<div className="prod1">
								<img
									src="./assets/6.png"
									alt="product 1"
									className="prod-img1"
								/>
								<div className="prod-head1">Lorem Ipsum</div>
								<div className="prod-desc1">Lorem Ipsum</div>
								<div className="prod-rate1">AED 389.00</div>
							</div>
						);
					})}
				</div>
				<div className="three-flex">
					{[...Array(4)].map((e) => {
						return (
							<div className="prod1">
								<img
									src="./assets/6.png"
									alt="product 1"
									className="prod-img1"
								/>
								<div className="prod-head1">Lorem Ipsum</div>
								<div className="prod-desc1">Lorem Ipsum</div>
								<div className="prod-rate1">AED 389.00</div>
							</div>
						);
					})}
				</div>
				<button className="btn1">
					Load <br /> More
				</button>
			</div>
			<div className="mid-2">
				<span className="quot">
					<sup>“</sup>
				</span>
				<div>
					<div className="mid-content">
						Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, <br /> when an unknown printer
						took a galley of type and scrambled it to make a type
						<br /> specimen book. It has survived not only five
						centuries
					</div>
				</div>
				<div className="user">
					<span className="circle"></span>
					<span className="cus-name">Anna Doe</span>
					<br />
					<span className="cus-react">Happy Customer</span>
				</div>
			</div>
		</>
	);
}

export default Three;
