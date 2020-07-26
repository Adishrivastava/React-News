import React, { useContext, useEffect } from 'react';
import NewsContext from '../../contexts/news/NewsContext';
import {
	faLongArrowAltRight,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Search() {
	const newsContext = useContext(NewsContext);
	const {
		setSearch,
		getSearchedNews,
		search,
		searchbarBool,
		changeSearchbarBool,
	} = newsContext;

	useEffect(() => {
		// function for controlling search form
		const searchForm = document.getElementById('search-form');

		searchForm.addEventListener('submit', (evt) => {
			evt.preventDefault();
			getSearchedNews(search);
		});
	}, []);

	return (
		<div
			id="search-bar"
			style={searchbarBool ? { top: '150px' } : { top: '-1000px' }}
		>
			<div className="cross" onClick={() => changeSearchbarBool(false)}>
				<FontAwesomeIcon icon={faTimes} />
			</div>
			<div className="container">
				<h1 className="tac">Search</h1>
				<form id="search-form">
					<div className="form-group">
						<input
							type="text"
							id="search"
							name="search"
							onChange={(evt) => {
								setSearch(evt.target.value);
							}}
							placeholder="Keyword"
							required
						/>
					</div>
					<div className="form-group">
						<button
							onClick={(evt) => {
								evt.preventDefault();

								getSearchedNews(search, 'keyword');
							}}
							type="submit"
						>
							<FontAwesomeIcon icon={faLongArrowAltRight} />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Search;
