import React from "react"  
import PyriteGold from "./article/pyritegold"
import Users from "./article/users"
import CryptoStory from "./article/cryptostory"
// import ReactPageScroller from "react-page-scroller";

function Intro() {
    return (
        <section id="intro">
            <div id="scroller_full_page">
                <PyriteGold class="article" justify="center" page="1"/>
                <Users class="article" justify="left" page="2"/>
                <CryptoStory class="article" justify="center" page="3"/>
            </div>
        </section>
    );
}

export default Intro