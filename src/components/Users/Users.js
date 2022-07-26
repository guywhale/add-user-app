import React from 'react';
import styled from 'styled-components';
import Card from '../UI/Card';

const UserList = styled.ul`
	list-style: none;
	padding: 0;

	& li {
		border: 1px solid #ccc;
		margin: 0.5rem 0;
		padding: 0.5rem;
	}
`;

const Users = (props) => {
	if (props.users.length === 0) {
		return;
	}

	return (
		<Card>
			<UserList>
				{props.users.map((user) => {
					return (
						<li key={user.key}>
							{user.username} ({user.age} years old)
						</li>
					);
				})}
			</UserList>
		</Card>
	);
};

export default Users;
