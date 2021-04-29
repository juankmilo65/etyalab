import { useEffect, useState } from 'react'
import { getUsers } from './reducer/action'
import { useDispatch, useSelector } from "react-redux";
import { IUserList, ITable } from '../../interfaces/index';
import { Table } from '../core'

export default function useUser() {
    const users = useSelector((state: IUserList) => state.users.list);
    const [tableContent, setTableContent] = useState<ITable>()
    const dispatch = useDispatch();

    useEffect(() => {
        if (users.length === 0) {
            dispatch(getUsers());
        }
    })

    useEffect(() => {
        if (users.length > 0) {
            setTableContent({
                headers: Object.keys(users[0]),
                content: users
            })
        }
    }, [users])

    return (
        <div>
            <Table information={tableContent}></Table>
        </div>
    )
}
