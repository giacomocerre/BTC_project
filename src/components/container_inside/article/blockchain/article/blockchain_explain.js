import React from "react"
import { motion } from "framer-motion"

function Explain() {
      
      return (
        <motion.h1
            id="motion"
            style={{ width:"100px", height:"100px", background:"#000"}}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >ciao</motion.h1>
      )
}    
export default Explain