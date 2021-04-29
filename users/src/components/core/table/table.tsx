import { ITable } from "../../../interfaces";
import './table.css'

const Table = (props: { information: ITable | undefined; }) => {

    const { information } = props;

    return (
        <>
            <table className="table" >
                <thead>
                    <tr>

                        {
                            information &&
                            information.headers.map((header: any, index: any) => {
                                return <th key={index}>{header}</th>
                            })
                        }

                    </tr>
                </thead>
                <tbody>
                    {
                        information &&
                        information.content.map((content: any, index: any) => {
                            return <>
                                <tr><td key={index}>{content.id}</td>
                                    <td key={index}>{content.name}</td>
                                    <td key={index}>{content.username}</td>
                                    <td key={index}>{content.email}</td>
                                    <td key={index}>{content.address.street}  {content.address.suite} {content.address.city} {content.address.zipcode}</td>
                                    <td key={index}>{content.phone}</td>
                                    <td key={index}>{content.website} </td>
                                    <td key={index}>{content.company.name}  {content.company.catchPhrase} {content.company.bs}</td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table