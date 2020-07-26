export default (state, action) => {
	switch (action.type) {
		case 'getSources':
			return {
				...state,
				sources: action.payload,
			};
		case 'top-news':
			return {
				...state,
				topNews: action.payload,
				loading: false,
			};
		case 'filteredNews':
			return {
				...state,
				filterednews: {
					...state.filterednews,
					[action.payload.type]: action.payload.data,
				},
			};
		case 'changefilter':
			return {
				...state,
				filterBool: !state.filterBool,
			};
		case 'setfiltered':
			console.log(action.payload);
			return {
				...state,
				curfilter: action.payload,
			};
		case 'topicnews':
			return {
				...state,
				topicNews: {
					...state.topicNews,
					[action.payload.topic]: action.payload.data,
				},
				loading: false,
			};
		case 'setloading':
			return {
				...state,
				loading: true,
			};
		case 'changeSearch':
			return {
				...state,
				searchBool: action.payload,
			};
		case 'changeSearchbar':
			return {
				...state,
				searchbarBool: action.payload,
			};
		case 'search':
			return {
				...state,
				search: action.payload,
			};
		case 'searchednews':
			return {
				...state,
				searchednews: action.payload,
			};
		default:
			return state;
	}
};
