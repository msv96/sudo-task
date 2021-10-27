import React from "react";

function Five() {
	return (
		<div className="five">
			<div className="grid">
				<div className="links">
					<img src="./assets/logo.png" alt="logo" />
					<div className="grid-two">
						<span className="flex-col">
							<span className="flex-one">Community</span>
							<span className="flex-rem">About Us</span>
							<span className="flex-rem">Contact Us</span>
							<span className="flex-rem">Our Location</span>
							<span className="flex-last">
								<img
									src="./assets/fb.svg"
									alt="fb logo"
									className="link-logos"
								/>
								<img
									src="./assets/insta.svg"
									alt="insta logo"
									className="link-logos"
								/>
								<img
									src="./assets/link.svg"
									alt="link logo"
									className="link-logos"
								/>
								<img
									src="./assets/twit.svg"
									alt="twit logo"
									className="link-logos"
								/>
							</span>
						</span>
						<span className="flex-col">
							<span className="flex-one">Customer Service</span>
							<span className="flex-rem">FAQs</span>
							<span className="flex-rem">Size Guide</span>
							<span className="flex-rem">Payment Methods</span>
							<span className="flex-rem">Exchange & Refunds</span>
							<span className="flex-rem">Shipping</span>
							<span className="flex-rem">Tems & Conditions</span>
						</span>
					</div>
				</div>
				<img src="./assets/16.png" alt="map" className="map" />
			</div>
			<footer className="foot">
				<span className="foot-menu-1">
					&copy; 2021 All right reserved
				</span>
				<span className="foot-menus">Home</span>
				<span className="foot-menus">About Us</span>
				<span className="foot-menus">Services</span>
				<span className="foot-menus">Privacy Policy</span>
				<span className="foot-menus">Terms & Conditions</span>
			</footer>
		</div>
	);
}

export default Five;
