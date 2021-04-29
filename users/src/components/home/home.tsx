import Users from '../user/useUser'
import Textbox from '../core'

export default function home(): JSX.Element {
    return (
        <div>
            Home
            <Textbox></Textbox>
            <Users></Users>
        </div>
    )
}
