import React, { useState, useRef } from 'react';
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
	const nameInputRef = useRef();
	const ageInputRef = useRef();
	const [error, setError] = useState();

	const submitHandler = (event) => {
		event.preventDefault();

		if (
			nameInputRef.current.value.trim().length === 0 ||
			ageInputRef.current.value.trim().length === 0
		) {
			setError({
				title: 'Invalid input',
				message:
					'Please enter a valid name and age (empty values are not allowed)',
			});
			return;
		}

		if (+ageInputRef.current.value < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (more than 0)',
			});
			return;
		}

		const userInput = {
			username: nameInputRef.current.value,
			age: ageInputRef.current.value,
		};

		props.onAddUser(userInput);

		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
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
					<input type="text" id="AddUserUsername" ref={nameInputRef} />
					<label htmlFor="AddUserAge">Age (Years)</label>
					<input
						type="number"
						id="AddUserAge"
						min="0"
						step="1"
						ref={ageInputRef}
					/>
					<Button type="submit">Add User</Button>
				</AddUserStyles>
			</Card>
		</>
	);
};

export default AddUser;
