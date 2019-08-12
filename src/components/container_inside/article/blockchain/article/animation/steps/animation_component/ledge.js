import React from "react"

function Ledge(){
    return(
    <div id="ledge_container">
        <h3 id="ledger_main">Ledger</h3>
        <table id="registry">
            <tr>
                <th class="col">Sender</th>
                <th class="col">Recipient</th>
                <th class="col">Amount</th>
                <th class="col">Sender Signature</th>
                <th class="col">Recipient Signature</th>
            </tr>
            <tr>
                <td class="light_col">Anna</td>
                <td class="light_col">Mario</td>
                <td class="light_col">10</td>
                <td class="light_col signature" >Anna</td>
                <td class="light_col signature">Mario</td>

            </tr>
            <tr>
                <td class="dark_col">Luca</td>
                <td class="dark_col">Andrea</td>
                <td class="dark_col">10</td>
                <td class="dark_col signature" >Luca</td>
                <td class="dark_col signature">Andrea</td>
            </tr>
            <tr>
                <td class="light_col">Andrew</td>
                <td class="light_col">Mariah</td>
                <td class="light_col">10</td>
                <td class="light_col signature" >Andrew</td>
                <td class="light_col signature">Mariah</td>
            </tr>
            <tr>
                <td class="dark_col">John</td>
                <td class="dark_col">Susy</td>
                <td class="dark_col">10</td>
                <td class="dark_col signature" >John</td>
                <td class="dark_col signature">Susy</td>
            </tr>
        </table>
    </div>
    )
}
export default Ledge