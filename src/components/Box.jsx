import React, {useState} from 'react'
import boxData from './boxes'
import BoxDiv from './BoxDiv'


const Box = () => {
    const [boxes, setBox] =useState(boxData)

    
    // function handleBg(){
    //     setBox(prevBox=>[...prevBox, prevBox.on = !prevBox.on])
    // }
    // let bg = boxes.on && 'bg-black'

    function toggle(id){
        console.log(id)
    }
    

    const box = boxes.map(boxItem=>(
        <BoxDiv
            handleClick={toggle}
            key={boxItem.id}
            id={boxItem.id}
            on={boxItem.on}
        />
    ))
  return (
    <div className=' grid grid-cols-3 gap-8'>
      {box}  
    </div>
  )
}

export default Box