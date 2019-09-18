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
    //    this.draw1(this.state.data.data)
    this.drawBar(this.state.data.data)
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
                        AvgCAP: crypto.AvgCAP/1000000,
                        Year: crypto.Year,                       
                    }))
                }
            }))
        })
    };

    draw(data) {
        console.log(data)

        var margin = {top: 10, right: 100, bottom: 30, left: 30},
        width = 1000 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom,
        sizeDivisor = 100, nodePadding = 2.5;

        // append the svg object to the body of the page
        var svg = d3.select("#BubbleGraph")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                            "translate(" + margin.left + "," + margin.top + ")");

        data = types(data)                       
            var simulation = d3.forceSimulation()
                           .force("forceX", d3.forceX().strength(.1).x(width * .5))
                           .force("forceY", d3.forceY().strength(.1).y(height * .5))
                           .force("center", d3.forceCenter().x(width * .5).y(height * .5))
                           .force("charge", d3.forceManyBody().strength());
                           var color = d3.scaleOrdinal(["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"]);
      
        var dataTil = data.filter((({Year}) => Year === 2019)) 
         // sort the nodes so that the bigger ones are at the back
        var datas = dataTil.sort(function(a,b){ return b.size - a.size; });
 // Three function that change the tooltip when user hover / move / leave a cell
 var Tooltip = d3.select("#BubbleGraph")
 .append("div")
 .style("opacity", 0)
 .attr("class", "tooltip")
 .style("background-color", "white")
 .style("border", "solid")
 .style("border-width", "2px")
 .style("border-radius", "5px")
 .style("padding", "5px")
 
 var mouseover = function(d) {
    Tooltip
      .style("opacity", 1)
  }
  var mousemove = function(d) {
    Tooltip
      .html('<u>' + d.Name + '</u>' + "<br>" + d.AvgCAP + "milioni di dollari")
      .style("left", (d3.mouse(this)[0]+20) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
  }
  var mouseleave = function(d) {
    Tooltip
      .style("opacity", 0)
  }


      //update the simulation based on the data
      simulation
          .nodes(datas)
          .force("collide", d3.forceCollide().strength(.5).radius(function(d){ return d.AvgCAP/400 + nodePadding; }).iterations(1))
          .on("tick", function(d){
            node
                .attr("cx", function(d){ return d.x; })
                .attr("cy", function(d){ return d.y; })
          });

      var node = svg.append("g")
          .attr("class", "node")
        .selectAll("circle")
        .data(datas)
        .enter().append("circle")
          .attr("r", function(d) { return d.AvgCAP/400; })
          .attr("fill", function(d) { return color(d.Name); })
          .attr("cx", function(d){ return d.x; })
          .attr("cy", function(d){ return d.y; })
          .on("mouseover", mouseover) // What to do when hovered
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
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
      d.AvgCAP = +d.AvgCAP;
      d.size = +d.AvgCAP / sizeDivisor;
      d.size < 3 ? d.radius = 3 : d.radius = d.size;
      return d;
    }                  
}
    
drawBar(data) {
    console.log(data)
    var dataFil = data.filter(({Year}) => Year === 2017 || Year === 2016 || Year === 2018 ||  Year === 2019)
    
    console.log(dataFil)
    var allCrypto = ["Ethereum", "Monero", "Bitcoin", "Litecoin", "XRP"]

    var dataReady = allCrypto.map( function(ssName) { // .map allows to do something for each element of the list
        return {
            name: ssName,
            values: dataFil.filter(({Name}) => Name === ssName).map(function(d) {
                return {Year: d.Year, value: d.AvgCAP};
                })
        };
    });
    console.log(dataReady)

    var margin = {top: 10, right: 100, bottom: 30, left: 60},
    width = 1000 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#CryptoGraph")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                        "translate(" + margin.left + "," + margin.top + ")");
    
    var myColor = d3.scaleOrdinal()
            .domain(allCrypto)
            .range(d3.schemeSet2);
    
    // Add X axis --> it is a date format
    var x = d3.scaleTime()
                .domain([2016, 2019])
                .range([ 0, width - 100 ]);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));       

    var y = d3.scaleLinear()
                .domain([0,d3.max(data, function(d) { return d.AvgCAP; })])
                .range([ height, 0 ]);
            svg.append("g")
                .call(d3.axisLeft(y));
    
    // Add the lines
    var line = d3.line()
        .x(function(d) { return x(new Date(d.Year)) })
        .y(function(d) { return y(d.value) })
    svg.selectAll("myLines")
        .data(dataReady)
        .enter()
        .append("path")
        .attr("class", function(d){ return d.name })
        .attr("d", function(d){ return line(d.values) } )
        .attr("stroke", function(d){ return myColor(d.name) })
        .style("stroke-width", 4)
        .style("fill", "none")
    
        // Add a legend (interactive)
