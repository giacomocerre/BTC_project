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
                <ConsumptionMiners />
                <ConsumptionMinersIndustrial />
                <ConsumptionMinersAppliances />
                <Emission />
                <Raee />
            </article>
        </div>
    )
}

export default ProContro    