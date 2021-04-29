import React, { useEffect } from 'react'
import { getUsers } from './reducer/action'
import { useDispatch, useSelector } from "react-redux";
import { IUserList } from '../../interfaces/IUserList';

export default function useUser() {
    const users = useSelector((state: IUserList) => state.users.list);
    const dispatch = useDispatch();

    useEffect(() => {
        if (users.length === 0) {
            dispatch(getUsers());
        }
    })

    return (
        <div>
            {
                users &&
                users.map(user =>
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                    </div>)
            }
        </div>
    )
}
