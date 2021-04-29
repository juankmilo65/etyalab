import { getUsersSuccess, setStatus, GET_USERS } from './action';
import { switchMap, map } from "rxjs/operators";
import { ActionsObservable, ofType } from "redux-observable";
import { concat, of, from } from "rxjs";
import { api } from '../../../config/axios'

export default function controlDataUsersEpic(actions$: ActionsObservable<any>) {
    return actions$.pipe(
        ofType(
            GET_USERS
        ),
        switchMap((action): any => {
            if (action.type === GET_USERS) {
                return concat(
                    of(setStatus("pending")),
                    from(api.get("")).pipe(
                        map((response: any) => {
                            return getUsersSuccess(response.data);
                        })
                    )
                )
            }
        })
    )
}
