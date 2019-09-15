import React from "react"

function SendAdd(props){
    return(
        <div id="add_content">
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
                        <td className="light_col" style={{textAlign:"center"}}>A</td>
                        <td className="light_col" style={{textAlign:"center"}}>B</td>
                        <td className="light_col" style={{textAlign:"center"}}>321</td>
                        <td className="light_col signature" style={{textAlign:"center"}}>A</td>
                        <td className="light_col signature" style={{textAlign:"center"}}>B</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SendAdd