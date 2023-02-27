import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

export const HomeContext = createContext(null)

export const HomeContextProvider = ({children}) => {
  
  const [searchId, setSearchId] = useState(1)
  const [searchResults, setSearchResults] = useState('')
  const [savedCharacters, setSavedCharacters] = useState([])

  const getCharInfo = () => {
    searchId === '17' 
    ? setSearchResults('Character Not Found') 
    : searchChar()
  }

  const searchChar = () => {
    let url = 'https://swapi.dev/api/people/' + searchId + '/'
    try{
      axios.get(url)
        .then((response) => {
          setSearchResults(response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }catch(error){
      console.error(error)
    }
  }

  const saveCharInfo = () => {
    searchResults === '' 
    ? console.log('') 
    : grabCharHomeworld()
  }

  const grabCharHomeworld = () => {
    let obj = {}
    axios.get(searchResults.homeworld)
      .then((response) => {
        obj.char = searchResults
        obj.homeworld = response.data
        grabAllCharFilms(obj)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const grabAllCharFilms = (obj) => {
    let films = []
    let filmList = []

    searchResults.films.map((film) => {
      films.push(film)
    })

    const requests = films.map((url) => axios.get(url));
    axios.all(requests)
      .then((responses) => {
        responses.forEach((response) => {
          filmList.push(response.data)
        })
        obj.films = filmList
        setSavedCharacters([...savedCharacters, obj])
      })
  }
  
  return (
    <HomeContext.Provider value={{searchId, 
                                  searchResults,
                                  savedCharacters,
                                  setSearchId, 
                                  getCharInfo,
                                  saveCharInfo}}>
      {children}
    </HomeContext.Provider>
  )
}