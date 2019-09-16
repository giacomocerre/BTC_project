import React from "react"
import AnimationStep from "./animation/animation_steps"
import Explain from "./animation/explain_step"

var step = 0; 
var myopacity = 1;
//ANIMATION
class Animation extends React.Component {
    constructor() {
        super();
        this.state = {
            step        : step,
            ledge       :{zoom:1, display:"flex"},
            map         :{zoom:0, x:0, y:0, rotate:0},
            point       :{base_color:"#333", m_color:"#333", r_color:"#333", show:"none"},
            sender      :{from_scale:0, to_scale:1},
            miner       :{display:"block"},
            explain     : "La Blockchain è un enorme registro di transazioni, un libro mastro dove vengono segnati i debiti e i crediti degli utenti che ne fanno parte.",
        };
    }
    //*********************************
    //************ AVANTI *************
    //*********************************
    StepForward = () => {
        //for notify the message step
        var NotifyImage =  document.getElementById("notify"); 
        var NotifyMex   = document.getElementById("content_explain_noti"); 
        NotifyImage.src = "img/notify.svg";
        NotifyMex.style.display = "none" 

        step = step + 1;
        //**** STEP 0 - AVANTI ****
        if(step <= 0 ){
            this.setState({step:step})
            
            step = 1;
        }
        //**** STEP 1 - AVANTI ****
        if(step === 1){
            this.setState({step:step})
            this.setState({explain: "Ogni nodo nel netework possiede una copia della blockchain. La copia è aggiornata all’ultimo blocco di transazione verificato."})
            this.setState({fade:"right"})
            // *** LEDGE ZOOM ***
            this.setState(state => ({
                ...state,
                ledge: {
                  ...state.ledge,
                  zoom: state.ledge.zoom - 1,
                  display: 'none'
                }
            }));
            //*** MAP APPEAR ***
            this.setState(state => ({
                ...state,
                map: {
                  ...state.map,
                  zoom: state.ledge.zoom + 1,
                }
            }));
        }
        //**** STEP 2 - AVANTI ****
        if(step === 2){
            //*** APPEAR NETWORK ***
            this.setState({step:step})
            this.setState({explain: "Ogni nodo che partecipa al network è collegato a tutti gli altri nodi che ne fanno parte."})
        }
        //**** STEP 3 - AVANTI ****
        if(step === 3){
            //*** MAP ZOOM ***
            this.setState({step:step})
            this.setState({explain: "Immaginiamo che A voglia inviare cryptovalute a B. A conti fatti la cryptovaluta è una stringa di bit, quindi, come si fa allora a garantire la veridicità e unicità della transazione dato che ci troviamo in un sistema non centralizzato?"})
            this.setState(state => ({
                ...state,
                map: {
                  ...state.map,
                  zoom: state.map.zoom + 5,
                  y: this.state.map.y + 850,
                  x : this.state.map.x + 500,
                }
            }));
            this.setState(state => ({
                ...state,
                point: {
                  ...state.point,
                  m_color: "#3E606F",
                  r_color: "#2F3840",
                  show:"block"
                }
            }));
        }
        //**** STEP 4 - AVANTI ****
        if(step === 4){
            this.setState({step:step})
            this.setState({explain: " Per prima cosa A deve creare una transazione univoca, firmata con la sua firma digitale e controfirmata da B."})
            this.setState(state => ({
                ...state,
                sender: {
                  ...state.sender,
                  from_scale: 0,
                  to_scale: 1,
                }
            }));
            
        }
        //**** STEP 5 - AVANTI ****
        if(step === 5){
            this.setState({step:step})
            this.setState({explain: "Una volta creata la transazione A non le invierà subito a B, ma inviera una copia di questa ai miners, la rete adibita alla validazione di questa operazione."})
            this.setState(state => ({
                ...state,
                sender: {
                  ...state.sender,
                  from_scale: 1,
                  to_scale: 0,
                }
            }));
            this.setState(state => ({
                ...state,
                map: {
                  ...state.map,
                  zoom: state.map.zoom - 5,
                  y: this.state.map.y - 850,
                  x : this.state.map.x - 500,
                }
            }));
            // miner
             this.setState(state => ({
                ...state,
                miner: {
                  ...state.miner,
                  display: "block"
                }
            }));
        }
        //**** STEP 6 - AVANTI ****
        if(step === 6){
            this.setState({step:step})
            this.setState({explain: "I miners, che sono in continuo ascolto di tutte le transazioni, intercettano quella di A e la appendono in fondo al loro bloccho. A questo punto ogni miner avvia il processo di validazione, che consiste nel generare continuamente delle stringhe alfanumeriche casuali. Ogni stringa, adesso, viene elaborata assieme al contenuto del blocco da una funzione detta SHA256. Se l’output della funzione presenta un numero di zero iniziali pari a quello contenuto nell'header del blocco, questo viene considerato valido. Per essere sicuri della sua validità la rete miners collabora per effettuare una contro validazione immediata. "})
            this.setState(state => ({
              ...state,
              sender: {
                ...state.sender,
                from_scale: 0,
                to_scale: 1,
              }
          }));  
            
        }
        //**** STEP 7 - AVANTI ****
        if(step === 7){
          this.setState({step:step})
          this.setState({explain: "Alla fine della controvalidazione il miner che ha validato per primo invia il blocco a tutti gli utenti delle rete."})
          this.setState(state => ({
            ...state,
            sender: {
              ...state.sender,
              from_scale: 1,
              to_scale: 0,
            }
          }));
        }
        //**** STEP 8 - AVANTI ****
        if(step === 8){
          this.setState({step:step})
          this.setState({explain: "Tutti gli utenti della rete, ricevuto il blocco, lo aggiungono alla fine della loro blockchain aggiornando il libro mastro."})
          this.setState(state => ({
            ...state,
            map: {
              ...state.map,
              zoom: state.map.zoom - 1,
            }
          }));
          
      }          
    }
    //***********************************
    // ************ INDIETRO ************
    //***********************************
    StepBack = () => {
        var NotifyImage =  document.getElementById("notify"); 
        var NotifyMex   = document.getElementById("content_explain_noti"); 
        NotifyImage.src = "img/notify.svg";
        NotifyMex.style.display = "none" 
        step = step - 1;

        if(step < 0 ){
            this.setState({step:step})
            step = -1
        }
        //**** STEP 0 - INDIETRO ****
        if(step === 0){
            this.setState({step:step})
            this.setState({explain: "La Blockchain è un enorme registro di transazioni, un libro mastro dove vengono segnati i debiti e i crediti degli utenti che ne fanno parte."})
            //*** LEDGE ZOOM ***
            this.setState(state => ({
                ...state,
                ledge: {
                  ...state.ledge,
                  zoom: state.ledge.zoom + 1,
                  display: 'flex'
                }
              }));
            //*** MAP APPEAR ***
            this.setState(state => ({
                ...state,
                map: {
                  ...state.map,
                  zoom: state.map.zoom - 1
                }
              }));
        }
        //**** STEP 1 - INDIETRO ****
        if(step === 1){
            //*** DISAPPEAR NETWORK ***
            this.setState({step:step})
            this.setState({explain: "Ogni nodo nel netework possiede una copia della blockchain, aggiornata all’ultimo blocco di transazione verificato"})
        }
        //**** STEP 2 - INDIETRO ****
        if(step === 2){
            this.setState({step:step})
            this.setState({explain: "Ogni nodo che partecipa al network è collegato a tutti gli altri nodi che ne fanno parte."})
             //*** MAP ZOOM ***
             this.setState(state => ({
                ...state,
                map: {
                  ...state.map,
                    zoom: this.state.map.zoom - 5,
                    y: this.state.map.y - 850,
                    x: this.state.map.x - 500
                }
              }));  
              this.setState(state => ({
                ...state,
                point: {
                  ...state.point,
                  m_color: "#333",
                  r_color: "#333",
                  show:"none"
                }
            }));
        }
        //**** STEP 3 - INDIETRO ****
        if(step === 3){
            this.setState({step:step})
            this.setState({explain: "Prendiamo adesso come esempio il caso in cui A volesse inviare denaro digitale a B,  il “denaro” è a conti fatti una stringa di bit, come si fa allora a far si che questa stringa non sia falsificabile ma unica, e non duplicabile?"})
            // sender info disappear
            this.setState(state => ({
                ...state,
                sender: {
                  ...state.sender,
                  from_scale: 1,
                  to_scale: 0,
                }
            }));
            
        }
        //**** STEP 4 - INDIETRO ****
        if(step === 4){
            this.setState({step:step})
            this.setState({explain: "Per prima cosa viene creata da A una transazione univoca firmata con la sua firma digitale e controfirmata da B."})
            // sender info appear
            this.setState(state => ({
                ...state,
                sender: {
                  ...state.sender,
                  from_scale: 0,
                  to_scale: 1,
                }
            }));
            // map zoom
            this.setState(state => ({
                ...state,
                map: {
                  ...state.map,
                  zoom: state.map.zoom + 5,
                  y: this.state.map.y + 850,
                  x : this.state.map.x + 500,
                }
            }));
            // miner
            this.setState(state => ({
                ...state,
                miner: {
                  ...state.miner,
                  display: "none"
                }
            }));
            
        }
        //**** STEP 5 - INDIETRO ****
        if(step === 5){
            this.setState({step:step})
            this.setState({explain: "Una volta creata la transazione A, non le invierà subito al destinatari B inviera una copia di questa a tutti I partecipanti di un altra rete detta rete miners."})
            this.setState(state => ({
              ...state,
              sender: {
                ...state.sender,
                from_scale: 1,
                to_scale: 0,
              }
          }));
        }  
        //**** STEP 6 - INDIETRO ****
        if(step === 6){
          this.setState({step:step})
          this.setState({explain: "I miner, che sono in ascolto di tutte le transazioni, mettono quella di A, in fondo al loro blocco di transazioni che stanno ascoltando e conteporaneamente cercano di verificare se la transazione del nostro esempio è valida o meno. La validazione avviene attraverso la genrazione di stringe alfanumeriche casuali, date in pasto ad una funzione sha256 insieme al contenuto del blocco stesso, se l’output della funzione presenta un numero di 0 iniziali pari a quello contenuto nell’header del blocco, il blocco viene considerate valido. Per essere totalmente valido si effettua una contro validazione immediata in collaborazione con con tutti gli alti miners "})
          this.setState(state => ({
            ...state,
            sender: {
              ...state.sender,
              from_scale: 0,
              to_scale: 1,
            }
          })); 
        }
        //**** STEP 7 - INDIETRO ****
        if(step === 7){
          this.setState({step:step})
          this.setState({explain: "Alla fine della controvalidazione il miner che ha validato per primo invia il blocco a tutti gli utenti delle rete."})
          this.setState(state => ({
            ...state,
            map: {
              ...state.map,
              zoom: state.map.zoom + 1,
            }
          }));
          this.setState(state => ({
            ...state,
            ledge: {
              ...state.ledge,
              zoom: state.ledge.zoom + 2,
            }
          }));
        
    }  
    }

