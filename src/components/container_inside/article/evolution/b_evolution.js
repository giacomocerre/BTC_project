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
        this.draw(this.state.data.data)
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
                        AvgCAP: crypto.AvgCAP,
                        Year: crypto.Year,                       
                    }))
                }
            }))
        })
    };

    draw(data) {
        console.log(data)
}
    
    drawBar(data) {
        console.log(data)
        var allCrypto = ["Bitcoin", "Ethereum", "XRP", "Litecoin", "Monero"]

        var dataReady = allCrypto.map( function(ssName) { // .map allows to do something for each element of the list
            return {
                name: ssName,
                values: data.filter(({Name}) => Name === ssName).map(function(d) {
                    return {Year: d.Year, value: d.AvgCAP};
                    })
            };
        });
        // I strongly advise to have a look to dataReady with
        console.log(dataReady)
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
                    <select id="selectButton"></select>
                    <div id="CryptoGraph"></div>
                </article>
			</section>
        )};
}

export default Evolution