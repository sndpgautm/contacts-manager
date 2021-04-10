import React from 'react';
import UserCard from './UserCard';

const HomePage = ({ users }) => {
	return (
		<>
			{users === undefined ? (
				<div className='cards-container'>
					<h1>Loading users...</h1>
				</div>
			) : (
				<div className='cards-container'>
					{users.map((user) => (
						<UserCard key={user.id} user={user} />
					))}
				</div>
			)}
		</>
	);
};

export default HomePage;
