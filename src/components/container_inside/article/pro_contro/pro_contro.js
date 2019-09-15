import React from "react"
import Pro from "./pro/pro"
import ConsumptionMiners from "./contro/consumptionMiners"
import ConsumptionMinersIndustrial from "./contro/consumptionMinersIndustrial"
import ConsumptionMinersAppliances from "./contro/consumptionMinersAppliances"
import Emission from "./contro/Emission"
import Raee from "./contro/Raee"

function ProContro() {
    return(
        <div>
            <article id="pro_task" className="article">
                <Pro />
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