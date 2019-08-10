import React from "react"
import Fade from "react-reveal/Fade"
import Bounce from "react-reveal/Bounce"

function Cryptostory(props){
        return (
            <article id="cryptostory" class={props.class} style={{ justifyContent: props.justify }}>
                <div id="cs_text" class="article_text">
                    <h2 class="article_title">Crypto Story</h2>
                    <Fade bottom delay={1000}>
                        <p class="appear_par" id="time1">Nam id ipsum vel lorem sagittis mollis. Sed id velit at justo accumsan condimentum quis id nibh. Nullam consequat malesuada est, sit amet dapibus odio ornare et. Phasellus porta, sem id semper pulvinar, erat dolor sagittis est, id tempus tellus urna vitae quam. </p>
                    </Fade><br/>
                    <Fade bottom delay={2000}>
                        <p class="appear_par" id="time2">Nam id ipsum vel lorem sagittis mollis. Sed id velit at justo accumsan condimentum quis id nibh. Nullam consequat malesuada est, sit amet dapibus odio ornare et. Phasellus porta, sem id semper pulvinar, erat dolor sagittis est, id tempus tellus urna vitae quam. </p>
                    </Fade><br />
                    <Fade bottom delay={3000}>
                        <p class="appear_par" id="time3">Nam id ipsum vel lorem sagittis mollis. Sed id velit at justo accumsan condimentum quis id nibh. Nullam consequat malesuada est, sit amet dapibus odio ornare et. Phasellus porta, sem id semper pulvinar, erat dolor sagittis est, id tempus tellus urna vitae quam. </p>
                    </Fade><br />
                    <Fade bottom delay={4000}>
                        <p class="appear_par" id="time3">Nam id ipsum vel lorem sagittis mollis. Sed id velit at justo accumsan condimentum quis id nibh. Nullam consequat malesuada est, sit amet dapibus odio ornare et. Phasellus porta, sem id semper pulvinar, erat dolor sagittis est, id tempus tellus urna vitae quam. </p>
                    </Fade><br />
                    <Fade bottom delay={5000}>
                        <p class="appear_par" id="time3">Nam id ipsum vel lorem sagittis mollis. Sed id velit at justo accumsan condimentum quis id nibh. Nullam consequat malesuada est, sit amet dapibus odio ornare et. Phasellus porta, sem id semper pulvinar, erat dolor sagittis est, id tempus tellus urna vitae quam. </p>
                    </Fade><br />
                    <Fade bottom delay={6000}>
                        <p class="appear_par" id="time3">Nam id ipsum vel lorem sagittis mollis. Sed id velit at justo accumsan condimentum quis id nibh. Nullam consequat malesuada est, sit amet dapibus odio ornare et. Phasellus porta, sem id semper pulvinar, erat dolor sagittis est, id tempus tellus urna vitae quam. </p>
                    </Fade>
                </div>
                <div id="time_line">
                    <hr class="line_of_time"/>
                    <Bounce right delay={1000}>
                        <div class="check_container"> 
                            <p class="check_line">
                                <span class="year">2008</span>
                                <span class="value">Ethereum</span>
                            </p>
                            <img class="check_icon" src="img/eth.png" alt="ethereum logo"/>
                        </div>
                    </Bounce>
                    <Bounce right delay={2000}>
                        <div class="check_container">
                            <p class="check_line">
                                <span class="year">2011</span>
                                <span class="value">XRP</span>
                            </p>
                            <img class="check_icon" src="img/ripple.png" alt="ethereum logo" />
                        </div>
                    </Bounce>
                    <Bounce right delay={3000}>
                        <div class="check_container">
                            <p class="check_line">
                                <span class="year">2013</span>
                                <span class="value">Litecoin</span>
                            </p>
                            <img class="check_icon" src="img/litecoin.png" alt="ethereum logo" />
                        </div>
                    </Bounce>
                </div>
            </article>
        )
}
export default Cryptostory