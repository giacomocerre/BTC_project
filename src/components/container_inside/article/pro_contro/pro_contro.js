import React from "react"
import ConsumptionMiners from "./contro/consumptionMiners"
import ConsumptionMinersIndustrial from "./contro/consumptionMinersIndustrial"
import ConsumptionMinersAppliances from "./contro/consumptionMinersAppliances"
import Emission from "./contro/Emission"
import Raee from "./contro/Raee"
import Decentralization from "./pro/decentralization"
import BeyondTheCoin from "./pro/beyond_the_coin"

function ProContro() {
    return(
        <div>
            <article id="pro_task" className="article">
                <Decentralization/>
                <BeyondTheCoin/>
            </article>
            <article id="contro_task" className="article">
                <div id="division_pro_contro" style={{display:"none"}}>
                    <hr class="pc_division line"/>
                    <p>Contro</p>
                    <hr class="pc_division line"/>
                </div>
                <ConsumptionMiners />
                <ConsumptionMinersIndustrial />
                <ConsumptionMinersAppliances />
                <Emission />
                <Raee />
                <p id="showPro" onClick={ShowPro}>Vedi anche i pro</p>
                <article id="pro_task_form_contro" className="article" style={{display:"none"}}>
                    <div id="division_contro_pro" style={{display:"none"}}>
                        <hr class="pc_division line"/>
                        <p>Pro</p>
                        <hr class="pc_division line"/>
                    </div>
                    <Decentralization/>
                    <BeyondTheCoin/>
                </article>
            </article>
        </div>
    )
}

function ShowPro(){
    document.getElementById("pro_task_form_contro").style.display = "block";
}

export default ProContro    