import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import SearchBox from './SearchBox.tsx';
import MovieList from './MovieList.tsx';

const App: React.FC = () => {
	const [movies, setMovies] = useState<any[]>([]);
	const [searchValue, setSearchValue] = useState<string>('');

	const getMovieRequest = async (searchValue: string) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=b8b3fec4`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<div className='col'>
					<h1>Open Movies App</h1>
				</div>
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default App;
