import React from "react"

class ConsumptionMinersAppliances extends React.Component {
    state = {
        data: null
    }
    
    componentDidMount() {
        this.callAPI()
    }

    callAPI() {
        fetch("http://localhost:3030/elAppliances")
            .then(res => res.json())
            .then((d) => {
                this.setState({
                    data: d.map(hw => ({
                        Name: hw.Name,
                        Type: hw.Type,
                        Price: hw.Price,
                        AnnualEnergy: hw.AnnualEnergy,
                        HashRate: hw.HashRate,
                        Value: hw.Value,
                        ReleaseDate: hw.ReleaseDate,
                    }))
                });
                console.log(this.state.data[0].Type);
            })
    }
    
    render(){
        return(
            <div className="try_Text">
                <h3>Miner VS Casa</h3>
                <p>Ma quanto consuma una singola macchina per il mining nel dettaglio? Storicamente le prime macchine dedicate al mining erano dei semplici pc, si utilizzava infatti la potenza di calcolo offerta dai normali processori o dalle schede video dei PC di casa, di conseguenza il consumo dei primi miner era assimilabile a quello di un pc che lavorava a pieno carico per qualche ora. A partire dal 2013, però, con l’aumentare della complessità delle operazioni e del valore della moneta, si è iniziato a utilizzare hardware più specifico che utilizzasse nella maniera più efficiente possibile tutte le risorse a disposizione della macchina. Più efficienza però non vuol dire necessariamente consumi minori, anzi. Nel grafico proposto sotto si è deciso di mostrare la differenza di consumi tra un miner, un semplice computer che genera numeri casuali 24/7, e dei normali elettrodomestici presenti in ogni casa.</p>
             </div>
        )}
}

export default ConsumptionMinersAppliances