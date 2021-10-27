import React from "react";

function Two() {
	return (
		<div className="two">
			<div className="two-head">Latest Arrivals</div>
			<img src="./assets/11.png" alt="red logo" />
			<p className="two-para">
				Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, <br /> when an unknown printer took a galley of
				type and scrambled it to make a type <br /> specimen book. It
				has survived not only five centuries
			</p>
			<div className="two-flex">
				<div className="prod">
					<img
						src="./assets/6.png"
						alt="product 1"
						className="prod-img"
					/>
					<div className="prod-head">Lorem Ipsum</div>
					<div className="prod-desc">Lorem Ipsum</div>
					<div className="prod-rate">AED 389.00</div>
				</div>
				<div className="prod">
					<img
						src="./assets/7.png"
						alt="product 2"
						className="prod-img"
					/>
					<div className="prod-head">Lorem Ipsum</div>
					<div className="prod-desc">Lorem Ipsum</div>
					<div className="prod-rate">AED 389.00</div>
				</div>
				<div className="prod">
					<img
						src="./assets/8.png"
						alt="product 3"
						className="prod-img"
					/>
					<div className="prod-head">Lorem Ipsum</div>
					<div className="prod-desc">Lorem Ipsum</div>
					<div className="prod-rate">AED 389.00</div>
				</div>
				<div className="prod">
					<img
						src="./assets/9.png"
						alt="p  roduct 4"
						className="prod-img"
					/>
					<div className="prod-head">Lorem Ipsum</div>
					<div className="prod-desc">Lorem Ipsum</div>
					<div className="prod-rate">AED 389.00</div>
				</div>
			</div>
			<div className="mid">
				<button className="btn btn1">SHOP NOW</button>
				<button className="btn btn2">NEW ARRIVALS</button>
			</div>
			<div className="mid-head">15% OFF ON ALL ABAYA COLLECTIONS</div>
		</div>
	);
}

export default Two;
