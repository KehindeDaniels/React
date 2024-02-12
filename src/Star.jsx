import React from 'react'

const Star = (props) => {
  return (
    <>
        hello
        <img src={props.src} onClick={props.onclick} className='w-[100px]' alt="" />
    </>
  )
}

export default Star