import React, { useContext } from 'react'
import { HomeContext } from '../Context/HomeContext'
import '../App.css'

const CharacterInfo = () => {

  const {searchResults, saveCharInfo} = useContext(HomeContext) 

  const displayInfo = () => {
    return(
      <div>
        <br/>
        <div>Current Search:</div>
        <div className='info'>
          Name: {searchResults.name}
        </div>
        <div className='info'>
          Height: {searchResults.height}
        </div>
        <div className='info'>
          Weight: {searchResults.mass}
        </div>
        <div className='info'>
          Eye Color: {searchResults.eye_color}
        </div>
        <div className='info'>
          Skin Color: {searchResults.skin_color}
        </div>
        <div className='info'>
          Birth Year: {searchResults.birth_year}
        </div>
        <div className='button' onClick={() => {saveCharInfo()}}>Save Character</div>
      </div>
    )
  }

  const displayNull = () => {
    return(
      <div>
        
      </div>
    )
  }

  const displayError = () => {
    return(
      <div className='info'>
        Character is not found
      </div>
    )
  }

  return (
    <div>
      { 
        searchResults === '' 
          ? displayNull() 
          : searchResults === 'Character Not Found'
            ? displayError()
            : displayInfo()
      }
    </div>
  )
}

export default CharacterInfo