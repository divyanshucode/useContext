import React from 'react'
import Items from './component/items'
import Cart from './component/cart'


function App() {


  return (
   <div className='App'>
      <Items name="Mac Book" price={1500} />
      <Items name="pendrive" price={20} />
      <Items name="mouse" price={50} />
      <Cart />
   </div>
  )
}

export default App
