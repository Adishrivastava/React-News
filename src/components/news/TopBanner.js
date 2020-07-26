import React, { useContext } from 'react';

import NewsContext from '../../contexts/news/NewsContext';
import NewsCard from '../layout/NewsCard';

function TopBanner() {
	const newsContext = useContext(NewsContext);
	const { topnews } = newsContext;
	return (
		<div id="topbanner" className="container">
			{topnews.slice(0, 4).map((news) => (
				<NewsCard
					title={news.title.split('-')[0]}
					img={news.urlToImage}
					author={news.author}
					source={news.source.name}
					url={news.url}
					key={news.url}
				/>
			))}
		</div>
	);
}

export default TopBanner;
