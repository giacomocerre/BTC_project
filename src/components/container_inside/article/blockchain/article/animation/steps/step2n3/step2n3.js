import React from "react"
import { motion } from "framer-motion"
import Point from "../animation_component/point"
import Connection from "../animation_component/connect"
function Step2n3(props) {
    var div_display = "flex"
    if(props.step >= 5){
        div_display = "none";
    }else{
        div_display = "flex";
    }
    console.log(div_display)  
    
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
                    <div id="flex_pc">
                        <div id="p_c">
                            <Point step={props.step} id="p_1"  show_hide={div_display} top={100} left={130}  color={props.color}/>   
                            <Point step={props.step} id="p_2"  show_hide={div_display} top={200} left={100}  color={props.color}/>   
                            <Point step={props.step} id="p_3"  show_hide={div_display} top={320} left={200}  color={props.color}/>  
                            <Point step={props.step} id="p_4"  show_hide={div_display} top={480} left={225}  color={props.color}/>  
                            <Point step={props.step} id="p_5"  show_hide={div_display} top={150} left={480}  color={props.r_color} s_show={props.s_show}/>
                            <Point step={props.step} id="p_6"                          top={115} left={440}  color={props.m_color} s_show={props.s_show}/>
                            <Point step={props.step} id="p_7"  show_hide={div_display} top={240} left={430}  color={props.color}/>
                            <Point step={props.step} id="p_8"  show_hide={div_display} top={290} left={530}  color={props.color}/>
                            <Point step={props.step} id="p_9"  show_hide={div_display} top={420} left={520}  color={props.color}/>
                            <Point step={props.step} id="p_10" show_hide={div_display} top={110} left={600}  color={props.color}/>
                            <Point step={props.step} id="p_11" show_hide={div_display} top={140} left={800}  color={props.color}/>
                            <Point step={props.step} id="p_12" show_hide={div_display} top={200} left={590}  color={props.color}/>
                            <Point step={props.step} id="p_13" show_hide={div_display} top={170} left={690}  color={props.color}/>
                            <Point step={props.step} id="p_14" show_hide={div_display} top={420} left={900}  color={props.color}/>
                            <Point step={props.step} id="p_15" show_hide={div_display} top={275} left={715}  color={props.color}/>
                            <Point step={props.step} id="p_16" show_hide={div_display} top={400} left={280}  color={props.color}/>
                            {/* CONNECTION LINE  - STEP 3 */}
                            <Connection id="p_connect_1"    class="connection" show_hide={div_display} step={props.step}  from="p_1" to="p_2" />
                            <Connection id="p_connect_2"    class="connection" show_hide={div_display} step={props.step}  from="p_1" to="p_3" />
                            <Connection id="p_connect_3"    class="connection" show_hide={div_display} step={props.step}  from="p_1" to="p_6" />
                            <Connection id="p_connect_4"    class="connection" show_hide={div_display} step={props.step}  from="p_1" to="p_7" />
                            <Connection id="p_connect_5"    class="connection" show_hide={div_display} step={props.step}  from="p_1" to="p_5" />
                            <Connection id="p_connect_6"    class="connection" show_hide={div_display} step={props.step}  from="p_1" to="p_9" />
                            <Connection id="p_connect_7"    class="connection" show_hide={div_display} step={props.step}  from="p_2" to="p_3" />
                            <Connection id="p_connect_8"    class="connection" show_hide={div_display} step={props.step}  from="p_2" to="p_4" />
                            <Connection id="p_connect_9"    class="connection" show_hide={div_display} step={props.step}  from="p_2" to="p_5" />
                            <Connection id="p_connect_10"   class="connection" show_hide={div_display} step={props.step}  from="p_2" to="p_6" />
                            <Connection id="p_connect_11"   class="connection" show_hide={div_display} step={props.step}  from="p_2" to="p_7" />
                            <Connection id="p_connect_12"   class="connection" show_hide={div_display} step={props.step}  from="p_2" to="p_9" />
                            <Connection id="p_connect_13"   class="connection" show_hide={div_display} step={props.step}  from="p_3" to="p_4" />
                            <Connection id="p_connect_14"   class="connection" show_hide={div_display} step={props.step}  from="p_3" to="p_5" />
                            <Connection id="p_connect_15"   class="connection" show_hide={div_display} step={props.step}  from="p_3" to="p_6" />
                            <Connection id="p_connect_16"   class="connection" show_hide={div_display} step={props.step}  from="p_3" to="p_7" />
                            <Connection id="p_connect_17"   class="connection" show_hide={div_display} step={props.step}  from="p_3" to="p_8" />
                            <Connection id="p_connect_18"   class="connection" show_hide={div_display} step={props.step}  from="p_3" to="p_9" />
                            <Connection id="p_connect_19"   class="connection" show_hide={div_display} step={props.step}  from="p_3" to="p_16" />
                            <Connection id="p_connect_20"   class="connection" show_hide={div_display} step={props.step}  from="p_4" to="p_9" />
                            <Connection id="p_connect_21"   class="connection" show_hide={div_display} step={props.step}  from="p_4" to="p_16" />
                            <Connection id="p_connect_22"   class="connection" show_hide={div_display} step={props.step}  from="p_5" to="p_7" />
                            <Connection id="p_connect_23"   class="connection" show_hide={div_display} step={props.step}  from="p_5" to="p_8" />
                            <Connection id="p_connect_24"   class="connection" show_hide={div_display} step={props.step}  from="p_5" to="p_10" />
                            <Connection id="p_connect_25"   class="connection" show_hide={div_display} step={props.step}  from="p_5" to="p_12" />
                            <Connection id="p_connect_26"   class="connection" show_hide={div_display} step={props.step}  from="p_6" to="p_5" />
                            <Connection id="p_connect_27"   class="connection" show_hide={div_display} step={props.step}  from="p_6" to="p_7" />
                            <Connection id="p_connect_28"   class="connection" show_hide={div_display} step={props.step}  from="p_7" to="p_8" />
                            <Connection id="p_connect_29"   class="connection" show_hide={div_display} step={props.step}  from="p_7" to="p_9" />
                            <Connection id="p_connect_30"   class="connection" show_hide={div_display} step={props.step}  from="p_7" to="p_16" />
                            <Connection id="p_connect_31"   class="connection" show_hide={div_display} step={props.step}  from="p_8" to="p_9" />
                            <Connection id="p_connect_32"   class="connection" show_hide={div_display} step={props.step}  from="p_8" to="p_12" />
                            <Connection id="p_connect_33"   class="connection" show_hide={div_display} step={props.step}  from="p_8" to="p_14" />
                            <Connection id="p_connect_34"   class="connection" show_hide={div_display} step={props.step}  from="p_8" to="p_15" />
                            <Connection id="p_connect_35"   class="connection" show_hide={div_display} step={props.step}  from="p_9" to="p_13" />
                            <Connection id="p_connect_36"   class="connection" show_hide={div_display} step={props.step}  from="p_9" to="p_14" />
                            <Connection id="p_connect_37"   class="connection" show_hide={div_display} step={props.step}  from="p_9" to="p_15" />
                            <Connection id="p_connect_38"   class="connection" show_hide={div_display} step={props.step}  from="p_10" to="p_11" />    
                            <Connection id="p_connect_39"   class="connection" show_hide={div_display} step={props.step}  from="p_10" to="p_12" />
                            <Connection id="p_connect_40"   class="connection" show_hide={div_display} step={props.step}  from="p_10" to="p_13" />
                            <Connection id="p_connect_41"   class="connection" show_hide={div_display} step={props.step}  from="p_10" to="p_15" />
                            <Connection id="p_connect_42"   class="connection" show_hide={div_display} step={props.step}  from="p_11" to="p_13" />
                            <Connection id="p_connect_43"   class="connection" show_hide={div_display} step={props.step}  from="p_11" to="p_14" />
                            <Connection id="p_connect_44"   class="connection" show_hide={div_display} step={props.step}  from="p_11" to="p_15" />
                            <Connection id="p_connect_45"   class="connection" show_hide={div_display} step={props.step}  from="p_12" to="p_13" />
                            <Connection id="p_connect_46"   class="connection" show_hide={div_display} step={props.step}  from="p_12" to="p_15" />
                            <Connection id="p_connect_47"   class="connection" show_hide={div_display} step={props.step}  from="p_13" to="p_15" />
                            <Connection id="p_connect_48"   class="connection" show_hide={div_display} step={props.step}  from="p_14" to="p_15" />   
                            <Connection id="p_connect_49"   class="connection" show_hide={div_display} step={props.step}  from="p_16" to="p_8" />  
                            <Connection id="p_connect_50"   class="connection" show_hide={div_display} step={props.step}  from="p_16" to="p_9" />  
                            <Connection id="p_connect_51"   class="connection" show_hide={div_display} step={props.step}  from="p_10" to="p_6" />                 
                        </div>
                    </div>
                </motion.div>
        )
}    
export default Step2n3