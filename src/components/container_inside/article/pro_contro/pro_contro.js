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
            <Pro />
            <ConsumptionMiners />
            <ConsumptionMinersIndustrial />
            <ConsumptionMinersAppliances />
            <Emission />
            <Raee />
        </div>
    )
}

export default ProContro    