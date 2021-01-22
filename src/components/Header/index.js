import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import Logo from './../../assets/logo.jpg';

const Header = (props) => {
	return (
		<header className="header">
			<div className="wrap">
				<div className="logo">
					<Link to="/">
						<img src={Logo} alt="logo" />
					</Link>
				</div>

				<div className="callToAction">
					<ul>
						<li>
							<Link to="/registration">Register</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
