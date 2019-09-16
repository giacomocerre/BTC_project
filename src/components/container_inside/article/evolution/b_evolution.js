import React from "react"
import * as d3 from 'd3'

class Evolution extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    
    componentDidMount() {
        this.callAPI()
    };

    componentDidUpdate() {
    //    this.draw(this.state.data.data)
    }

    callAPI() {
        fetch("http://localhost:3030/marketCap")
            .then(res => res.json())
            .then((d) => {
                this.setState(state => ({
                    ...state,
                    data : {
                        ...state.data,
                    data: d.map(crypto => ({                        
                        Name: crypto.Name,
                        AvgCAP: crypto.AvgCAP,
                        Year: crypto.Year,                       
                    }))
                }
            }))
        })
    };

    draw(data) {
        console.log(data)
        var width = window.innerWidth, height = window.innerHeight, sizeDivisor = 100, nodePadding = 2.5;

        var svg = d3.select("#BTCGraph")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        var color = d3.scaleOrdinal(["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"]);

        var simulation = d3.forceSimulation()
            .force("forceX", d3.forceX().strength(.1).x(width * .5))
            .force("forceY", d3.forceY().strength(.1).y(height * .5))
            .force("center", d3.forceCenter().x(width * .5).y(height * .5))
            .force("charge", d3.forceManyBody().strength(-15));

        //update the simulation based on the data
        simulation
          .nodes(data)
          .force("collide", d3.forceCollide().strength(.5).radius(function(d){ return d.radius + nodePadding; }).iterations(1))
          .on("tick", function(d){
            node
                .attr("cx", function(d){ return d.x; })
                .attr("cy", function(d){ return d.y; })
          });

      var node = svg.append("g")
          .attr("class", "node")
        .selectAll("circle")
        .data(data)
        .enter().append("circle")
          .attr("r", function(d) { return d.radius; })
          .attr("fill", function(d) { return color(d.Name); })
          .attr("cx", function(d){ return d.x; })
          .attr("cy", function(d){ return d.y; })
          .call(d3.drag()
              .on("start", dragstarted)
              .on("drag", dragged)
              .on("end", dragended));    

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(.03).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(.03);
      d.fx = null;
      d.fy = null;
    }

    function types(d){
      d.gdp = +d.gdp;
      d.size = +d.gdp / sizeDivisor;
      d.size < 3 ? d.radius = 3 : d.radius = d.size;
      return d;
    }}    
    
    render() {
        return( 
        <section id="evolution" className="content_info">
                <article id="BTC_market" className="article">
                    <div className="article_width">
                        <h3 id="BTCm_main_title" className="article_title">BTC Market Cap Evolution</h3>
                        <p id="par_BTCm" className="par">Etiam pretium odio sed dapibus volutpat. Proin erat justo, maximus sit amet egestas et,
                            condimentum ac quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                            ac turpis egestas. Ut efficitur quam at tincidunt porta. Curabitur lorem orci, gravida a porta
                            a, consequat vitae justo. Nunc id egestas nunc, nec fringilla libero. Phasellus egestas dui
                            vitae egestas ornare. Ut nibh urna, lacinia non urna eget, condimentum fringilla purus. Nulla
                            nec fermentum sapien.
                            Etiam pretium odio sed dapibus volutpat. Proin erat justo, maximus sit amet egestas et,
                            condimentum ac quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                            ac turpis egestas. Ut efficitur quam at tincidunt porta. Curabitur lorem orci, gravida a porta
                            a, consequat vitae justo. Nunc id egestas nunc, nec fringilla libero. Phasellus egestas dui
                            vitae egestas ornare. Ut nibh urna, lacinia non urna eget, condimentum fringilla purus. Nulla
                            nec fermentum sapien.</p>
                    </div>
                    <div id="BTCGraph"></div>
                </article>
			</section>
        )};
}

export default Evolution