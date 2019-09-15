import React from "react"

class ConsumptionMiners extends React.Component {
    state = {
        data: null
    }
    
    componentDidMount() {
        this.callAPI()
    }

    callAPI() {
        fetch("http://localhost:3030/marketCap")
            .then(res => res.json())
            .then((d) => {
                this.setState({
                    data: d.map(btc => ({
                        Name: btc.Name,
                        AvgCap: btc.AvgCap,
                        Year: btc.Year,
                    }))
                });
                console.log(this.state.data[0].Name);
            })
    }

    render(){
        return(
            <div className="try_Text">
                <h1>Contro - Pirite</h1>
                <h2>Consumi Elettrici Rete BTC</h2>
                <h3>Intro</h3>
                <p>La necessità di risolvere un problema estremamente complesso da un punto di vista computazionale garantisce alla rete bitcoin una relativa sicurezza di fondo, si è visto infatti prima che per poter prendere il controllo della rete è necessario avere il controllo di più del 50% della potenza di calcolo globale della rete, ma il prezzo da pagare per questa forma di sicurezza è un elevato dispendio energetico. Per aumentare le possibilità di vincere un blocco ogni macchina presente nella rete utilizza infatti tutte le risorse energetiche a sua disposizione per generare più numeri casuali possibili al secondo. Ma quante macchine ci sono nella rete? E quanto consumano nello specifico? Non è possibile ottenere delle risposte precise a queste domande, non tutto l’hardware legato alla rete bitcoin è tracciabile (ad esempio, non è possibile avere delle stime sui consumi energetici dei sistemi di raffreddamento delle macchine nella rete), ma è possibile avere delle stime al ribasso abbastanza precise che ci danno un’idea di quanto siano i consumi minimi della rete.  </p>
                <h3>Numero minimo di Miner</h3>
                <p>È possibile definire con certezza un numero minimo di miner nella rete, e con esso anche il consumo complessivo da essi generato. Assumendo infatti che ogni miner nella rete sia un miner razionale, ovverosia un miner che mini in maniera legittima e con profitto, e che ogni miner utilizzi la propria macchina per più tempo possibile, è possibile vedere per ogni intervallo di tempo quale è la macchina che produce in quel momento il maggior numero di terahash possibili; se si divide poi I terahash complessivi della rete per I terahash della macchina più performante si ottiene il numero di miner, che andrà poi moltiplicato per il consumo della macchina. Questo calcolo ci dà una stima minima dei consumi sotto la quale non si può andare, ma è verosimile pensare che, per varie ragioni non tutti I miner nella rete utilizzino sempre la macchina più performante sul mercato (né che tutti I miner siano miner razionali). 
                È quindi proposta una stima che tiene conto anche dei costi di gestione e di altri fattori come affidabilità e profitto generato dalle macchine. I dati per questa stima, forniti da digiconomist, non prendono in considerazione i consumi dei sistemi di raffreddamento ma, tenendo conto dei guadagni generati dal mining, dalle stime sui costi della corrente, e da un indice che ipotizza che ogni miner spenda almeno il 60% dei propri guadagni in operazioni di manutenzione e gestione, ci danno un’idea più precisa di quali possano essere I veri consumi dell’intera rete bitcoin. 
                </p>
            </div>
        )}
}

export default ConsumptionMiners