import React from 'react';
import Boysfashion from './../../assets/Boysfashion.png';
import Girlfashion from './../../assets/Girlfashion.png';
import './styles.scss';

const Directory = (props) => {
	return (
		<div className="directory">
			<div className="wrap">
				<div
					className="item"
					style={{
						backgroundImage: `url(${Boysfashion})`
					}}
				>
					<a>Menfashion</a>
				</div>

				<div
					className="item"
					style={{
						backgroundImage: `url(${Girlfashion})`
					}}
				>
					<a>Womenfashion</a>
				</div>
			</div>
		</div>
	);
};

export default Directory;
