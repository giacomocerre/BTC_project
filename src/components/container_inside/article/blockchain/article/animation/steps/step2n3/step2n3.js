import React from "react"
import { motion } from "framer-motion"
import Map from "../animation_component/map"
import Point from "../animation_component/point"
import Connection from "../animation_component/connect"

function Step2n3(props) {
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
                {/* POINT STEP 2 */} 
                <Point step={props.step} id="point_1" top={300} left={200}  color={props.color}/>   
                <Point step={props.step} id="point_2" top={300} left={500}  color={props.color}/>    
                <Point step={props.step} id="point_3" top={100} left={250}  color={props.color}/>  
                <Point step={props.step} id="point_4" top={150} left={100}  color={props.color}/>  
                <Point step={props.step} id="point_5" top={350} left={1000} color={props.color}/>      
                <Point step={props.step} id="point_6" top={150} left={900}  color={props.color}/>              
                <Point step={props.step} id="point_7" top={100} left={700}  color={props.color}/>      
                <Point step={props.step} id="point_8" top={80} left={460}   color={props.m_color}/>  
                <Point step={props.step} id="point_9" top={130} left={520}  color={props.r_color}/> 
                <Point step={props.step} id="point_10" top={220} left={630} color={props.color}/> 
                <Point step={props.step} id="point_11" top={430} left={250} color={props.color}/>
                <Point step={props.step} id="point_12" top={400} left={550} color={props.color}/>
                {/* CONNECTION LINE  - STEP 3 */}
                <Connection id="connect_1"   class="connection"  step={props.step}  from="point_1"  to="point_2"/>
                <Connection id="connect_2"   class="connection"  step={props.step}  from="point_8"  to="point_2"/>
                <Connection id="connect_3"   class="connection"  step={props.step}  from="point_3"  to="point_2"/>
                <Connection id="connect_4"   class="connection"  step={props.step}  from="point_4"  to="point_2"/>
                <Connection id="connect_5"   class="connection"  step={props.step}  from="point_11" to="point_2"/>
                <Connection id="connect_6"   class="connection"  step={props.step}  from="point_9"  to="point_2"/>
                <Connection id="connect_7"   class="connection"  step={props.step}  from="point_5"  to="point_2"/>
                <Connection id="connect_8"   class="connection"  step={props.step}  from="point_10" to="point_2"/>
                <Connection id="connect_9"   class="connection"  step={props.step}  from="point_6"  to="point_2"/>
                <Connection id="connect_10"   class="connection"  step={props.step}  from="point_3"  to="point_4"/>
                <Connection id="connect_11"   class="connection"  step={props.step}  from="point_1"  to="point_4"/>
                <Connection id="connect_12"   class="connection"  step={props.step}  from="point_1"  to="point_4"/>
                <Connection id="connect_13"   class="connection"  step={props.step}  from="point_5"  to="point_6"/>
                <Connection id="connect_14"   class="connection"  step={props.step}  from="point_8"  to="point_7"/>
                <Connection id="connect_15"   class="connection"  step={props.step}  from="point_9"  to="point_7"/>
                <Connection id="connect_16"   class="connection"  step={props.step}  from="point_6"  to="point_7"/>
                <Connection id="connect_17"   class="connection"  step={props.step}  from="point_1"  to="point_8"/>
                <Connection id="connect_18"   class="connection"  step={props.step}  from="point_3"  to="point_8"/>
                <Connection id="connect_19"   class="connection"  step={props.step}  from="point_9"  to="point_8"/>
                <Connection id="connect_20"   class="connection"  step={props.step}  from="point_3"  to="point_10"/>
                <Connection id="connect_21"   class="connection"  step={props.step}  from="point_5"  to="point_10"/>
                <Connection id="connect_22"   class="connection"  step={props.step}  from="point_9"  to="point_10"/>
                <Connection id="connect_23"   class="connection"  step={props.step}  from="point_7"  to="point_10"/>
                <Connection id="connect_24"   class="connection"  step={props.step}  from="point_6"  to="point_10"/>
                <Connection id="connect_25"   class="connection"  step={props.step}  from="point_1"  to="point_11"/>
                <Connection id="connect_27"   class="connection"  step={props.step}  from="point_3"  to="point_11"/>
                <Connection id="connect_26"   class="connection"  step={props.step}  from="point_5"  to="point_12"/>
                <Connection id="connect_28"   class="connection"  step={props.step}  from="point_11"  to="point_12"/>
                <Connection id="connect_28"   class="connection"  step={props.step}  from="point_2"  to="point_12"/>
                <Connection id="connect_28"   class="connection"  step={props.step}  from="point_10"  to="point_12"/>
                <Connection id="connect_28"   class="connection"  step={props.step}  from="point_6"  to="point_12"/>
                <Connection id="connect_28"   class="connection"  step={props.step}  from="point_1"  to="point_12"/>
            </motion.div>
        )
}    
export default Step2n3