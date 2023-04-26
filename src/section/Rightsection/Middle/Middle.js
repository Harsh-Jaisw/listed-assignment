import React from 'react'
import style from "./Middle.module.css"
import Graph from '../../../Atoms/Graph'
import downarrow from "../../../Assests/downarrow.png"
function Middle() {
  return (
    <div className={style.midbox}>
       <div className={style.firstLine}>
          {" "}
          <p className={style.para}>Activities </p>
          <p className={style.seeAll}>
            May - June 2021 <img src={downarrow} />
          </p>
        </div>
     
        <Graph/>
        
    </div>
  )
}

export default Middle