    render() {
        return (
        <div>
            {/* <div className="try_Text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis luctus metus, a eleifend metus. Duis vitae aliquet lacus. Maecenas vel eros vel eros viverra sodales id et turpis. Praesent at purus rhoncus, fringilla lectus sit amet, interdum ex. In ultrices mauris aliquet, vestibulum ipsum ut, tempus est. Proin vel congue lacus, id vestibulum diam. Mauris maximus, erat a laoreet rhoncus, nibh dui iaculis nibh, eget cursus libero est nec tellus.</p>
              
            </div> */}
            <Explain explain = {this.state.explain} />
            <div id="overlay_start">
              <h2 id="title_overlay">The Blockchain</h2>
              <img id="play" src="img/play.svg" alt="play button" onClick={Disappear}/>
              <p id="iae">IAE - Interactive Animated Explanation</p>
            </div>
            <div id="content_animation">
                
                <div id="step back" className="command" onClick={this.StepBack}>
                  <img className="arrow" src="img/arrow_b.svg" alt="back"/>
                </div>
                <div id="animation">
                    <AnimationStep 
                        step    = {this.state.step}
                        ledge   = {this.state.ledge}
                        map     = {this.state.map}
                        point   = {this.state.point}
                        sender  = {this.state.sender}
                        miner   = {this.state.miner}
                      />
                </div>
                <div id="step forward" className="command" onClick={this.StepForward}>
                  <img className="arrow" src="img/arrow_f.svg" alt="forward"/>
                </div>
            </div>
        </div>
        )
    }
}   

function Disappear(){
  var play = document.getElementById("overlay_start");
      if (myopacity>0) {
        myopacity -= .075;
       setTimeout(function(){Disappear()},100);
     }else{
       play.style.display = "none";
     }
     play.style.opacity = myopacity;
  
}
export default Animation