import React, {useState} from 'react'



const AddItems = () => {
 const [items, setitems] = useState([])
 
 const ItemElement = items.map((item, index)=> (
    <p
        key={index}
    >
        {item}
    </p>
 ))

 function handleAddItem(){
    setitems(prevItem=>[...prevItem, `Item ${prevItem.length + 1}`])
}

 function handleRemoveItem(){
    setitems(prevItem=>prevItem.slice(0, -1))
 }

 function handleClearItem(){
    setitems(prevItem=>prevItem.slice(-1, -1))
 }
  return (
    <> 
        <div className="flex flex-col bg-slate-400 p-4 rounded-md font-bold">
            {ItemElement}
        </div>
        <button onClick={handleAddItem} className='mt-8 bg-slate-400 py-2 px-8 rounded-full'>Add items</button>
        <button onClick={handleRemoveItem} className='mt-8 ml-8 bg-slate-400 py-2 px-8 rounded-full'>Remove items</button>
        <button onClick={handleClearItem} className='mt-8 ml-8 bg-slate-400 py-2 px-8 rounded-full'>Clear all</button>
    </>
  )
}


export default AddItems