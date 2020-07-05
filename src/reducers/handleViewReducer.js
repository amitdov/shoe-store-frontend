import { HANDLE_VIEW_OPEN } from '../actions';

const handleViewReducer = (state = {}, action) => {
	switch (action.type) {
		case HANDLE_VIEW_OPEN:
			return action.payload;
		default:
			return state;
	}
};

export default handleViewReducer;
