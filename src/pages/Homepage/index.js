import React from 'react';
import Footer from '../../components/Footer';
import Directory from './../../components/Directory';
import './styles.scss';

const Homepage = (props) => {
	return (
		<section className="homepage">
			<Directory />
			<Footer />
		</section>
	);
};
export default Homepage;
