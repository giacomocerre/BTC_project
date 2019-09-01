import React from "react"

function SendAdd(props){
    return(
        <div id="add_content">
            <table id={props.id}>
                <tr>
                    <th class="col">Sender</th>
                    <th class="col">Receiver</th>
                    <th class="col">Amount</th>
                    <th class="col">Sender Signature</th>
                    <th class="col">Receiver Signature</th>
                </tr>
                <tr>
                    <td class="light_col" style={{textAlign:"center"}}>A</td>
                    <td class="light_col" style={{textAlign:"center"}}>B</td>
                    <td class="light_col" style={{textAlign:"center"}}>321</td>
                    <td class="light_col signature" style={{textAlign:"center"}}>A</td>
                    <td class="light_col signature" style={{textAlign:"center"}}>B</td>
                </tr>
            </table>
        </div>
    )
}

export default SendAdd