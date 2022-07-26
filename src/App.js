import React from 'react';
import Container from './components/UI/Container';
import AddUser from './components/AddUser/AddUser';

const App = () => {
	return (
		<div className="App">
			<Container>
				<AddUser />
			</Container>
		</div>
	);
};

export default App;
