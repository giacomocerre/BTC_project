import React from "react"  
import PyriteGold from "./article/pyritegold"
import CryptoStory from "./article/cryptostory"
// import ReactPageScroller from "react-page-scroller";

function Intro() {
    return (
        <section id="intro">
            <div id="scroller_full_page">
                <PyriteGold className="article" justify="center" page="1"/>
                <CryptoStory className="article" justify="right" page="3"/>
            </div>
        </section>
    );
}

export default Intro