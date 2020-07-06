import { ADVANCED_MODE } from '../actions';

const advancedMode = (state = {}, action) => {
	switch (action.type) {
		case ADVANCED_MODE:
			return action.payload;
		default:
			return state;
	}
};

export default advancedMode;
