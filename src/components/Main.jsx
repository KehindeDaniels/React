import React from 'react'

const listItems = [
    {
        id: 0,
        title: 'Was first reeased in 2013'
    },
    {
        id: 1,
        title: 'Was originally created by Jordan Walke'
    },
    {
        id: 2,
        title: 'Has well over 100K stars on GitHub'
    },
    {
        id: 3,
        title: 'Is maintained by Facebook'
    },
    {
        id: 4,
        title: 'Powers thousands of enterprise apps, including mobile apps'
    }
]

export const Main = () => {
    const listArray = listItems.map((listItem)=> (
        <li key={listItem.id} className='text-base list-disc list-inside marker:text-clr-extra-light marker:text-3xl ml-4 bg'>{listItem.title}</li>
    ))
  return (
    <>
        <main className='px-6 py-16 bg-clr-light text-white -mt-1 bg-card bg-no-repeat bg-right bg-16'>
            <h1 className='text-4xl font-bold mb-7'>Fun Facts About React</h1>
            <ul>
                {listArray}
            </ul>
        </main>
    </>
  )
}

