import React from 'react';
import Books from './components/books';

const App: React.FC = () => {
	return (
		<div className="container-fluid">
			<h1 className="text-cent my-3 display-4">Books App</h1>
			<Books />
		</div>
	);
};

export default App;
