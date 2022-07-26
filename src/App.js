import React, { useState } from 'react';
import Container from './components/UI/Container';
import AddUser from './components/AddUser/AddUser';
import Users from './components/Users/Users';

const App = () => {
	const [userList, setUserList] = useState([]);

	const addUserHandler = (addedUser) => {
		const newUser = {
			...addedUser,
			key: Math.random().toString(),
		};

		setUserList((prevUsers) => {
			return [...prevUsers, newUser];
		});
	};

	return (
		<div className="App">
			<Container>
				<AddUser onAddUser={addUserHandler} />
				<Users users={userList} />
			</Container>
		</div>
	);
};

export default App;
