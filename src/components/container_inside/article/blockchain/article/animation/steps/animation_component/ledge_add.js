import React from "react"

function SendAdd(props){
    return(
        <div id="add_content">
            <h3 class="table_title">New Transiction</h3>
            <table id={props.id}>
                <tr>
                    <th class="col">Sender</th>
                    <th class="col">Receiver</th>
                    <th class="col">Amount</th>
                    <th class="col">Sender Signature</th>
                    <th class="col">Receiver Signature</th>
                </tr>
                <tr>
                    <td class="light_col">Red</td>
                    <td class="light_col">Blue</td>
                    <td class="light_col">321</td>
                    <td class="light_col signature" >Red</td>
                    <td class="light_col signature">Blue</td>
                </tr>
            </table>
        </div>
    )
}

export default SendAdd