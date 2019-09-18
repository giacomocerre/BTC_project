import React from "react"

function Decentralization(){
    return(
        <div id="decentralization">
            <div id="dec_text" class="cen_dec">
                <h2 className="article_title">L’importanza della decentralizzazione</h2>
                <h3 className="sub_article_title">Una moneta libera</h3>
                <p class="par">Blockchain, come si può leggere all’inizio del whitepaper di Bitcoin di Nakamoto, nasce con un obiettivo ben preciso: un sistema per inviare denaro online tra utenti senza la presenza di un garante finanziario esterno. Se per lo scambio di moneta legale online è necessaria la presenza di un ente finanziario, di un circuito bancario ad esempio, che verifichi la validità delle transazioni, lo stesso non si può dire per una cryptovaluta legata ad una blockchain. In questo caso, come abbiamo visto in precedenza, il consenso è distribuito, ed è la rete stessa a fungere da garante per le transazioni al suo interno, operando come un sistema trustless in cui tutti si fidano di tutti e nessuno si fida di nessuno. 
                Ma quali sono I vantaggi di avere una moneta decentralizzata?
                Le cryptovalute che si appoggiano a blockchain non sono controllate da governi o banche centrali. Il loro valore non può essere modificato arbitrariamente da un singolo ente al di sopra del sistema, come ad esempio uno stato che può svalutare la moneta stampandola in quantità esagerate e aumentando così l’inflazione in maniera artificiale, ma è autoregolato dal mercato interno. Le cryptovalute inoltre, non essendo sotto il controllo diretto di nessuno al di fuori dell’utente che le possiede, non possono essere confiscate. Quando ci si appoggia a blockchain non esiste un’unica banca, l’utente può essere la propria banca.
                Il fatto che non ci sia un ente terzo a controllare le transazioni implica inoltre che non ci sia un rischio di censura sulle transazioni stesse. Le cryptovalute legate a blockchain sono permission-less, non richiedono alcun permesso da parte di enti esterni per essere spese al di fuori del consenso della rete, dal momento che i conti degli utenti sono in chiaro nello storico della blockchain l’unico vincolo per la validità di una transazione è che l’utente che invia il denaro possegga effettivamente la cifra che vuole spendere. In un sistema così non esiste censura, e ognuno è libero di inviare denaro in qualsiasi parte del mondo, a chiunque voglia. 
                Il fatto che tutte le operazioni siano in chiaro rende le frodi quasi impossibili, il consenso è distribuito e l’unico modo per eludere il controllo della rete è avere più potere decisionale della rete stessa. La decentralizzazione della rete rende inoltre le transazioni più efficienti, si paga una quota ridotta ai miner per inserire la transazione in un blocco ma è di gran lunga minore rispetto alle tasse imposte dai circuiti bancari, e più rapide, le transazioni infatti vengono convalidate nel giro di pochi minuti, non giorni o ore.
                I vantaggi di una moneta basata su blockchain sono insomma molti, e sono proprio I vantaggi concessi da questa tecnologia a dare un valore alle monete che la usano. Blockchain però non è un semplice apparato logistico a sostegno di una valuta, è un meccanismo per la gestione di un consenso distribuito che può avere altre applicazioni al di fuori di un contesto finanziario o monetario.
                </p>
            </div>
            <div id="icon_dec" class="cen_dec">
                <img id="cen_icon" class="icon_cen_dec" src="./img/cen.svg" alt="centralized"/>
                <img id="dec_icon" class="icon_cen_dec" src="./img/dec.svg" alt="decentralized"/>
            </div>
        </div>
    )
}

export default Decentralization