import React, { useState } from 'react';
import MovieDetailedInfo from './MovieDetailedInfo';

const MovieList = (props) => {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<>
			{props.movies.map((movie, index) => (
				<>
					<div
						className='image-container d-flex justify-content-start m-3'
						onClick={() => setShowDetails(true)}
					>
						<img src={movie.Poster} alt='movie'></img>
						<div className='overlay d-flex align-items-center justify-content-center' >
							<div className='row movie-title'>
								<span>{movie.Title} ({movie.Year})</span>
							</div>
							<div className='row'>
								<span>{movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}</span>
							</div>
						</div>
					</div>
					<div className='detailed-info'>
						<MovieDetailedInfo
							trigger={showDetails}
							setTrigger={setShowDetails}
							movieDetails={movie}
						/>
					</div>
				</>
			))}
		</>
	);
};

export default MovieList;
