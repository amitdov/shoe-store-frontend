import axios from 'axios';

const server = () => {
	return axios.create({
		baseURL: process.env.REACT_APP_BACK_URL,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json'
		}
	});
};

export default server;
