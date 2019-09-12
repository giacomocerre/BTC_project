import React from "react"
import Fade from 'react-reveal/Fade';

function Cryptostory(props){
    return(
        <article id="cryptostory" class={props.class} style={{justifyContent:props.justify}}>
            <h1 class="article_title">Come sono nate le cryptovalute?</h1>
            <p class="title_explain"> Per rispodere dobbiamo andare ad analizzare punto per punto, gli avvenimenti principali, che spiegano come la cosa sia stata creata e, nel tempo, diramata.</p>
            <div id="cryptostory_content">
                <div id="timeline">
                    <div id="timeline_par">
                        <div id="par1" class="par">
                            <Fade left>
                                <div><img id="sato" class="point_icon" src="img/timeline/satoshi.svg" alt="satoshi nagamoto"/></div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div class="time_episode">
                                        <h5>Satoshi Nakatomo</h5>
                                        <p>La <b>nascità delle cryptovalute</b> vede come suo creatore una delle personalità più misteriose mai esistite, meglio conosciuto con l'alias di <b>Satoshi Nakatomo</b>, la quale identità tutt’oggi è ancora avvolta nel mistero.</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div id="par2" class="par">
                            <Fade left>
                                <div><img id="whitep" class="point_icon" src="img/timeline/white_p.svg" alt="white paper"/></div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div class="time_episode">
                                        <h5>White Paper</h5>
                                        <p><b>Nel 2008</b> Satoshi Nakatomo pubblica il <b>wihite paper di Bitcoin</b>, all’interno del quale vengono definite le specifiche per una moneta digitale decentralizzata, che permette di <b>inviare pagamenti tra utenti senza passare da un’amministrazione centralizzata</b>. Questa moneta si chiama <b>Bitcoin</b> e si appoggia ad una rete P2P chiamata <b>Blockchain</b>.</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div id="par3" class="par">
                            <Fade left>
                                <div><img id="pizzas" class="point_icon" src="img/timeline/pizze.svg" alt="pizzas"/></div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div class="time_episode">
                                        <h5>Le Pizze</h5>
                                        <p>Dal momento della sua <b>implementazione (2009)</b>, fino al <b>primo acquisto effettuato tramite Bitcoin (2010)</b>, che vede coinvolte <b>due pizze</b> al prezzo di <b>10.000BTC</b>, la moneta aveva solo un tasso di scambio interno.</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div id="par4" class="par">
                            <Fade left>
                            <div><img id="mtgox" class="point_icon" src="img/timeline/mtgox.svg" alt="mtgox"/></div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div class="time_episode">
                                        <h5>Mt.gox</h5>
                                        <p>Da quell’anno, iniziano a nascere le prime <b>piattaforme di scambio con moneta legale</b>, tra cui <b>MTGox</b>, la piattaforma più rilevante dei primi anni.</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div id="par5" class="par">
                            <Fade left>
                                <div><img id="grow_up" class="point_icon" src="img/timeline/up.svg" alt="grow up"/></div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div class="time_episode">
                                        <h5>Il primo Boom</h5>
                                        <p>Il valore di BTC continua ad avere una <b>crescita lineare fino al 2013</b>.</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div id="par6" class="par">
                            <Fade left>
                                <div><img id="down_cr" class="point_icon" src="img/timeline/down.svg" alt="down"/></div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div class="time_episode">
                                        <h5>Il crollo</h5>
                                        <p><b>Nel 2014</b> a causa dello <b>scandalo di MTGox</b>, ma non solo, la <b>crescita si arresta</b> e il valore crolla vertiginosamente.</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div id="par7" class="par">
                            <Fade left>
                                <div><img id="grow_up_2" class="point_icon" src="img/timeline/up.svg" alt="grow up"/></div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div class="time_episode">
                                        <h5>La risalita</h5>
                                        <p>Nonostante lo scandalo, dopo pochissimo tempo, la moneta <b>ricomincia a salire</b>, fino ad arrivare al suo <b>picco nel 2018</b>.</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div id="par8" class="par">
                            <Fade left>
                                <div><img id="eth" class="point_icon" src="img/timeline/eth.svg" alt="ethereum"/></div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div class="time_episode">
                                        <h5>Ethereum & co.</h5>
                                        <p>Dato l’enorme successo di Bitcoin si vedono affiorare, nel tempo, un numero elevatissimo di <b>differenti cryptovalute</b>. Tra tutte, solo alcune spiccano veramente il volo, una tra tutte è <b>Ethereum</b>, che riesce a nascere grazie ad un autofinanziamento basato appunto su Bitcoin nel 2013.</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </article>)
}

export default Cryptostory