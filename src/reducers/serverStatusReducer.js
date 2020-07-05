import { SERVER_STATUS } from '../actions';

const serverStatusReducer = (state = {}, action) => {
	switch (action.type) {
		case SERVER_STATUS:
			return action.payload;
		default:
			return state;
	}
};

export default serverStatusReducer;
