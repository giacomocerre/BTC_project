import React from "react"
import * as d3 from "d3"

class Raee extends React.Component {
    state = {
        data: null
    }
    
    componentDidMount() {
        this.callAPI()
        this.draw()
    }

    callAPI() {
        fetch("http://localhost:3030/raee")
            .then(res => res.json())
            .then((d) => {
                this.setState({
                    data: d.map(raee => ({
                        date: raee.date,
                        ElectronicWaste: raee.ElectronicWaste_kt,                      
                    }))
                });
                console.log(this.state.data);
            })
    }

    draw() {
        // set the dimensions and margins of the graph
        var margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        var svg = d3.select("#raeeGraph")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");

// Add X axis --> it is a date format
var x = d3.scaleTime()
  .domain(d3.extent(this.state.data, function(d) { return d.date; }))
  .range([ 0, width ]);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, d3.max(this.state.data, function(d) { return +d.ElectronicWaste; })])
  .range([ height, 0 ]);
svg.append("g")
  .call(d3.axisLeft(y));

// Add the line
svg.append("path")
  .datum(this.state.data)
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 1.5)
  .attr("d", d3.line()
    .x(function(d) { return x(d.date) })
    .y(function(d) { return y(d.ElectronicWaste) })
    )

}
    
    
    render(){
        return(
            <div className="try_Text">
                <h2>Smaltimento</h2>
                <h3>Bitcoin RAEE</h3>
                <p>I problemi legati alla complessità dei calcoli necessaria per la validazione tramite proof-of-work non riguardano solo gli alti consumi energetici e la produzione di CO2 che da essi deriva, ma anche lo smaltimento dell’hardware usato per poter effettuare questi calcoli. 
                Per minare bitcoin nella maniera più efficiente possibile si utilizza un tipo di hardware estremamente specializzato, creato appositamente per risolvere problemi crittografici ben precisi, identificato con l’acronimo ASIC (application specific integrated circuit). Per quanto in passato fosse possibile minare con hardware utilizzabile anche per altri scopi, come CPU o GPU, o comunque hardware riconvertibile per minare anche altre criptovalute una volta diventato meno performante (FPGA), il drastico aumento della difficoltà dei blocchi, e di conseguenza l’aumento della richiesta di terahash necessari per vincere un blocco, ha spinto i produttori di hardware a creare delle macchine specializzate in un unico task, dette ASIC, che utilizzano tutte le risorse a loro disposizione solo ed esclusivamente per generare più terahash possibili in un task ben specifico. A differenza delle FPGA, gli ASIC non possono essere riconvertiti per minare criptovalute che utilizzino sistemi di crittografia differenti da quello per cui sono state creati. 
                Il continuo aumento della difficoltà per minare I blocchi, e quindi la richiesta di corrente necessaria per eseguire calcoli sempre più complessi, intacca l’efficienza di macchine che non possono essere usate per nessun altro scopo e che, in media dopo un anno e mezzo circa tenendo conto della legge di Koomey, diventano obsolete, smettono di generare profitto, e devono essere sostituite da nuove ASIC. Una volta che viene sostituita un’asic diventa un RAEE.
                Il grafico presentato mostra una stima delle kilotonnellate di rifiuti elettronici generati dalla sola rete bitcoin. I dati, così come riportati da digiconomist, sono ottenuti facendo una stima lower bound che tiene conto della durata media dell’hardware, del numero di hardware per il mining nella rete, e del peso del suddetto hardware. Così come è possibile ottenere una stima minima di miners presenti nella rete, è possibile anche ottenere il peso minimo dell’hardware utilizzato. I risultati mostrati tengono conto del fatto che l’hardware, vista la legge di Koomey sopra citata, abbia una durata vitale di un anno e mezzo. La stima non tiene conto dell’hardware più pesante e dei sistemi di raffreddamento, ma ci dà un’idea di quanta sia la produzione minima di RAEE dell’intera rete Bitcoin.
                </p>
                <div id="RaeeGraph"></div>
            </div>
        )}
}

export default Raee