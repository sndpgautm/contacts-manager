import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ link, buttonText }) => {
	return (
		<Link to={link} className='btn'>
			{buttonText}
		</Link>
	);
};

export default Button;
