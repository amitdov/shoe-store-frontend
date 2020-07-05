import { VALIDATE_QUERY_STATUS } from '../actions';

const validateQueryStatus = (state = {}, action) => {
	switch (action.type) {
		case VALIDATE_QUERY_STATUS:
			return action.payload;
		default:
			return state;
	}
};

export default validateQueryStatus;
