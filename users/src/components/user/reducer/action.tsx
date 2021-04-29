import { IUserList } from "../../../interfaces/IUserList";

export const SET_STATUS = "SET_STATUS";
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";


export function setStatus(status: string) {
    return {
        type: SET_STATUS,
        payload: status
    }
}

export function getUsers() {
    return {
        type: GET_USERS
    }
}

export function getUsersSuccess(items: IUserList) {
    return {
        type: GET_USERS_SUCCESS,
        payload: items
    }
}