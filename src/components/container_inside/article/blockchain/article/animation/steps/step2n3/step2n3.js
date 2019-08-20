import React from "react"
import { motion } from "framer-motion"
import Point from "../animation_component/point"
import Connection from "../animation_component/connect"
function Step2n3(props) {
    
        return (
            <motion.div
                id="motion_map"
                style={{
                    background:"url('../img/world.svg')", 
                    backgroundPosition:"center",
                    backgroundRepeat:"no-repeat",
                    backgroundSize: "contain"}}
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
                {/* POINT STEP 2 
                *************************************************************
                    TOP = { misura fissa + proporzione responsive + "%"} 
                *************************************************************/} 
                <div id="flex_pc" >
                    <div id="p_c" style={{height:100 - props.responsive + "%"}}>
                        <Point step={props.step} id="point_1"  top={9 - props.responsive + "%"} left={9 - props.responsive + "%"}  color={props.color}/>   
                        <Point step={props.step} id="point_2"  top={41 - props.responsive + "%"} left={26 - props.responsive + "%"}  color={props.color}/>   
                        <Point step={props.step} id="point_3"  top={36 - props.responsive + "%"} left={56 - props.responsive + "%"}  color={props.color}/>  
                        <Point step={props.step} id="point_4"  top={49 - props.responsive + "%"} left={91 - props.responsive + "%"}  color={props.color}/>  
                        <Point step={props.step} id="point_5"  top={18 - props.responsive + "%"} left={76 - props.responsive + "%"}  color={props.color}/>
                        <Point step={props.step} id="point_6"  top={28 - props.responsive + "%"} left={71 - props.responsive + "%"}  color={props.color}/>
                        <Point step={props.step} id="point_7"  top={19 - props.responsive + "%"} left={61 - props.responsive + "%"}  color={props.color}/>
                        <Point step={props.step} id="point_8"  top={48 - props.responsive + "%"} left={54 - props.responsive + "%"}  color={props.m_color}/>
                        <Point step={props.step} id="point_9"  top={17 - props.responsive + "%"} left={14 - props.responsive + "%"}  color={props.color}/>
                        <Point step={props.step} id="point_10" top={24 - props.responsive + "%"} left={52 - props.responsive + "%"}  color={props.color}/>
                        <Point step={props.step} id="point_11" top={51 - props.responsive + "%"} left={28 - props.responsive + "%"}  color={props.color}/>
                        <Point step={props.step} id="point_12" top={36 - props.responsive + "%"} left={81 - props.responsive + "%"}  color={props.r_color}/>
                        {/* CONNECTION LINE  - STEP 3 */}
                        <Connection id="connect_1"   class="connection"  step={props.step}  from="point_11"   to="point_4"/>
                        <Connection id="connect_2"   class="connection"  step={props.step}  from="point_11"   to="point_3"/>
                        <Connection id="connect_3"   class="connection"  step={props.step}  from="point_11"   to="point_8"/>
                        <Connection id="connect_4"   class="connection"  step={props.step}  from="point_4"    to="point_3"/>
                        <Connection id="connect_5"   class="connection"  step={props.step}  from="point_4"    to="point_7"/>
                        <Connection id="connect_6"   class="connection"  step={props.step}  from="point_4"    to="point_8"/>
                        <Connection id="connect_7"   class="connection"  step={props.step}  from="point_4"    to="point_12"/>
                        <Connection id="connect_8"   class="connection"  step={props.step}  from="point_3"   to="point_7"/>
                        <Connection id="connect_9"   class="connection"  step={props.step}  from="point_3"    to="point_8"/>
                        <Connection id="connect_10"   class="connection"  step={props.step}  from="point_3"   to="point_6"/>
                        <Connection id="connect_11"   class="connection"  step={props.step}  from="point_7"   to="point_8"/>
                        <Connection id="connect_12"   class="connection"  step={props.step}  from="point_7"   to="point_12"/>
                        <Connection id="connect_13"   class="connection"  step={props.step}  from="point_7"   to="point_6"/>
                        <Connection id="connect_14"   class="connection"  step={props.step}  from="point_7"   to="point_2"/>
                        <Connection id="connect_15"   class="connection"  step={props.step}  from="point_7"   to="point_1"/>
                        <Connection id="connect_16"   class="connection"  step={props.step}  from="point_12"   to="point_8"/>
                        <Connection id="connect_17"   class="connection"  step={props.step}  from="point_12"   to="point_6"/>
                        <Connection id="connect_18"   class="connection"  step={props.step}  from="point_12"   to="point_10"/>
                        <Connection id="connect_19"   class="connection"  step={props.step}  from="point_12"   to="point_2"/>
                        <Connection id="connect_20"   class="connection"  step={props.step}  from="point_12"   to="point_1"/>
                        <Connection id="connect_21"   class="connection"  step={props.step}  from="point_12"   to="point_5"/>
                        <Connection id="connect_22"   class="connection"  step={props.step}  from="point_10"   to="point_2"/>
                        <Connection id="connect_23"   class="connection"  step={props.step}  from="point_10"   to="point_6"/>
                        <Connection id="connect_24"   class="connection"  step={props.step}  from="point_10"   to="point_9"/>
                        <Connection id="connect_25"   class="connection"  step={props.step}  from="point_10"   to="point_1"/>
                        <Connection id="connect_26"   class="connection"  step={props.step}  from="point_10"   to="point_5"/>
                        <Connection id="connect_27"   class="connection"  step={props.step}  from="point_2"   to="point_9"/>
                        <Connection id="connect_28"   class="connection"  step={props.step}  from="point_2"  to="point_1"/>
                        <Connection id="connect_29"   class="connection"  step={props.step}  from="point_2"   to="point_5"/>
                        <Connection id="connect_30"   class="connection"  step={props.step}  from="point_2"  to="point_6"/>
                        <Connection id="connect_31"   class="connection"  step={props.step}  from="point_6"   to="point_5"/>
                        <Connection id="connect_32"   class="connection"  step={props.step}  from="point_6"   to="point_3"/>
                        <Connection id="connect_33"   class="connection"  step={props.step}  from="point_8"   to="point_10"/>
                        <Connection id="connect_34"   class="connection"  step={props.step}  from="point_8"   to="point_9"/>
                        <Connection id="connect_35"   class="connection"  step={props.step}  from="point_5"   to="point_3"/>
                    </div>
                </div>
            </motion.div>
        )
}    
export default Step2n3