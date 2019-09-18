import React from "react"
import * as d3 from "d3"

class Emission extends React.Component {
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
        fetch("http://localhost:3030/CO2Emission")
            .then(res => res.json())
            .then((d) => {
                this.setState(state => ({
                    ...state,
                    data : {
                        ...state.data,
                    data: d.map(em => ({
                        Country: em.Country,
                        Year: em.Year,
                        AnnualCO2Emission: em.Annual_CO2_emissions_ktGWh,                       
                    }))
                }
            }))
        })
    }

    draw(data) {
        console.log(data)


        var margin = {top: 10, right: 30, bottom: 90, left: 40},
        width = 1000 - margin.left - margin.right,
        height = 450 - margin.top - margin.bottom;
    
    // append the svg object to the body of the page
    var svg = d3.select("#EmissionGraph")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");
    
              var x = d3.scaleBand()
      .range([ 0, width ])
      .domain(data.filter(function(d) { return d.AnnualCO2Emission > 40000 })
      .filter(function(d) { return d.AnnualCO2Emission < 60000 }).map(function(d) { return d.Country; }))
      .padding(0.2);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");
    
    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, 60000])
      .range([ height, 0]);
    svg.append("g")
      .call(d3.axisLeft(y));
    
    // Bars
    svg.selectAll("mybar")
      .data(data)
      .enter().filter(function(d) { return d.AnnualCO2Emission > 40000 })
                .filter(function(d) { return d.AnnualCO2Emission < 60000 })
      .append("rect")
        .attr("x", function(d) { return x(d.Country); })
        .attr("width", x.bandwidth())
        .attr("fill", "#69b3a2")
        .style("fill", function(d) { if(d.Country === "Bitcoin_est" || d.Country === "Bitcoin_min") {
          return "red"
        }})
        // no bar at the beginning thus:
        .attr("height", function(d) { return height - y(0); }) // always equal to 0
        .attr("y", function(d) { return y(0); })
    
    // Animation
    svg.selectAll("rect")
      .transition()
      .duration(800)
      .attr("y", function(d) { return y(d.AnnualCO2Emission); })
      .attr("height", function(d) { return height - y(d.AnnualCO2Emission); })
      .delay(function(d,i){ return(i*5)})
    
    }
    
    render(){
        return(
            <div className="emission contro_cont">
                <h2 className="article_title">Inquinamento</h2>
                <h3 className="sub_article_title">Bitcoin Inquinamento CO2</h3>
                <p>Un altro problema legato agli alti consumi derivati dalla proof-of-work sono le risorse utilizzate per soddisfare queste richieste energetiche. Considerando che la maggior parte della rete di miner è localizzata in asia, è lecito pensare che buona parte dell’energia elettrica utilizzata da questi miner venga prodotta attraverso l’utilizzo di carbone e altri combustibili fossili. Non essendo però possibile localizzare con esatta precisione la posizione dei miner nella rete, né sapere con esattezza quale tipo di energia stiano utilizzando, la metodologia adottata prevede un approccio che non tiene conto della geolocalizzazione dei miner. Si è deciso così di presentare una stima rapportando i consumi della rete bitcoin visti nella sezione precedente, minimi e stimati, con l’emissione media mondiale di kilotonnellate di CO2 per gigawattora di corrente. I dati per la conversione sono presi dall’IEA World Energy Outlook del 2017, e ci mostrano come in media, a livello mondiale, si producano 0.554Kg di CO2 per kWh.È interessante notare anche il confronto a livello mondiale tra le emissioni di CO2 della rete BTC e quelle delle produzioni industriali dei vari paesi. </p>
           <div id="EmissionGraph"></div>
           </div>
        )}
}

export default Emission