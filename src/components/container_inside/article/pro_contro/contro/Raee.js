import React from "react"

class Raee extends React.Component {
    render(){
        return(
            <div className="try_Text">
                <h2>Smaltimento</h2>
                <h3>Bitcoin RAEE</h3>
                <p>I problemi legati alla complessità dei calcoli necessaria per la validazione tramite proof-of-work non riguardano solo gli alti consumi energetici e la produzione di CO2 che da essi deriva, ma anche lo smaltimento dell’hardware usato per poter effettuare questi calcoli. 
                Per minare bitcoin nella maniera più efficiente possibile si utilizza un tipo di hardware estremamente specializzato, creato appositamente per risolvere problemi crittografici ben precisi, identificato con l’acronimo ASIC (application specific integrated circuit). Per quanto in passato fosse possibile minare con hardware utilizzabile anche per altri scopi, come CPU o GPU, o comunque hardware riconvertibile per minare anche altre criptovalute una volta diventato meno performante (FPGA), il drastico aumento della difficoltà dei blocchi, e di conseguenza l’aumento della richiesta di terahash necessari per vincere un blocco, ha spinto i produttori di hardware a creare delle macchine specializzate in un unico task, dette ASIC, che utilizzano tutte le risorse a loro disposizione solo ed esclusivamente per generare più terahash possibili in un task ben specifico. A differenza delle FPGA, gli ASIC non possono essere riconvertiti per minare criptovalute che utilizzino sistemi di crittografia differenti da quello per cui sono state creati. 
                Il continuo aumento della difficoltà per minare I blocchi, e quindi la richiesta di corrente necessaria per eseguire calcoli sempre più complessi, intacca l’efficienza di macchine che non possono essere usate per nessun altro scopo e che, in media dopo un anno e mezzo circa tenendo conto della legge di Koomey, diventano obsolete, smettono di generare profitto, e devono essere sostituite da nuove ASIC. Una volta che viene sostituita un’asic diventa un RAEE.
                Il grafico presentato mostra una stima delle kilotonnellate di rifiuti elettronici generati dalla sola rete bitcoin. I dati, così come riportati da digiconomist, sono ottenuti facendo una stima lower bound che tiene conto della durata media dell’hardware, del numero di hardware per il mining nella rete, e del peso del suddetto hardware. Così come è possibile ottenere una stima minima di miners presenti nella rete, è possibile anche ottenere il peso minimo dell’hardware utilizzato. I risultati mostrati tengono conto del fatto che l’hardware, vista la legge di Koomey sopra citata, abbia una durata vitale di un anno e mezzo. La stima non tiene conto dell’hardware più pesante e dei sistemi di raffreddamento, ma ci dà un’idea di quanta sia la produzione minima di RAEE dell’intera rete Bitcoin.
                </p>
            </div>
        )}
}

export default Raee