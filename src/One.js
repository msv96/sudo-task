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
				<span className="side-note-span">2-Hour Delivery in Dubai</span>
				<span className="side-note-span">Contactless Delivery</span>
				<span className="side-note-span">New: Pay in Installments</span>
			</div>
			<div className="float">
				<div className="back">
					<img src="./assets/2.png" alt="abaya" className="img" />
					<span className="back-span">
						Abaya <br /> Collections
					</span>
				</div>
				<div className="back">
					<img src="./assets/3.png" alt="perfumes" className="img" />
					<span className="back-span">
						Perfumes <br /> & Sprays
					</span>
				</div>
				<div className="back">
					<img src="./assets/4.png" alt="dresses" className="img" />
					<span className="back-span">Dresses</span>
				</div>
				<div className="back">
					<img src="./assets/5.png" alt="new in" className="img" />
					<span className="back-span">New In</span>
				</div>
			</div>
		</div>
	);
}

export default One;
