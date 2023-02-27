import React, {useState, createContext} from 'react'

const HomeContext = createContext()

export const HomeContextProvider = ({children}) => {
  
  const [searches, setSearches] = useState({})
  const [selected, setSelected] = useState({})
  
  return (
    <HomeContext.Provider value={{}}>
      {children}
    </HomeContext.Provider>
  )
}