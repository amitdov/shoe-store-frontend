import { SEARCH_RESULTS } from '../actions';

const searchResults = (state = {}, action) => {
	switch (action.type) {
		case SEARCH_RESULTS:
			return action.payload;
		default:
			return state;
	}
};

export default searchResults;
