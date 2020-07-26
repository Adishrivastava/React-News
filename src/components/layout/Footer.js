import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-lg-7 col-md-7">
						<h2>Contact us</h2>
						{/* <form id="form1">
							<div className="form-group row">
								<input type="text" className="form-control col-md-8" />
								<div className="col-md-4">
									<button className="btn ">
										<FontAwesomeIcon icon={faLongArrowAltLeft} />
									</button>
								</div>
							</div>
						</form> */}
					</div>
					<div className="col-lg-5 col-md-5">
						<h4 style={{ textAlign: 'center' }}>Follow us</h4>
						<div className="social-cont">
							<FontAwesomeIcon icon={faFacebook} />
							<FontAwesomeIcon icon={faInstagram} />
							<FontAwesomeIcon icon={faLinkedin} />
							<FontAwesomeIcon icon={faTwitter} />
						</div>
					</div>
				</div>
				{/* <div className="row links-cont">
					<div className="col-md-4 col-lg-4">
						<ul className="list-group">
							<li className="list-group-item">item-1</li>
							<li className="list-group-item">item-1</li>
							<li className="list-group-item">item-1</li>
						</ul>
					</div>
					<div className="col-md-4 col-lg-4">
						<ul className="list-group">
							<li className="list-group-item">item-1</li>
							<li className="list-group-item">item-1</li>
							<li className="list-group-item">item-1</li>
						</ul>
					</div>
					<div className="col-md-4 col-lg-4">
						<ul className="list-group">
							<li className="list-group-item">item-1</li>
							<li className="list-group-item">item-1</li>
							<li className="list-group-item">item-1</li>
						</ul>
					</div>
				</div> */}
				<div className="row mt-4">
					<h2
						style={{
							textAlign: 'center',
							display: 'block',
							margin: 'auto',
							color: 'white',
						}}
					>
						Triveous News
					</h2>
					<p
						style={{
							textAlign: 'center',
							color: '#fff',
							marginTop: '10px',
						}}
					>
						First, we set the section to have configured to display: grid.
						This CSS property sets the element to render using CSS Grid.
						Now each direct child element will be a grid item placed in a
						column.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
