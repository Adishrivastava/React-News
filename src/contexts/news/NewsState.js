import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import NewsContext from './NewsContext';
import NewsReducer from './NewsReducer';

const NewsState = (props) => {
	const initialState = {
		topNews: [],
		loading: false,
		searchBool: false,
		searchbarBool: false,
		searchednews: [],
		search: 'Home',
		filters: ['top-headlines', 'coronavirus latest'],
		filterednews: [],
		filterBool: false,
		curfilter: 'cricket',

		topicNews: {
			politics: [],
			entertainment: [],
			sports: [],
		},
	};

	const [state, dispatch] = useReducer(NewsReducer, initialState);
	// const apikey = '336eb1d8a2f3497cad22065ec6757e79';
	const apikey = '4d3d843e6a0d459aa45f97c313306c2b';

	// setting top news
	const setTopnews = async () => {
		const res = await axios.get(
			`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`
		);
		dispatch({
			type: 'top-news',
			payload: res.data.articles,
		});
	};

	// ? _______________ filter section functions ______________

	// setting filtered state
	const setFilteredNews = async (type) => {
		const res1 = await axios.get(
			`https://newsapi.org/v2/top-headlines?country=de&apiKey=${apikey}`
		);
		dispatch({
			type: 'filteredNews',
			payload: { data: res1.data.articles, type: 'top-headlines' },
		});
		const res2 = await axios.get(
			`https://newsapi.org/v2/top-headlines?q=coronavirus&apiKey=${apikey}`
		);
		dispatch({
			type: 'filteredNews',
			payload: { data: res2.data.articles, type: 'coronavirus' },
		});
		changeFilterBool();
	};

	const changeFilterBool = () => dispatch({ type: 'changefilter' });

	// ? __________________ topic news functions ___________

	// getting data from topic
	const getTopicNews = async (topic) => {
		setloading();
		const res = await axios.get(
			`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apikey}`
		);
		dispatch({
			type: 'topicnews',
			payload: { topic: topic, data: res.data.articles },
		});
	};

	// setting loading to true
	const setloading = () => dispatch({ type: 'setloading' });

	// ? ____________ search section functions _____________

	// getting the searched news
	const getSearchedNews = async (topic, type, bool) => {
		let res;
		if (type === 'keyword') {
			res = await axios.get(
				`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apikey}`
			);
		} else {
			res = await axios.get(
				`https://newsapi.org/v2/top-headlines?sources=${topic}&apiKey=${apikey}`
			);
		}
		dispatch({
			type: 'searchednews',
			payload: res.data.articles,
		});
		changeSearchBool(!bool);
		changeSearchbarBool(bool);
	};

	// setting seach state
	const setSearch = (search) => {
		dispatch({ type: 'search', payload: search });
	};

	//  changing the search bool variable
	const changeSearchBool = (b) => {
		dispatch({ type: 'changeSearch', payload: b });
	};

	//  changing the search bool variable
	const changeSearchbarBool = (b) => {
		dispatch({ type: 'changeSearchbar', payload: b });
	};

	// useeffect on starting
	useEffect(() => {
		setTopnews();
		setFilteredNews('coronavirus');
		// getSources();
	}, []);

	return (
		<NewsContext.Provider
			value={{
				topnews: state.topNews,
				getTopicNews,
				apikey,
				setSearch,
				changeSearchBool,
				changeSearchbarBool,
				searchbarBool: state.searchbarBool,
				searchednews: state.searchednews,
				searchBool: state.searchBool,
				search: state.search,
				getSearchedNews,
				filterednews: state.filterednews,
				filteres: state.filters,
				curfilter: state.curfilter,
				setFilteredNews,
				// setFilter,
				filterBool: state.filterBool,
				topicnews: state.topicNews,
			}}
		>
			{props.children}
		</NewsContext.Provider>
	);
};

export default NewsState;
