import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';

const UserDetails = () => {
	const { id } = useParams();

	const [user, setUser] = useState();

	useEffect(() => {
		const getUser = async () => {
			const userFromServer = await fetchUser();
			// Save user to state
			setUser(userFromServer);
		};

		getUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//Fetch user
	const fetchUser = async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
		const data = await res.json();

		return data;
	};

	return (
		<div className='card-details'>
			{user === undefined ? (
				<div>
					<h2>Loading...</h2>
				</div>
			) : (
				<div>
					<h3>- name: {user.name}</h3>
					<h3>- username: {user.username}</h3>
					<h3>- email: {user.email}</h3>
					<h3>- phone: {user.phone}</h3>
					<h3>- company: {user.company.name}</h3>
					<h3>- website: {user.website}</h3>
					<h3>- address</h3>
					<ul>
						<li>
							<h3>street: {user.address.street}</h3>
						</li>
						<li>
							<h3>suite: {user.address.suite}</h3>
						</li>
						<li>
							<h3>city: {user.address.city}</h3>
						</li>
						<li>
							<h3>zipcode: {user.address.city}</h3>
						</li>
					</ul>
				</div>
			)}
			<Button link='/' buttonText='Back to Contacts' />
		</div>
	);
};

export default UserDetails;
