import { IAction } from "../../../interfaces/index";

const initialState = {
    list: []
}

const userReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case "SET_STATUS": {
            return {
                ...state,
                status: action.payload
            };
        }
        case "GET_USERS_SUCCESS":
            return {
                ...state,
                list: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;