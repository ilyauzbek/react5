import React from 'react'
import './Wrapper.scss'
import Card from '../Card/Card'

const Wrapper = () => {
  return (
    <>

    <div className="wrapper">
     <Card title="DOTA 2" text="5x5 Turbo" num='1'/>
     <Card title="DOTA 3" text="1x1 Solo Mid" num='2'/>
     <Card title="CS:GO" text="Soon" num='3'/>
    </div>
    </>
  )
}

export default Wrapper