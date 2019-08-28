import React from "react"
import Miner from "../animation_component/miner"
import MinerConnection from "../animation_component/miner_connection"

function Step5(props){
    var mc_bottom = "200%";
    var m_hide="block";
    var img_miner="../img/miner.svg"
    if ( props.step >= 5 ){
        if(props.step >= 6){
            mc_bottom = "103.3%"
            m_hide="none";
            img_miner="../img/miner_g.svg"
        }
        return(
                <div id="flex_miner" style={{display:props.display}}>
                    <div id="m_c" style={{bottom: mc_bottom}}> 
                        <Miner step={props.step} id="m_1"  top={100} left={100}   color={props.color} show_hide={m_hide} img={img_miner}/>
                        <Miner step={props.step} id="m_2"  top={250} left={430}   color={props.color} show_hide={m_hide} img={img_miner}/>
                        <Miner step={props.step} id="m_3"  top={100} left={750}   color={props.color} show_hide={m_hide} img={img_miner}/>
                        <Miner step={props.step} id="m_4"  top={350} left={200}   color={props.color} show_hide={m_hide} img={img_miner}/>
                        <Miner step={props.step} id="m_5"  top={420} left={900}   color={props.color} img={img_miner}/>
                        <Miner step={props.step} id="m_6"  top={200} left={650}   color={props.color} show_hide={m_hide} img={img_miner}/>
                        <Miner step={props.step} id="m_7"  top={200} left={90}    color={props.color} show_hide={m_hide} img={img_miner}/>
                        <Miner step={props.step} id="m_8"  top={50} left={350}    color={props.color} show_hide={m_hide} img={img_miner}/>
                        <Miner step={props.step} id="m_9"  top={420} left={240}   color={props.color} show_hide={m_hide} img={img_miner}/>
                        <Miner step={props.step} id="m_10"  top={400} left={520}  color={props.color} show_hide={m_hide} img={img_miner}/>
                        {/* CONNECTION LINE  - STEP 5 */}
                        <MinerConnection   plane="plane_1"   step={props.step}  from="p_6" to="m_1"/>
                        <MinerConnection   plane="plane_2"   step={props.step}  from="p_6" to="m_2"/>
                        <MinerConnection   plane="plane_3"   step={props.step}  from="p_6" to="m_3"/>
                        <MinerConnection   plane="plane_4"   step={props.step}  from="p_6" to="m_4"/>
                        <MinerConnection   plane="plane_5"   step={props.step}  from="p_6" to="m_5"/>
                        <MinerConnection   plane="plane_6"   step={props.step}  from="p_6" to="m_6"/>
                        <MinerConnection   plane="plane_7"   step={props.step}  from="p_6" to="m_7"/>
                        <MinerConnection   plane="plane_8"   step={props.step}  from="p_6" to="m_8"/>
                        <MinerConnection   plane="plane_9"   step={props.step}  from="p_6" to="m_9"/>
                        <MinerConnection   plane="plane_10"  step={props.step}  from="p_6" to="m_10"/>

                        
                    </div>
                </div>
        )
    }else{
        return(false);
    }
}

export default Step5