svg
.selectAll("myLegend")
.data(dataReady)
.enter()
  .append('g')
  .append("text")
    .attr('x', function(d,i){ return 30 + i*70})
    .attr('y', 40)
    .text(function(d) { return d.name; })
    .style("fill", function(d){ return myColor(d.name) })
    .style("font-size", 15)
  .on("click", function(d){
    // is the element currently visible ?
    var currentOpacity = d3.selectAll("." + d.name).style("opacity")
    // Change the opacity: from 0 to 1 or from 1 to 0
    d3.selectAll("." + d.name).transition().style("opacity", currentOpacity == 1 ? 0:1)

  })}

    draw1(data) {
        var dataFil = data.filter((({Year}) => Year === 2017 || Year === 2016 || Year === 2018 || Year === 2019))
        
        var dataFilBtc = dataFil.filter((({Name}) => Name === "Bitcoin"))
        var dataFilEth = dataFil.filter((({Name}) => Name === "Ethereum"))
        var dataFilMon = dataFil.filter((({Name}) => Name === "Monero"))
        var dataFilXrp = dataFil.filter((({Name}) => Name === "Xrp"))
        var dataFilLtC = dataFil.filter((({Name}) => Name === "Litecoin"))

        console.log(dataFilBtc[0].Year)

        var margin = {top: 10, right: 30, bottom: 30, left: 50},
                width = 1000 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        var svg = d3.select("#CryptoGraph")
                    .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform",
                        "translate(" + margin.left + "," + margin.top + ")");
        
        // Initialise a X axis:
        var x = d3.scaleTime().
                range([0,width]);
        var xAxis = d3.axisBottom()
                    .scale(x);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .attr("class","myXaxis")

        // Initialize an Y axis
        var y = d3.scaleLinear()
            .range([height, 0]);
        var yAxis = d3.axisLeft().scale(y);
            svg.append("g")
                .attr("class","myYaxis")

        function update(datas) {
            console.log(datas)
        // Create the X axis:
        x.domain([2016,2019 ]);
                svg.selectAll(".myXaxis").transition()
                    .duration(3000)
                    .call(xAxis);
  
        // create the Y axis
        y.domain([0, d3.max(datas, function(d) { return +d.AvgCAP}) ]);
            svg.selectAll(".myYaxis")
                .transition()
                .duration(3000)
                .call(yAxis);
  
        // Create a update selection: bind to the new data
        var u = svg.selectAll(".lineTest")
            .data([datas], function(d){ return new Date(d.Year) });
  
        // Updata the line
        u
            .enter()
            .append("path")
            .attr("class","lineTest")
            .merge(u)
            .transition()
            .duration(3000)
            .attr("d", d3.line()
                .x(function(d) { return x(new Date(d.Year)) })
                .y(function(d) { return y(+d.AvgCAP); }))
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 2.5)
        }
        
        update(dataFilBtc)
    }


    
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
                    <div id="BubbleGraph"></div>
                    <div id="CryptoGraph"></div>
                </article>
			</section>
        )};
}

export default Evolution