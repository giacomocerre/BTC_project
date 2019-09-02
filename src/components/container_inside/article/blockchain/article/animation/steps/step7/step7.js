import React from "react"
import Point from "../animation_component/point"
import BlockConnection from "../animation_component/block_connection"

function Step7(props) {
    var mn_display = "flex"
    if (props.step === 7){
        mn_display = "flex"
    }else{
        mn_display = "none"
    }
    console.log(mn_display)  
        if (props.step >= 7){
            return (
                    <div id="flex_mn">
                        <img id="check_icon" src="../img/check.svg" alt="check" style={{display:mn_display}}/>
                        <div id="m_n">
                            <Point step={props.step} id="mn_1"  show_hide={mn_display} top={100} left={130}  color={props.color}/>   
                            <Point step={props.step} id="mn_2"  show_hide={mn_display} top={200} left={100}  color={props.color}/>   
                            <Point step={props.step} id="mn_3"  show_hide={mn_display} top={320} left={200}  color={props.color}/>  
                            <Point step={props.step} id="mn_4"  show_hide={mn_display} top={480} left={225}  color={props.color}/>  
                            <Point step={props.step} id="mn_5"  show_hide={mn_display} top={150} left={480}  color={props.color}/>
                            <Point step={props.step} id="mn_6"  show_hide={mn_display} top={115} left={440}  color={props.color}/>
                            <Point step={props.step} id="mn_7"  show_hide={mn_display} top={240} left={430}  color={props.color}/>
                            <Point step={props.step} id="mn_8"  show_hide={mn_display} top={290} left={530}  color={props.color}/>
                            <Point step={props.step} id="mn_9"  show_hide={mn_display} top={420} left={520}  color={props.color}/>
                            <Point step={props.step} id="mn_10" show_hide={mn_display} top={110} left={600}  color={props.color}/>
                            <Point step={props.step} id="mn_11" show_hide={mn_display} top={140} left={800}  color={props.color}/>
                            <Point step={props.step} id="mn_12" show_hide={mn_display} top={200} left={590}  color={props.color}/>
                            <Point step={props.step} id="mn_13" show_hide={mn_display} top={170} left={690}  color={props.color}/>
                            <Point step={props.step} id="mn_15" show_hide={mn_display} top={275} left={715}  color={props.color}/>
                            <Point step={props.step} id="mn_16" show_hide={mn_display} top={400} left={280}  color={props.color}/>
                            {/* block connection */}
                            <BlockConnection   block="m_block_1"   step={props.step}  from="m_5" to="mn_1"/>
                            <BlockConnection   block="m_block_2"   step={props.step}  from="m_5" to="mn_2"/>
                            <BlockConnection   block="m_block_3"   step={props.step}  from="m_5" to="mn_3"/>
                            <BlockConnection   block="m_block_4"   step={props.step}  from="m_5" to="mn_4"/>
                            <BlockConnection   block="m_block_5"   step={props.step}  from="m_5" to="mn_5"/>
                            <BlockConnection   block="m_block_6"   step={props.step}  from="m_5" to="mn_6"/>
                            <BlockConnection   block="m_block_7"   step={props.step}  from="m_5" to="mn_7"/>
                            <BlockConnection   block="m_block_8"   step={props.step}  from="m_5" to="mn_8"/>
                            <BlockConnection   block="m_block_9"   step={props.step}  from="m_5" to="mn_9"/>
                            <BlockConnection   block="m_block_10"  step={props.step}  from="m_5" to="mn_10"/>
                            <BlockConnection   block="m_block_11"  step={props.step}  from="m_5" to="mn_11"/>
                            <BlockConnection   block="m_block_12"  step={props.step}  from="m_5" to="mn_12"/>
                            <BlockConnection   block="m_block_13"  step={props.step}  from="m_5" to="mn_13"/>
                            <BlockConnection   block="m_block_15"  step={props.step}  from="m_5" to="mn_15"/>
                            <BlockConnection   block="m_block_16"  step={props.step}  from="m_5" to="mn_16"/>
                        </div>
                    </div>
            )
        }else{
            return(false)
        }
}    
export default Step7