import React, { useContext, useState } from 'react';

import NewsContext from '../../contexts/news/NewsContext';
import { NewsCard2 } from '../layout/NewsCard';

import Pagination from '../layout/Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
// import Loading from '../layout/Loading';

function Searched() {
	const newsContext = useContext(NewsContext);
	const { searchednews, search, changeSearchBool } = newsContext;

	const [currentPage, setcurrentPage] = useState(1);
	const [postsPerPage] = useState(5);

	// get current news
	const indexofLastPost = currentPage * postsPerPage;
	const indexofFirstPost = indexofLastPost - postsPerPage;
	const currentPosts = searchednews.slice(indexofFirstPost, indexofLastPost);

	return (
		<div id="searched-cont" className="container">
			<div className="row">
				<h1>
					Results for
					<span style={{ color: 'rgb(63, 67, 149)', fontWeight: 'bold' }}>
						{' ' + search}
					</span>
					<span className="backbtn" onClick={() => changeSearchBool()}>
						<FontAwesomeIcon icon={faLongArrowAltLeft} /> BACK
					</span>
				</h1>
			</div>
			<div className="searced-new-cont list-group mt-5">
				{[
					currentPosts.map((news) => (
						<li className="list-group-item mb-4" key={news.publishedAt}>
							<NewsCard2
								title={news.title.split('-')[0]}
								img={news.urlToImage}
								author={news.author}
								source={news.source.name}
								desc={news.description}
								url={news.url}
							/>
						</li>
					)),
				]}
			</div>
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={searchednews.length}
				setCurrentPage={setcurrentPage}
				currentPage={currentPage}
			/>
		</div>
	);
}

export default Searched;
