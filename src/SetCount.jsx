import React from 'react'

const SetCount = (props) => {
  return (
     <div className="count text-4xl w-52 h-52 bg-slate-500 rounded-full grid place-content-center">{props.number}</div>
  )
}

export default SetCount