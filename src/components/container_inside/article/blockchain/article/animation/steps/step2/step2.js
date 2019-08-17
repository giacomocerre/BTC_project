import React from "react"
import { motion } from "framer-motion"
import Map from "../animation_component/map"
import Point from "../animation_component/point"
import Connect from "../animation_component/connect"

function Step2(props) {
        return (
            <motion.div
                id="motion_map"
                class="motion"
                animate={{
                    x: props.x,
                    y: props.y,
                    scale: props.scale,
                    rotate: props.rotate,
                  }}
                transition={{
                duration: 1,
                }}
            >
                <Map/>
                <Point step={props.step} id="point_1" top={300} left={200} color="#333"/>   
                <Point step={props.step} id="point_2" top={300} left={500} color="#333"/>    
                <Point step={props.step} id="point_3" top={100} left={250} color="#333"/>  
                <Point step={props.step} id="point_4" top={150} left={100} color="#333"/>  
                <Point step={props.step} id="point_5" top={350} left={1000} color="#333"/>      
                <Point step={props.step} id="point_6" top={150} left={900} color="#333"/>              
                <Point step={props.step} id="point_7" top={100} left={700} color="#333"/>      
                <Point step={props.step} id="point_8" top={100} left={460} color="#333"/>  
                <Point step={props.step} id="point_9" top={130} left={520} color="#333"/> 
                <Point step={props.step} id="point_10" top={220} left={630} color="#333"/> 
                <Point step={props.step} id="point_11" top={430} left={250} color="#333"/>
                {/* 1 */}
                <Connect id="connect_1"   class="connection" step={props.step}  from="point_1" to="point_2"/>
                <Connect id="connect_2"   class="connection" step={props.step}  from="point_1" to="point_3"/>
                <Connect id="connect_3"   class="connection" step={props.step}  from="point_1" to="point_4"/>
                <Connect id="connect_4"   class="connection" step={props.step}  from="point_1" to="point_5"/>
                <Connect id="connect_5"   class="connection" step={props.step}  from="point_1" to="point_6"/>
                <Connect id="connect_6"   class="connection" step={props.step}  from="point_1" to="point_7"/>
                <Connect id="connect_7"   class="connection" step={props.step}  from="point_1" to="point_8"/>
                <Connect id="connect_8"   class="connection" step={props.step}  from="point_1" to="point_9"/>
                <Connect id="connect_9"   class="connection" step={props.step}  from="point_1" to="point_10"/>
                <Connect id="connect_10"  class="connection" step={props.step}  from="point_1" to="point_11"/>
                {/* 2 */}
                <Connect id="connect_11"  class="connection" step={props.step}  from="point_2" to="point_1"/>
                <Connect id="connect_12"  class="connection" step={props.step}  from="point_2" to="point_3"/>
                <Connect id="connect_13"  class="connection" step={props.step}  from="point_2" to="point_4"/>
                <Connect id="connect_14"  class="connection" step={props.step}  from="point_2" to="point_5"/>
                <Connect id="connect_15"  class="connection" step={props.step}  from="point_2" to="point_6"/>
                <Connect id="connect_16"  class="connection" step={props.step}  from="point_2" to="point_7"/>
                <Connect id="connect_17"  class="connection" step={props.step}  from="point_2" to="point_8"/>
                <Connect id="connect_18"  class="connection" step={props.step}  from="point_2" to="point_9"/>
                <Connect id="connect_19"  class="connection" step={props.step}  from="point_2" to="point_10"/>
                <Connect id="connect_20"  class="connection" step={props.step}  from="point_2" to="point_11"/>
                {/* 3 */}
                <Connect id="connect_21"  class="connection" step={props.step}  from="point_3" to="point_1"/>
                <Connect id="connect_22"  class="connection" step={props.step}  from="point_3" to="point_2"/>
                <Connect id="connect_23"  class="connection" step={props.step}  from="point_3" to="point_4"/>
                <Connect id="connect_24"  class="connection" step={props.step}  from="point_3" to="point_5"/>
                <Connect id="connect_25"  class="connection" step={props.step}  from="point_3" to="point_6"/>
                <Connect id="connect_26"  class="connection" step={props.step}  from="point_3" to="point_7"/>
                <Connect id="connect_27"  class="connection" step={props.step}  from="point_3" to="point_8"/>
                <Connect id="connect_28"  class="connection" step={props.step}  from="point_3" to="point_9"/>
                <Connect id="connect_29"  class="connection" step={props.step}  from="point_3" to="point_10"/>
                <Connect id="connect_30"  class="connection" step={props.step}  from="point_3" to="point_11"/>
            </motion.div>
        )
}    
export default Step2