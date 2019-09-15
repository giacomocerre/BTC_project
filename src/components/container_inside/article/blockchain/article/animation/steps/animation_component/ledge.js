import React from "react"

function Ledge(props){
    return(
        <div id={props.id} className="content_ledge">
            <h3 className="table_title">Main Ledge</h3>
            <div id="border_trik_l" className="border_trick"></div>
            <div id="border_trik_r" className="border_trick"></div>
            <table id={props.id}>
                <tbody>
                    <tr>
                        <th className="col">Sender</th>
                        <th className="col">Receiver</th>
                        <th className="col">Amount</th>
                        <th className="col">Sender Signature</th>
                        <th className="col">Receiver Signature</th>
                    </tr>
                    <tr>
                        <td className="light_col">Anna</td>
                        <td className="light_col">Mario</td>
                        <td className="light_col">10</td>
                        <td className="light_col signature" >Anna</td>
                        <td className="light_col signature">Mario</td>

                    </tr>
                    <tr>
                        <td className="dark_col">Luca</td>
                        <td className="dark_col">Andrea</td>
                        <td className="dark_col">10</td>
                        <td className="dark_col signature" >Luca</td>
                        <td className="dark_col signature">Andrea</td>
                    </tr>
                    <tr>
                        <td className="light_col">Andrew</td>
                        <td className="light_col">Mariah</td>
                        <td className="light_col">10</td>
                        <td className="light_col signature" >Andrew</td>
                        <td className="light_col signature">Mariah</td>
                    </tr>
                    <tr>
                        <td className="dark_col">John</td>
                        <td className="dark_col">Susy</td>
                        <td className="dark_col">10</td>
                        <td className="dark_col signature" >John</td>
                        <td className="dark_col signature">Susy</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Ledge