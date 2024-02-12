import Count from './Count.jsx'
import AddItems from './components/AddItems.jsx'
import Header from './components/Header.jsx'
import { Main } from './components/Main.jsx'
import Profile from './components/Profile.jsx'

import { useState } from 'react'


export default function App() {
  const [userName, setUSerName] = useState('joe')
  return (
    <div className="max-w-[550px] mx-auto my-8 bg-gradient-to">
     {/* <Header/> */}
     {/* <Main/> */}
     {/* <AddItems/> */}
     {/* <Profile/> */}
     {/* <Count/> */}
    </div>
  )
}