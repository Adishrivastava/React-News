import React, { Fragment, useContext } from 'react';

import NewsContext from '../../contexts/news/NewsContext';
import Searched from './Searched';
import MiddleSection from './MiddleSection';
import TopBanner from './TopBanner';
import TopicsSection from './TopicsSection';
import Loading from '../layout/Loading';

function MainSection() {
	const newsContext = useContext(NewsContext);
	const { searchBool, loading } = newsContext;
	if (loading) {
		return <Loading />;
	} else {
		return (
			<Fragment>
				{searchBool ? (
					<Searched />
				) : (
					<div className="main-section">
						<TopBanner />
						<MiddleSection />
						<TopicsSection />
					</div>
				)}
			</Fragment>
		);
	}
}

export default MainSection;
