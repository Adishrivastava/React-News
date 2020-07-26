import React from 'react';
import Topic from '../layout/Topic';

function TopicsSection() {
	const topicsList = [
		'politics',
		'entertainment',
		'sports',
		'business',
		'tech',
	];
	return (
		<div id="topic-section" className="container">
			{[...Array(topicsList.length).keys()].map((n) => (
				<Topic topic={topicsList[n]} key={n}></Topic>
			))}
		</div>
	);
}

export default TopicsSection;
