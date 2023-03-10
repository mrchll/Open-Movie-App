import React, { useState, useEffect } from 'react';

type MovieDetailedInfoProps = {
	trigger: boolean;
	setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
	movieDetails: any;
	key: string;
};

const MovieDetailedInfo: React.FC<MovieDetailedInfoProps> = (props) => {
	const movieDetails = props.movieDetails;
	const movieId: string = useState(movieDetails.imdbID);
	const [movieInfos, setMovieInfos] = useState<any>('');

	const getMovieRequest = async (movieId: string) => {
		const url = `http://www.omdbapi.com/?i=${movieId[0]}&apikey=b8b3fec4`;

		const response = await fetch(url);
		const responseJson = await response.json();
		setMovieInfos(responseJson);
	};

	useEffect(() => {
		getMovieRequest(movieId);
	}, [movieId]);

	return (props.trigger) ? (
		<>
			<div className='details-wrapper'>
				<div className='col poster'>
					<img src={movieInfos.Poster} alt='movie'></img>
				</div>
				<div className='movie-details'>
					<span>{movieInfos.Title} {movieInfos.Year}</span>
					<span>{movieInfos.Runtime}</span>
					<span>{movieInfos.Genre}</span>
					<span>{movieInfos.Director}</span>
					<span>{movieInfos.Actors}</span>
					<span>{movieInfos.Plot}</span>
				</div>
				<div className='inner'>
					<button className='close-button' onClick={() => props.setTrigger(false)}>Close</button>
				</div>
			</div>
		</>
	) : "";
};

export default MovieDetailedInfo;
