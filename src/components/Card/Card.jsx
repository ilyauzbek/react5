import React from 'react'
import './Card.scss'

const Card = ({ title, text, num }) => {
  return (
   <>


   <div className="card card-1" style={{backgroundImage:`url(/card-${num}.jpg)`}}>
    <h2>{title}</h2>
    <h3>{text}</h3>

    <div className="card__box">

        <div>
            <img src="/icon-1.svg" alt="" />
            <p>РЕЗУЛЬТАТЫ</p>
        </div>

     

        <div>
            <img src="/icon-2.svg" alt="" />
            <p>РАСПИСАНИЕ</p>
        </div>

        <div>
            <img src="/icon-3.svg" alt="" />
            <p>ТРАНСЛЯЦИИ</p>
       </div>

   </div>

   </div>

   </>
  )
}

export default Card