import React, { useContext, useEffect } from 'react';
import NewsCard from './NewsCard';
import NewsContext from '../../contexts/news/NewsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

function Topic({ topic, n }) {
	const newsContext = useContext(NewsContext);

	const {
		topicnews,
		getTopicNews,
		loading,
		getSearchedNews,
		setSearch,
	} = newsContext;

	useEffect(() => {
		getTopicNews(topic);
	}, []);

	if (loading) {
		return <h2>sorry</h2>;
	} else {
		return (
			<div className="topic">
				<div className="heading-topic">
					<span>{topic}</span>
				</div>
				<div className="topic-news">
					{topicnews[topic] &&
						topicnews[topic]
							.slice(0, 4)
							.map((newss) => (
								<NewsCard
									title={newss.title.split('-')[0]}
									img={newss.urlToImage}
									author={newss.author}
									source={newss.source.name}
									url={newss.url}
									key={newss.url}
								/>
							))}
				</div>
				<span
					className="read-more"
					onClick={() => {
						setSearch(topic);
						getSearchedNews(topic, 'keyword');
					}}
				>
					READ MORE{' '}
					<FontAwesomeIcon className="icon" icon={faLongArrowAltRight} />
				</span>
			</div>
		);
	}
}

export default Topic;
