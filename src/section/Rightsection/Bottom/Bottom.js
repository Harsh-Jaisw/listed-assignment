import React from 'react'
import style from "./Bottom.module.css"
import arrow from "../../../Assests/arrow.png"
import { PieChart } from '../../../Atoms/Chart'
function Bottom() {
    const infoArr=[{schedule:"Meeting with suppliers from Kuta Bali",time:'14.00-15.00',location:"at Sunset Road, Kuta, Bali",color:'#9BDD7C'},{schedule:"Check operation at Giga Factory 1 ",time:'18.00-20.00',location:"at Central Jakarta",color:'#6972C3'}]
  return (
    <div className={style.mainbox}>
      <div className={style.box1}>
      <div className={style.firstLine}> <p className={style.para}>Top Products </p>
        </div>
        <PieChart/>
      </div>
      <div className={style.box2}>
        <div className={style.firstLine}> <p className={style.para}>Today’s schedule </p>
          <p className={style.seeAll}>See All <img src={arrow}/></p></div>
          <div className={style.datas}>
            {
                infoArr.map((item,i)=>{
                    return(
                        <div className={style.data} style={{borderLeft:`5px solid ${item.color}`}} key={i}>
                        <span className={style.schedule}>{item.schedule}</span>
                        <span className={style.time}>{item.time}</span>
                        <span className={style.location}>{item.location}</span>
                        </div>
                    )
                })
            }
          </div>
      </div>
    </div>
  )
}

export default Bottom
