import React from "react"

function Ledge(){
    return(
    <div id="ledge_container">
        <h3 id="ledger_main">Ledger</h3>
        <table id="registry">
            <tr>
                <th class="col">Name</th>
                <th class="col">Amount (BTC)</th>
            </tr>
            <tr>
                <td class="light_col">Anna</td>
                <td class="light_col">10</td>
            </tr>
            <tr>
                <td class="dark_col">Mario</td>
                <td class="dark_col">100</td>
            </tr>
            <tr>
                <td class="light_col">Alice</td>
                <td class="light_col">200</td>
            </tr>
            <tr>
                <td class="dark_col">Luca</td>
                <td class="dark_col">150</td>
            </tr>
        </table>
    </div>
    )
}
export default Ledge