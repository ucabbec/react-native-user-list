import {JSON_RECEIVED} from '../actions/types';

//Middleware used to intercept data from api and update them with a number
//to ensure no duplicates of ID or email get created
const updateInformation = (store) => (next) => (action) => {
	var indexUpdate = store.getState().users.usersImported;
	action.payload.data.map((user)=>{
		user.id +=indexUpdate;
		user.email = user.email.split("@");
		user.email[0] = user.email[0] + user.id + '@' ;
		user.email = user.email.join("");
	})
  // Our middleware
  next(action);
}

export default updateInformation;