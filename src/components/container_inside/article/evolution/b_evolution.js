import React from "react"
import * as d3 from 'd3'

class Evolution extends React.Component {
    state = {
        data: null
    };
    
    componentDidMount() {
        this.callAPI()
        //this.draw()
        //this.drawBubble()
    };

    callAPI() {
        fetch("http://localhost:3030/marketCap")
            .then(res => res.json())
            .then((d) => {
                this.setState({
                    data: d.map(crypto => ({                        
                        Name: crypto.Name,
                        AvgCAP: crypto.AvgCAP,
                        Year: crypto.Year,                       
                    }))
                });
                console.log(this.state.data);
            })
    };

    draw() {
        let dataBTC = this.state.data;

        const svg = d3.select("svg"),
            margin = {top: 50, right: 20, bottom: 50, left: 50},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        const x = d3.scaleLinear()
            .rangeRound([0,width]);

        const y = d3.scaleLinear()
            .rangeRound([height, 0]);

        const make_x_grid_lines = () => {
                return d3.axisBottom(x)
                .ticks(10)
              }
                   
        const make_y_gridlines = () => {
               return d3.axisLeft(y)
               .ticks(10)
              }
              
        const lineCount = d3.line()
                    .x(function(d) { return x(d.Year); })
                    .y(function(d) { return y(d.AvgCAP); });
              
        //x.domain(d3.extent(dataBTC, function(d) {return d.Year; }));
        //y.domain(d3.extent(dataBTC, function(d) { return d.AvgCAP; }));
              
        // add the X gridlines
        g.append("g")
         .attr("class", `grid`)
         .attr("transform", "translate(0," + height + ")")
         .call(make_x_grid_lines()
            .tickSize(-height)
            .tickFormat(""))
        // add the Y gridlines
        g.append("g")
         .attr("class", `grid`)
         .call(make_y_gridlines()
            .tickSize(-width)
            .tickFormat(""))
        //plot the x axis
        g.append("g")
         .attr("class", `axis axis--x`)
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(x));
        //plot the y axis     
        g.append("g")
         .attr("class", 'axis axis--y')
         .call(d3.axisLeft(y))
        //plot the y axis legend
         .append("text")
         .attr("fill", "#000")
         .attr("transform", "rotate(-90)")
         .attr("y", 6)
         .attr("dy", "0.71em")
         .style("text-anchor", "end")
         .style('font-size','12')
         .text("AVGCap");
        // plot the line legend with color   
        g.append('g')
         .attr('class', 'legend')
         .append('text')
         .attr('y',-10)
         .attr('x',width-100)
         .text('BTC');
        g.append('g')
         .append('rect')
         .attr('y',-23)
         .attr('x',width-55)
         .attr('width',18)
         .attr('height',18)
         .attr('fill','steelblue');
        //plot the x axis legend
        svg.append("text")
         .attr("transform","translate(" + (width/2) + " ," + (height + margin.top + 40) + ")")
         .style("text-anchor", "middle")
         .text("Years");
        // Plot the Line
        g.append("path")
//         .datum(dataBTC)
//         .selection.classed(Nome, "Bitcoin")
         .attr("class", `lineUsers`)
        .attr("d", lineCount)
    }

    drawBubble() {

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
                    <div id="BTCm_Graph">
                        <svg />
                    </div>
                </article>
			</section>
        )};
}

export default Evolution