import React from "react";

function One() {
	return (
		<div className="one">
			<div className="menu">
				<img src="./assets/logo.png" alt="logo" className="logo" />
				<span className="items">About Us</span>
				<span className="items">Products</span>
				<span className="items">Blog</span>
				<span className="items">Contact Us</span>
			</div>
			<div className="main-content">
				<div className="heading">
					Lorem Ipsum Lorem Ipsum <br />
					Lorem Ipsum
				</div>
				<button className="btn1">SHOP NOW</button>
				<button className="btn2">NEW ARRIVALS</button>
			</div>
			<div className="side-note">
				<span>2-Hour Delivery in Dubai</span>
				<span>Contactless Delivery</span>
				<span>New: Pay in Installments</span>
			</div>
		</div>
	);
}

export default One;
