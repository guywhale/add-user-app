// import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../UI/Card';

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

const AddUser = () => {
	return (
		<Card>
			<AddUserStyles>
				<label htmlFor="AddUserUsername">Username</label>
				<input type="text" id="AddUserUsername" />
				<label htmlFor="AddUserAge">Age (Years)</label>
				<input type="number" id="AddUserAge" min="0" step="1" />
			</AddUserStyles>
		</Card>
	);
};

export default AddUser;
