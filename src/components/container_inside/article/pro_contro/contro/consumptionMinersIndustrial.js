import React from "react"
import * as d3 from "d3"

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
        var margin = {top: 10, right: 30, bottom: 90, left: 40},
            width = 1000 - margin.left - margin.right,
            height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#MinComGraph")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

          var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.filter(function(d) { return d.AnnualEnergy > 50000 })
  .filter(function(d) { return d.AnnualEnergy < 80000 }).map(function(d) { return d.Country; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 80000])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("mybar")
  .data(data)
  .enter().filter(function(d) { return d.AnnualEnergy > 50000 })
  .filter(function(d) { return d.AnnualEnergy < 80000 })
  .append("rect")
    .attr("x", function(d) { return x(d.Country); })
    .attr("width", x.bandwidth())
    .attr("fill", "#69b3a2")
    // no bar at the beginning thus:
    .attr("height", function(d) { return height - y(0); }) // always equal to 0
    .attr("y", function(d) { return y(0); })

// Animation
svg.selectAll("rect")
  .transition()
  .duration(800)
  .attr("y", function(d) { return y(d.AnnualEnergy); })
  .attr("height", function(d) { return height - y(d.AnnualEnergy); })
  .delay(function(d,i){return(i*10)})

    }
    
    render(){
        return(
            <div className="miner_industrial contro_cont">
                <h3 className="sub_article_title">Miner VS Industria</h3>
                <p>Per mettere a fuoco l’entità dei consumi della rete, è interessante confrontarla con quella delle produzioni industriali dei vari paesi del mondo. I risultati che la rete bitcoin consuma più della rete industriale [del paese X], ma, considerando che I consumi sono destinati a crescere, secondo le stime di Alex De Vries, fondatore di digiconomist, di almeno un altro 60%, è ipotizzabile che per il 2020 arrivi ai livelli del [paese Y].</p>
            <div id="MinComGraph"></div>
            </div>
        )}
}

export default ConsumptionMinersIndustrial