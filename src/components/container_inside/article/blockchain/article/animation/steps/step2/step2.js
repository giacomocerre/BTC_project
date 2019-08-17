import React from "react"
import { motion } from "framer-motion"
import Map from "../animation_component/map"
import Point from "../animation_component/point"
import Connection from "../animation_component/connect"

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
                {/* POINT */}
                <Point step={props.step} id="point_1" top={300} left={200} color="#333"/>   
                <Point step={props.step} id="point_2" top={300} left={500} color="#333"/>    
                <Point step={props.step} id="point_3" top={100} left={250} color="#333"/>  
                <Point step={props.step} id="point_4" top={150} left={100} color="#333"/>  
                <Point step={props.step} id="point_5" top={350} left={1000} color="#333"/>      
                <Point step={props.step} id="point_6" top={150} left={900} color="#333"/>              
                <Point step={props.step} id="point_7" top={100} left={700} color="#333"/>      
                <Point step={props.step} id="point_8" top={80} left={460} color="#333"/>  
                <Point step={props.step} id="point_9" top={130} left={520} color="#333"/> 
                <Point step={props.step} id="point_10" top={220} left={630} color="#333"/> 
                <Point step={props.step} id="point_11" top={430} left={250} color="#333"/>
                {/* CONNECTION LINE */}
                
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_1"  to="point_2"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_8"  to="point_2"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_3"  to="point_2"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_4"  to="point_2"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_11" to="point_2"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_9"  to="point_2"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_5"  to="point_2"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_10" to="point_2"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_6"  to="point_2"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_3"  to="point_4"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_1"  to="point_4"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_1"  to="point_4"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_5"  to="point_6"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_8"  to="point_7"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_9"  to="point_7"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_6"  to="point_7"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_1"  to="point_8"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_3"  to="point_8"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_9"  to="point_8"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_3"  to="point_10"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_5"  to="point_10"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_9"  to="point_10"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_7"  to="point_10"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_6"  to="point_10"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_1"  to="point_11"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_5"  to="point_11"/>
                <Connection id="connect_1"   class="connection" line={props.line} step={props.step}  from="point_3"  to="point_11"/>

            </motion.div>
        )
}    
export default Step2