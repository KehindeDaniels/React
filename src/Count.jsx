import React, {useState} from 'react'
import SetCount from './SetCount'

const Count = (props) => {
    const [count, setCount] = useState(0)
    
    function addCount(){
        setCount(prevCount=> prevCount+1)
    }
    function removeCount(){
        setCount(prevCount=>prevCount-1)
    }
  return (
    <>
        <div className="count flex items-end">
            <div onClick={addCount} className="add  text-2xl font-bold w-28 h-28 bg-slate-400 rounded-full grid place-content-center">+</div>
            <SetCount
                number={count}
            />
            <div onClick={removeCount} className="add  text-2xl font-bold w-28 h-28 bg-slate-400 rounded-full grid place-content-center">-</div>

            <p>count {props.Uname}</p>
        </div>
    </>
  )
}

export default Count