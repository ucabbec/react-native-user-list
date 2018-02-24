import axios from 'axios';

import { 
	JSON_RECEIVED,
	ERROR_GENERATED
} from './types';

//Action creator used to fetch data from server
export const fetchUsers = () => {
	return async (dispatch) => {
		function onSuccess(success) {
			dispatch({ type: JSON_RECEIVED, payload: success });
			return success;
		}
		function onError(error) {
			dispatch({ type: ERROR_GENERATED, error });
			return error;
		}
		try {
			const success = await axios.get('https://jsonplaceholder.typicode.com/users');
			return onSuccess(success);
		} catch (error) {
			return onError(error);
		}
	};

};