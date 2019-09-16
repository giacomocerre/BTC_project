import React from "react"

class ConsumptionMinersIndustrial extends React.Component {
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
        fetch("http://localhost:3030/industrialConsuption")
            .then(res => res.json())
            .then((d) => {
                this.setState(state => ({
                    ...state,
                    data : {
                        ...state.data,
                    data: d.map(com => ({
                        Country: com.Country,
                        AnnualEnergy: com.AnnualEnergy_GWh,
                        Year: com.Year,
                    }))
                }
            }))
        })
    }

    draw(data) {
        console.log(data)
    }
    
    render(){
        return(
            <div className="try_Text">
                <h3>Miner VS Industria</h3>
                <p>Per mettere a fuoco l’entità dei consumi della rete, è interessante confrontarla con quella delle produzioni industriali dei vari paesi del mondo. I risultati che la rete bitcoin consuma più della rete industriale [del paese X], ma, considerando che I consumi sono destinati a crescere, secondo le stime di Alex De Vries, fondatore di digiconomist, di almeno un altro 60%, è ipotizzabile che per il 2020 arrivi ai livelli del [paese Y].</p>
            <div id="MinComGraph"></div>
            </div>
        )}
}

export default ConsumptionMinersIndustrial