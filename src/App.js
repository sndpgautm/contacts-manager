import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserDetails from './components/UserDetails';

const App = () => {
	const [users, setUsers] = useState();

	useEffect(() => {
		const getUsers = async () => {
			const usersFromServer = await fetchUsers();
			// Save users to state
			setUsers(usersFromServer);
		};

		getUsers();
	}, []);

	// Fetch Users
	const fetchUsers = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await res.json();

		return data;
	};

	return (
		<Router>
			<div className='container'>
				<Switch>
					<Route path='/' exact>
						<HomePage users={users} />
					</Route>
					<Route exact path='/userdetails/:id' component={UserDetails} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
