import React from "react"
import * as d3 from "d3"
import * as d3ScaleChromatic from 'd3-scale-chromatic'

class ConsumptionMinersAppliances extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    
    componentDidMount() {
        this.callAPI()
    }

    componentDidUpdate() {
        this.draw(this.state.data.data)
    }

    callAPI() {
        fetch("http://localhost:3030/elAppliances")
            .then(res => res.json())
            .then((d) => {
                this.setState(state => ({
                    ...state,
                    data : {
                        ...state.data,
                    data: d.map(hw => ({
                        Name: hw.Name,
                        Type: hw.Type,
                        Price: hw.Price,
                        AnnualEnergy: hw.AnnualEnergy_KWh,
                        HashRate: hw.HashRate_THs,
                        Value: hw.Value,
                        ReleaseDate: hw.ReleaseDate,
                    }))
                }
            }))
        })
    }

    draw(data) {
        console.log(data)

        var allGroup = d3.map(data, function(d){return(d.Type)}).keys();
        console.log(allGroup)

        var dataReady = allGroup.map( function(grpName) { 
            return {
                name: grpName,
                values: data.filter(({Type}) => Type === grpName).map(function(d) {
                    return { value: d.AnnualEnergy};
                    })
              };
            });
        console.log(dataReady)                
    }
    
    render(){
        return(
            <div className="miner_appl">
                <h3 className="article_title">Miner VS Casa</h3>
                <p>Ma quanto consuma una singola macchina per il mining nel dettaglio? Storicamente le prime macchine dedicate al mining erano dei semplici pc, si utilizzava infatti la potenza di calcolo offerta dai normali processori o dalle schede video dei PC di casa, di conseguenza il consumo dei primi miner era assimilabile a quello di un pc che lavorava a pieno carico per qualche ora. A partire dal 2013, però, con l’aumentare della complessità delle operazioni e del valore della moneta, si è iniziato a utilizzare hardware più specifico che utilizzasse nella maniera più efficiente possibile tutte le risorse a disposizione della macchina. Più efficienza però non vuol dire necessariamente consumi minori, anzi. Nel grafico proposto sotto si è deciso di mostrare la differenza di consumi tra un miner, un semplice computer che genera numeri casuali 24/7, e dei normali elettrodomestici presenti in ogni casa.</p>
            <div id="ApplGraph"></div>
            </div>
        )}
}

export default ConsumptionMinersAppliances