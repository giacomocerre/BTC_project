import React from "react"
import SvgPG from "./svg/svg_pg"

function PyriteGold(props) {
    return (
        <article id="pyrite_gold" class={props.class} style={{ justifyContent: props.justify }}>
            <div id="pg_text" class="article_text">
                <h2 class="article_title">Oro & Pirite</h2>
                <p class="par">Esiste una lega metallica fatta da stagno e zolfo che ha il colore dell’oro. Il suo nome è pirite ed era nota in passato come l’oro degli stolti.
                L’oro, quello vero, è da millenni utilizzato come valore, e poi come controvalore, per le emissioni valutarie degli Stati, un sistema che per molti secoli ha in qualche modo garantito la stabilità degli scambi monetari. Con l’avvento del sistema fluttuante del 1971 ad opera degli Stati Uniti lo scenario è cambiato.
                <br /><br />
                Nel 2008, il fallimento di Lehman Brothers, i suoi passivi di titoli tossici, o salciccia, che ammontava a $613 miliardi  diede inizio al crollo finanziario di carattere globale che ha messo in crisi il modello economico vigente generando la peggiore recessione dal 1929, conosciuta come la grande recessione. Finì soltanto nel 2009 grazie alle erogazioni di ingenti prestiti da parte di FMI, BCE e Commissione europea.
                <br /><br />
                In quell’anno, un anonimo inventore tramite una combinazione di crittografia, teoria dei giochi e sistemi distribuiti creò una tecnologia che prometteva essere il nuovo controvalore, una specie di equivalente digitale dell’oro, trasferibile ma non duplicabile, capace di assicurare libertà, anonimato e costi bassi a discapito però dei consumi elettrici, il Bitcoin.
                <br /><br />
                Nel 2017 la capitalizzazione di mercato aggregata dei cripto valori, perché ormai non si tratta soltanto di monete ma di valori, salì da $30 miliardi a oltre $600 miliardi in gennaio 2018, anche se qualche investitore avrà sentito il classico odore di uova marce tipico dallo zolfo, uno dei  componenti della pirite, quando  subito dopo sono stati bruciati circa $400 miliardi di dollari di capitalizzazione di mercato.
                </p>
            </div>
            <div id="icon_content">
                <SvgPG/>
            </div>
        </article>
        )
}

export default PyriteGold