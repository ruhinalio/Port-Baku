import React from 'react'
import { News, Reserved } from "./Index"

const MenuEvents = () => {
  return (
    <div>
      <h1>eger xebelr lazimdisa o zaman 
        <a href="#news" onClick={()=>{<News/>}}>Xeberler</a>
      </h1>
      <h1>eger daban dasi lazimdirsa
        <a href="#reserved" onClick={()=>{<Reserved/>}}>Rezerv ucundayna</a>
      </h1>
    </div>
  )
}

export default MenuEvents