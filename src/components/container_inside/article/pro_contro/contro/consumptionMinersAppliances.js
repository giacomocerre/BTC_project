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

        var allGroup = d3.map(data, function(d){
            if (d.Type !== "Rig") {
            return(d.Type)}}).keys();
        console.log(allGroup)

        var dataReady = allGroup.map( function(grpName) { 
            return {
                name: grpName,
                values: data.filter(({Type}) => Type === grpName).map(function(d) {
                    return { value: +d.AnnualEnergy};
                    })
              };
            });
        console.log(dataReady)
        const reducer = (accumulator, currentValue) => accumulator.value + currentValue.value;
        var AvgData = dataReady.map( function (d) {
            // console.log(d.values)
            var sum = 0;
            for(var i = 0; i < d.values.length; i++) {
                sum += d.values[i].value;
            }
            var avg = sum/d.values.length
            return {
                Name : d.name,
                avgEnergy : avg
            }
        })
        console.log(AvgData)


  
        // set the dimensions and margins of the graph
var width = 460
var height = 460

// append the svg object to the body of the page
var svg = d3.select("#ApplGraph")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
    

    var color = d3.scaleOrdinal()
    .domain([allGroup])
    .range(d3.schemeSet1);

    // Size scale for countries
  var size = d3.scaleLinear()
  .domain([0,d3.max(AvgData, d => d.avgEnergy)])
  .range([0,105])  // circle will be between 7 and 55 px wide

   // Initialize the circle: all located at the center of the svg area
   var node = svg.append("g")
   .selectAll("circle")
   .data(AvgData)
   .enter()
   .append("circle")
     .attr("class", "node")
     .attr("r", function(d){ return size(d.avgEnergy+400)})
     .attr("cx", width / 2)
     .attr("cy", height / 2)
     .style("fill", function(d){ return color(d.Name)})
     .style("fill-opacity", 0.8)
     .attr("stroke", "black")
     .style("stroke-width", 1)

     // Features of the forces applied to the nodes:
  var simulation = d3.forceSimulation()
  .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
  .force("charge", d3.forceManyBody().strength(.1)) // Nodes are attracted one each other of value is > 0
  .force("collide", d3.forceCollide().strength(.2).radius(function(d){ return (size(d.avgEnergy)+10) }).iterations(1)) // Force that avoids circle overlapping

// Apply these forces to the nodes and update their positions.
// Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
simulation
  .nodes(AvgData)
  .on("tick", function(d){
    node
        .attr("cx", function(d){ return d.x; })
        .attr("cy", function(d){ return d.y; })
  });


}
    
    render(){
        return(
            <div className="miner_appl contro_cont">
                <h3 className="sub_article_title">Miner VS Casa</h3>
                <p>Ma quanto consuma una singola macchina per il mining nel dettaglio? Storicamente le prime macchine dedicate al mining erano dei semplici pc, si utilizzava infatti la potenza di calcolo offerta dai normali processori o dalle schede video dei PC di casa, di conseguenza il consumo dei primi miner era assimilabile a quello di un pc che lavorava a pieno carico per qualche ora. A partire dal 2013, però, con l’aumentare della complessità delle operazioni e del valore della moneta, si è iniziato a utilizzare hardware più specifico che utilizzasse nella maniera più efficiente possibile tutte le risorse a disposizione della macchina. Più efficienza però non vuol dire necessariamente consumi minori, anzi. Nel grafico proposto sotto si è deciso di mostrare la differenza di consumi tra un miner, un semplice computer che genera numeri casuali 24/7, e dei normali elettrodomestici presenti in ogni casa.</p>
            <div id="ApplGraph"></div>
            </div>
        )}
}

export default ConsumptionMinersAppliances