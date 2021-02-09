import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';
import Logo from './../../assets/logo.jpg';

const Header = (props) => {
	const { currentUser } = props;
	return (
		<header className="header">
			<div className="wrap">
				<div className="logo">
					<Link to="/">
						<img src={Logo} alt="logo" />
					</Link>
				</div>

				<div className="callToActions">
					{currentUser && (
						<ul>
							<li>
								<span onClick={() => auth.signOut()}>SignOut</span>
							</li>
						</ul>
					)}

					{!currentUser && (
						<ul>
							<li>
								<Link to="/dashboard">Dashboard</Link>
							</li>
							<li>
								<Link to="/signup">Signup</Link>
							</li>
							<li>
								<Link to="/login">Login</Link>
							</li>
						</ul>
					)}
				</div>
			</div>
		</header>
	);
};

Header.defaultProps = {
	currentUser: null
};

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
});

export default connect(mapStateToProps, null)(Header);
