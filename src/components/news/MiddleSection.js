import React, { useContext, useState } from 'react';
import NewsContext from '../../contexts/news/NewsContext';
import NewsCard from '../layout/NewsCard';

function MiddleSection() {
	const newsContext = useContext(NewsContext);
	const { filterednews, filterBool } = newsContext;

	const [fil, setfil] = useState('top-headlines');
	return (
		<div className="container-fluid" id="middle-section">
			<div className="underline"></div>

			<div className="middle-row row">
				<div className="col-lg-7 col-md-7">
					<div className="news-cont-2">
						{filterBool &&
							filterednews[fil]
								.slice(0, 3)
								.map((news) => (
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
				</div>
				<div className="col-lg-5 col-md-5">
					<div className="side-filters">
						<div className="filters row">
							<div
								className={
									fil === 'top-headlines' ? 'filter active' : 'filter'
								}
								onClick={() => {
									setfil('top-headlines');
								}}
							>
								Top-Trending
							</div>
							<div
								className={
									fil === 'coronavirus' ? 'filter active' : 'filter'
								}
								onClick={() => {
									setfil('coronavirus');
								}}
							>
								Coronavirus latest
							</div>
						</div>
						<ul className="filtered-news list-group">
							{filterBool &&
								filterednews[fil].slice(0, 7).map((news) => (
									<li className="list-group-item" key={news.title}>
										<a href={news.url}>
											<h5>{news.title.split('-')[0]}</h5>
											<p>{news.title.split('-')[1]}</p>
											<div className="underline"></div>
										</a>
									</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MiddleSection;
