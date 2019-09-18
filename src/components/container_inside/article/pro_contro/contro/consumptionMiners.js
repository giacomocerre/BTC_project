import React from "react"
import * as d3 from "d3"
import * as d3ScaleChromatic from 'd3-scale-chromatic'

class ConsumptionMiners extends React.Component {
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
        fetch("http://localhost:3030/btcConsumption")
            .then(res => res.json())
            .then((d) => {
                this.setState(state => ({
                    ...state,
                    data : {
                        ...state.data,
                    data: d.map(btc => ({
                        date: btc.date,
                        Min_Energy: btc.Minimum_AnnualEnergy_GWh,
                        Est_Energy: btc.Estimated_AnnualEnergy_GWh,
                    }))
                }
            }))
        })
    }

    draw(data){
        console.log(data)
        // set the dimensions and margins of the graph
        var margin = {top: 10, right: 100, bottom: 30, left: 60},
        width = 1000 - margin.left - margin.right,
        height = 450 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        var svg = d3.select("#ComMinersGraph")
                    .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform",
                                "translate(" + margin.left + "," + margin.top + ")");
    
        var allGroup = ["Min_Energy", "Est_Energy"]

        // Reformat the data: we need an array of arrays of {x, y} tuples
        var dataReady = allGroup.map( function(grpName) { // .map allows to do something for each element of the list
        return {
            name: grpName,
            values: data.map(function(d) {
                return {date: d.date, value: +d[grpName]};
            })
            };
        });
        // I strongly advise to have a look to dataReady with
        // console.log(dataReady)
        // console.log(dataReady.values.date)
  
        // A color scale: one color for each group
        var myColor = d3.scaleOrdinal()
            .domain(allGroup)
            .range(d3ScaleChromatic.schemeSet2);
  
        // Add X axis --> it is a date format
        var x = d3.scaleTime()
                .domain(d3.extent(data, function(d) { return new Date(d.date) }))
                .range([ 0, width  ]);
            svg.append("g")
                .attr("transform", 
                        "translate(0," + height + ")")
                .call(d3.axisBottom(x));
  
      // Add Y axis
      var y = d3.scaleLinear()
      .domain([100, d3.max(data, function(d) { return d.Est_Energy })])
        .range([ height, 0 ]);
      svg.append("g")
        .call(d3.axisLeft(y));
  
      // Add the lines
      var line = d3.line()
        .x(function(d) { return x(new Date(d.date)) })
        .y(function(d) { return y(d.value) })
      svg.selectAll("myLines")
        .data(dataReady)
        .enter()
        .append("path")
          .attr("d", function(d){ return line(d.values) } )
          .attr("stroke", function(d){ return myColor(d.name) })
          .style("stroke-width", 4)
          .style("fill", "none")


          
          svg
          .selectAll("myLabels")
          .data(dataReady)
          .enter()
          .append('g')
          .append("text")
          .attr('x', 30)
          .attr('y', function(d,i){ return 30 + i*20})
          .text(function(d) { return d.name; })
              .style("fill", function(d){ return myColor(d.name) })
              .style("font-size", 15)
    
    }

    render(){
        return(
            <div className="miner_consumption contro_cont">
                
                <h2 className="article_title">Consumi Elettrici Rete BTC</h2>
                <h3 className="sub_article_title">Intro</h3>
                <p>La necessità di risolvere un problema estremamente complesso da un punto di vista computazionale garantisce alla rete bitcoin una relativa sicurezza di fondo, si è visto infatti prima che per poter prendere il controllo della rete è necessario avere il controllo di più del 50% della potenza di calcolo globale della rete, ma il prezzo da pagare per questa forma di sicurezza è un elevato dispendio energetico. Per aumentare le possibilità di vincere un blocco ogni macchina presente nella rete utilizza infatti tutte le risorse energetiche a sua disposizione per generare più numeri casuali possibili al secondo. Ma quante macchine ci sono nella rete? E quanto consumano nello specifico? Non è possibile ottenere delle risposte precise a queste domande, non tutto l’hardware legato alla rete bitcoin è tracciabile (ad esempio, non è possibile avere delle stime sui consumi energetici dei sistemi di raffreddamento delle macchine nella rete), ma è possibile avere delle stime al ribasso abbastanza precise che ci danno un’idea di quanto siano i consumi minimi della rete.  </p>
                <div id="ComMinersGraph"></div>
                <h3 className="sub_article_title">Numero minimo di Miner</h3>
                <p >È possibile definire con certezza un numero minimo di miner nella rete, e con esso anche il consumo complessivo da essi generato. Assumendo infatti che ogni miner nella rete sia un miner razionale, ovverosia un miner che mini in maniera legittima e con profitto, e che ogni miner utilizzi la propria macchina per più tempo possibile, è possibile vedere per ogni intervallo di tempo quale è la macchina che produce in quel momento il maggior numero di terahash possibili; se si divide poi I terahash complessivi della rete per I terahash della macchina più performante si ottiene il numero di miner, che andrà poi moltiplicato per il consumo della macchina. Questo calcolo ci dà una stima minima dei consumi sotto la quale non si può andare, ma è verosimile pensare che, per varie ragioni non tutti I miner nella rete utilizzino sempre la macchina più performante sul mercato (né che tutti I miner siano miner razionali). 
                È quindi proposta una stima che tiene conto anche dei costi di gestione e di altri fattori come affidabilità e profitto generato dalle macchine. I dati per questa stima, forniti da digiconomist, non prendono in considerazione i consumi dei sistemi di raffreddamento ma, tenendo conto dei guadagni generati dal mining, dalle stime sui costi della corrente, e da un indice che ipotizza che ogni miner spenda almeno il 60% dei propri guadagni in operazioni di manutenzione e gestione, ci danno un’idea più precisa di quali possano essere I veri consumi dell’intera rete bitcoin. 
                </p>
            </div>
        )}
}

export default ConsumptionMiners