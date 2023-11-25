import React from 'react'
import "../styles/Cubo.css"

const Cubo = () => {
  return (
    <>
<div class="cube-loader">
  <div class="cube-top"></div>
  <div class="cube-wrapper">
    <span style={{transform:"--i:0"}} class="cube-span"></span>
    <span style={{transform:"--i:1"}} class="cube-span"></span>
    <span style={{transform:"--i:2"}} class="cube-span"></span>
    <span style={{transform:"--i:3"}} class="cube-span"></span>
  </div>
</div>



    </>
  )
}

export default Cubo