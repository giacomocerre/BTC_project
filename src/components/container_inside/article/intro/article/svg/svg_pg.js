import React from "react"
import SvgLines from 'react-mt-svg-lines';
class SvgPG extends React.Component {
    state = { animation: false,
              opacity: 0 };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = event => {
        const { pageYOffset } = window;
        const startSVGAnimation = document.getElementById("intro").clientHeight + 500
        if (pageYOffset >= startSVGAnimation) {
            this.setState({ animation: true, opacity:1 });
        } 
    };
    render(){
        return (
            // gold svg
            <div id="svg_Content">
                <div id="gold_cont" style={{opacity:this.state.opacity}}>   
                    <SvgLines animate={this.state.animation} duration={10000}> 
                        <svg version="1.1"
                            id="gold"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px" 
                            y="0px" 
                            width="200px" 
                            height="200px" 
                            viewBox="0 0 372.7 370.2">
                            <path class="st0" d="M302.1,72.8l24.1,3.4l1.1,27.5l42.4,81.4l-40.1,58.5v57.3l-96.3,58.5l-83.7,8L118,350.4l-59.1-48.2L2.7,202.4
                            l27.5-79.1l76.8-98.6h58.5l67.7-21.8L302.1,72.8z M107.1,24.6l65.8,42.6 M233.3,2.9l-60.4,64.4 M172.9,67.2l-7.3-42.6 M326.2,76.3
                            l-40.9,50.1 M369.8,185.2l-84.5-58.8 M327.3,103.8l-42,22.6 M329.6,301.1l-85.7-39.8 M243.9,261.3l85.7-17.5 M369.8,185.2l-125.9,76
                            M186.2,197.4l183.5-12.1 M186.2,197.4l99-71 M243.9,261.3l-57.6-63.9 M172.9,67.2l13.4,130.1 M243.9,261.3l-119.2-38 M186.2,197.4
                            l-61.6,25.9 M58.9,302.2l65.7-79 M118,350.4l6.7-127.1 M124.7,223.2l24.9,144.4 M233.3,359.6l10.6-98.3 M30.3,123.3l94.4,100
                            M30.3,123.3L22.2,237 M22.2,237l102.5-13.8 M124.7,223.2l-20-88.1 M104.7,135.1l-74.4-11.8 M107.1,24.6l-2.4,110.4 M186.2,197.4
                            l-81.6-62.3 M172.9,67.2l-68.2,67.9 M124.7,223.2l108.6,136.3 M302.1,72.8l-129.2-5.6 M252.9,149.6l-80-82.4"/>
                        </svg>
                    </SvgLines>
                </div>
                <div id="pyrite_cont">
                    <SvgLines animate={this.state.animation} duration={10000} style={{ opacity: this.state.opacity }}>
                        <svg version="1.1"
                            id="pyrite"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px" 
                            width="200px" 
                            height="200px" 
                            viewBox="0 0 302.5 370.7">
                            <path class="st0" d="M241.9,133.3L224,235.9l66.9-55.8l8.9,66.9l-68.1,73.3l-76.2,47.5l-46.8-30.9l-90.3-78.4L2.5,194.2l10.2-66.4
                                l68.6,66.4l-20-103.5l94.1-86.9L241.9,133.3z M224,235.9l-80.2,124.2 M164,328.9L81.3,194.2 M155.4,3.8l8.5,325.1 M18.3,258.5
                                L164,328.9 M81.3,194.2l41.3-56.2 M122.7,137.9L61.3,90.7 M155.4,3.8l-32.8,134.1 M122.7,137.9l41.3,191 M18.3,258.5l12.3-72.7
                                M2.5,194.2l28.1-8.4 M12.8,127.8l17.9,58 M30.6,185.8L164,328.9 M81.3,194.2l-29.5,14.3 M231.7,320.3l30.6-93.3 M299.8,247
                                l-37.6-20.1 M290.9,180.1l-28.6,46.8 M224,235.9l38.2-9 M143.9,360.1l118.4-133.1 M224,235.9l-21-100.8 M241.9,133.3l-38.9,1.9
                                M155.4,3.8L203,135.2 M203,135.2L164,328.9"/>
                        </svg>
                    </SvgLines>
                </div>
            </div>
        )
    }
}

export default SvgPG