import { ADVENCED_MODE } from '../actions';

const advencedMode = (state = {}, action) => {
	switch (action.type) {
		case ADVENCED_MODE:
			return action.payload;
		default:
			return state;
	}
};

export default advencedMode;
