import React, { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import NewsContext from '../../contexts/news/NewsContext';

function Header() {
	const newsContext = useContext(NewsContext);
	const {
		changeSearchbarBool,
		setSearch,
		getSearchedNews,
		search,
		changeSearchBool,
	} = newsContext;

	const listItems = [
		'Business',
		'Innovation',
		'Lifestyle',
		'Politics',
		'Tech',
		'India',
	];

	const sourcesList = ['bbc-news', 'techcrunch', 'google-news'];

	return (
		<div id="header">
			<div className="navbar " id="topnav">
				<h1>
					Triveous News <span>Get the latest news</span>{' '}
					<span className="search-mini">
						<FontAwesomeIcon
							icon={faSearch}
							onClick={() => changeSearchbarBool(true)}
						/>
					</span>
				</h1>
			</div>
			<nav id="menu">
				<ul className="listgroup">
					<li
						className={
							search === 'Home'
								? 'list-group-items active'
								: 'list-group-items'
						}
						onClick={() => changeSearchBool(false)}
					>
						Home
					</li>
					{listItems &&
						listItems.map((item) => (
							<li
								className={
									search === item
										? 'list-group-items active'
										: 'list-group-items'
								}
								onClick={() => {
									setSearch(item);
									getSearchedNews(item, 'keyword', false);
								}}
								key={item}
							>
								{item}
							</li>
						))}
					{sourcesList &&
						sourcesList.slice(0, 6).map((item) => (
							<li
								className={
									search === item
										? 'list-group-items active'
										: 'list-group-items'
								}
								onClick={() => {
									setSearch(item);
									getSearchedNews(item, 'sources', false);
								}}
								key={item}
							>
								{item}
							</li>
						))}
					<span>
						<FontAwesomeIcon
							icon={faSearch}
							onClick={() => changeSearchbarBool(true)}
						/>
					</span>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
