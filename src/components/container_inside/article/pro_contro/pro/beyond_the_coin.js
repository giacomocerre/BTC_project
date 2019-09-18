import React from "react"

function BeyondTheCoin(){
    return( 
        <div id="beyond_the_coin">
            <h2 className="article_title">Oltre la moneta</h2>
            <p>Blockchain è una tecnologia molto versatile che può essere adottata in qualsiasi contesto che richieda un apparato di controllo trasparente, immutabile e sicuro. Per queste ragioni, blockchain si presta  molto bene per il controllo distribuito di dati di vario genere: laddove servano dei dati di qualsiasi tipo blockchain, grazie al consenso distribuito, può essere usata per garantire l’integrità e la validità di quei dati. Gli scenari d’uso possibili sono potenzialmente infiniti, molti ancora inesplorati, ma già oggi sono moltissime le applicazioni blockchain di matrice non strettamente monetaria o finanziaria. </p>
            <div id="gov">
                <div className="by_text">
                    <h3 className="sub_article_title">Uso Governativo</h3>
                    <p>All’apparenza può sembrare un paradosso, una tecnologia che nasce per sottrarre una moneta al potere di banche e governi come può essere utilizzata a scopo governativo? In realtà ci sono molti casi in cui il sistema di consenso offerto da blockchain può rivelarsi estremamente utile per un governo: dal controllo delle votazioni, passando alla gestione dei dati pubblici, per non parlare della gestione di documenti e quant’altro. Questi sono tutti scenari d’uso che richiedono un sistema trasparente, sicuro, e che garantisca l’integrità dei dati trattati, e blockchain, con la sua struttura decentralizzata, può essere un’ottima risposta a queste esigenze. 
                    Esempi reali di nazioni che intendono usare blockchain a scopo governativo sono l’Olanda e la Finlandia. L'olanda ha intenzione di utilizzare blockchain per controllare i flussi ai confini statali, principalmente per la gestione dei permessi d’ingresso nei viaggi tra Amsterdam e Londra, mentre la finlandia sta sviluppando un sistema basato su blockchain per aiutare I centri di assunzione nelle aree rurali a gestire I dati degli iscritti.
                    </p>
                </div>
                <div className="By_icon">
                    <img src="./img/gov.svg" alt="govern"/>
                </div>
            </div>
            <div id="id_dig">
                <div className="by_text">
                    <h3 className="sub_article_title">Identità digitale</h3>
                    <p>Anche se l’avvento del GDPR ha aiutato a ridurre il problema in europa, gran parte dei dati degli utenti in rete sono in mano a servizi e applicazioni che li richiedono per garantire il proprio funzionamento. Queste sono però entità completamente centralizzate, che non sempre operano in maniera trasparente, e che oltretutto non sono immuni ad attacchi informatici. I dati posseduti da questi siti sono un vero e proprio corpo d’informazioni che rappresentano un utente online; l'eventuale furto di questi dati è a tutti gli effetti un vero e proprio furto d’identità digitale. 
                    Blockchain può aiutare a risolvere questo problema decentralizzando completamente I dati e  restituendo il controllo agli utenti. Invece di fornire automaticamente il consenso al trattamento dei dati, blockchain può essere usata per tenere traccia di chi è effettivamente autorizzato a poter accedere a quei dati.
                    </p>
                </div>
                <div className="By_icon">
                    <img src="./img/id.svg" alt="identiki digital"/>
                </div>
            </div>
            <div id="not">
                <div className="by_text">
                    <h3 className="sub_article_title">Uso notarile</h3>
                    <p>Il notaio è la figura alla quale è affidata la funzione di garantire la validità dei contratti e dei documenti privati. La notarizzazione è il processo che assicura alle due parti in una transazione che I documenti scambiati sono autentici e la fonte che li ha validati autorevole. Il punto chiave di questo processo sta appunto nel riporre fiducia in una figura centrale, quella del notaio, ma dal momento che il materiale trattato è principalmente cartaceo, e dunque potenzialmente manomissibile, l’unica misura di sicurezza adottata è quella della fiducia in un ente terzo al di sopra delle parti.
                        In questo senso, blockchain svolge lo stesso ruolo di un notaio, ma con un approccio completamente opposto: il processo di notarizzazione tradizionale è centralizzato e basato sulla fiducia; il sistema di consenso di blockchain è invece distribuito e trust-less. Un altro vantaggio di blockchain è che, a differenza di un documento cartaceo, è trasparente e non può essere manomessa: questa sua peculiarità la rende perfetta per garantire la prova dell’esistenza di un documento dal momento della sua creazione, oltre a consentire di tenere traccia di tutte le modifiche al documento nel tempo (attraverso il controllo dell’hash di ogni versione).                                                         
                    </p>
                </div>
                <div className="By_icon">
                <img src="./img/not.svg" alt="notary"/>
                </div>
            </div>
            <div id="san">
                <div className="by_text">
                    <h3 className="sub_article_title">Sanità</h3>
                    <p>Blockchain può essere utilizzata anche in ambito sanitario. Uno dei problemi più importanti in questo settore è che spesso la storia clinica di un paziente, una risorsa fondamentale per permettere al medico di fornire una diagnosi in maniera più efficiente e precisa possibile, non è ben documentata: buona parte degli eventi di una storia clinica sono riportati esclusivamente in forma cartacea, e non sempre è possibile avervi accesso quando necessario. Blockchain può aiutare in questo senso registrando questi documenti in un database sicuro, trasparente, e inalterabile, uno strumento che permette al medico di controllare con assoluta certezza lo storico dei problemi pregressi e delle prescrizioni mediche del paziente.</p>
                </div>
                <div id="sanity" className="By_icon">
                    <img src="./img/san.svg" alt="sanity"/>
                </div>
            </div>
        </div>
        )
}

export default BeyondTheCoin