import React from 'react';

function NewsCard({ title, author, img, source, url }) {
	return (
		<a href={url}>
			<div className="news-card-1 card-news" key={title}>
				{/* <span className="news-tag">{author ? author : 'no author'}</span> */}
				<img src={img} alt="" />
				<div className="text-content">
					<h5 className="source">{source}</h5>
					<h5>{title}</h5>
				</div>
			</div>
		</a>
	);
}

export const NewsCard2 = ({ title, author, img, source, desc, url }) => {
	return (
		<a href={url}>
			<div className="news-card-2 card-news" key={title}>
				<div className="img-cont">
					<img src={img} alt="" />
				</div>
				<div className="text-content">
					<h5 className="source">{source}</h5>
					<h5>{title}</h5>
					<p>{desc}</p>
				</div>
				{/* <span className="underline"></span> */}
			</div>
		</a>
	);
};

export default NewsCard;
