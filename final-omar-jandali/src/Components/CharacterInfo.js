import React, { useContext } from 'react'
import { HomeContext } from '../Context/HomeContext'

const CharacterInfo = () => {

  const {searchResults} = useContext(HomeContext)

  const displayInfo = () => {
    return(
      <div>
        <div>Current Search:</div>
        <div>
          Name: {searchResults.name}
        </div>
        <div>
          Height: {searchResults.height}
        </div>
        <div>
          Weight: {searchResults.mass}
        </div>
        <div>
          Eye Color: {searchResults.eye_color}
        </div>
        <div>
          Skin Color: {searchResults.skin_color}
        </div>
        <div>
          Birth Year: {searchResults.birth_year}
        </div>
      </div>
    )
  }

  const displayNull = () => {
    return(
      <div>
        Search Char
      </div>
    )
  }

  return (
    <div>
      {searchResults === '' ? displayNull() : displayInfo()}
    </div>
  )
}

export default CharacterInfo