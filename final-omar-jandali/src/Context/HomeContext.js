import React, {useState, createContext} from 'react'
import axios from 'axios'

export const HomeContext = createContext(null)

export const HomeContextProvider = ({children}) => {
  
  const [searchId, setSearchId] = useState(1)
  const [searchResults, setSearchResults] = useState('')

  const getCharInfo = () => {
    let url = 'https://swapi.dev/api/people/' + searchId + '/'
    try{
      axios.get(url)
        .then((response) => {
          setSearchResults(response.data)
          console.log(response)
        })
        .catch((error) => {
          console.error(error)
        })
    }catch(error){
      console.error(error)
    }
  }
  
  return (
    <HomeContext.Provider value={{searchId, 
                                  searchResults,
                                  setSearchId, 
                                  getCharInfo}}>
      {children}
    </HomeContext.Provider>
  )
}