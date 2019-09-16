import React from "react"

class Emission extends React.Component {
    state = {
        data: null
    }
    
    componentDidMount() {
        this.callAPI()
    }

    callAPI() {
        fetch("http://localhost:3030/CO2Emission")
            .then(res => res.json())
            .then((d) => {
                this.setState({
                    data: d.map(em => ({
                        Country: em.Country,
                        Year: em.Year,
                        AnnualCO2Emission: em.Annual_CO2_emissions_ktGWh,                       
                    }))
                });
                console.log(this.state.data[0].Year);
            })
    }
    
    render(){
        return(
            <div className="try_Text">
                <h2>Inquinamento</h2>
                <h3>Bitcoin Inquinamento CO2</h3>
                <p>Un altro problema legato agli alti consumi derivati dalla proof-of-work sono le risorse utilizzate per soddisfare queste richieste energetiche. Considerando che la maggior parte della rete di miner è localizzata in asia, è lecito pensare che buona parte dell’energia elettrica utilizzata da questi miner venga prodotta attraverso l’utilizzo di carbone e altri combustibili fossili. Non essendo però possibile localizzare con esatta precisione la posizione dei miner nella rete, né sapere con esattezza quale tipo di energia stiano utilizzando, la metodologia adottata prevede un approccio che non tiene conto della geolocalizzazione dei miner. Si è deciso così di presentare una stima rapportando i consumi della rete bitcoin visti nella sezione precedente, minimi e stimati, con l’emissione media mondiale di kilotonnellate di CO2 per gigawattora di corrente. I dati per la conversione sono presi dall’IEA World Energy Outlook del 2017, e ci mostrano come in media, a livello mondiale, si producano 0.554Kg di CO2 per kWh.È interessante notare anche il confronto a livello mondiale tra le emissioni di CO2 della rete BTC e quelle delle produzioni industriali dei vari paesi. </p>
           </div>
        )}
}

export default Emission