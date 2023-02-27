import * as React from 'react';

interface SearchBoxProps {
	searchValue: string;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchValue, setSearchValue }) => {
	return (
		<div className='col col-sm-3'>
			<input
				className='form-control'
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
				placeholder='Search'
			></input>
		</div>
	);
};

export default SearchBox;
