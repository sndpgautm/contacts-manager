import React from 'react';
import Button from './Button';

const UserCard = ({ user }) => {
	return (
		<div className='card'>
			<div className='name-header'>{user.name.slice(0, 1).toUpperCase()}</div>
			<h3>{user.name}</h3>
			<p>@{user.username}</p>
			<a className='user-site-link' href={user.website}>
				{user.website}
			</a>
			<Button link={`/userdetails/${user.id}`} buttonText='More Details' />
		</div>
	);
};

export default UserCard;
