import { JSON_RECEIVED, ERROR_GENERATED } from '../actions/types'

const initialState = {
	users: [],
	selectedPlace: null,
	usersImported: 0,
	error:null
}

const reducer = (state = initialState ,action) => {
	switch(action.type){
		case JSON_RECEIVED:
			let updatedUsers = state.users.slice();
			action.payload.data.map((user)=>{
				updatedUsers.push(user);
			})
			return{
				...state,
				users: updatedUsers,
				usersImported: state.usersImported + 10
			}
		case ERROR_GENERATED:
			return {
				...state,
				error: action.error
			}
		default:
			return state;
	}
}

export default reducer