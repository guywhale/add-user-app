import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../UI/Card';
import Button from '../Button/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUserStyles = styled.form`
	& label {
		display: block;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	& input {
		font: inherit;
		display: block;
		width: 100%;
		border: 1px solid #ccc;
		padding: 0.15rem;
		margin-bottom: 0.5rem;

		&:focus {
			outline: none;
			border-color: #4f005f;
		}
	}
`;

const AddUser = (props) => {
	const [userInput, setUserInput] = useState({
		username: '',
		age: '',
	});
	const [error, setError] = useState();

	const usernameChangeHandler = (event) => {
		setUserInput((prevInputs) => {
			return {
				...prevInputs,
				username: event.target.value,
			};
		});
	};

	const ageChangeHandler = (event) => {
		setUserInput((prevInputs) => {
			return {
				...prevInputs,
				age: +event.target.value,
			};
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();

		if (
			userInput.username.trim().length === 0 ||
			userInput.username.trim().length === 0
		) {
			setError({
				title: 'Invalid input',
				message:
					'Please enter a valid name and age (empty values are not allowed)',
			});
			return;
		}

		if (+userInput.age < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (more than 0)',
			});
			return;
		}

		props.onAddUser(userInput);
		setUserInput({
			username: '',
			age: '',
		});
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card>
				<AddUserStyles onSubmit={submitHandler}>
					<label htmlFor="AddUserUsername">Username</label>
					<input
						type="text"
						id="AddUserUsername"
						value={userInput.username}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor="AddUserAge">Age (Years)</label>
					<input
						type="number"
						id="AddUserAge"
						min="0"
						step="1"
						value={userInput.age}
						onChange={ageChangeHandler}
					/>
					<Button type="submit">Add User</Button>
				</AddUserStyles>
			</Card>
		</>
	);
};

export default AddUser;
