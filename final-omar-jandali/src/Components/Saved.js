import React, { useContext } from 'react'
import '../App.css'

import { HomeContext } from '../Context/HomeContext'

const Saved = () => {

  const {savedCharacters} = useContext(HomeContext)

  const displayChar = () => {
    return(
      <div>
        <br />Saved Characters: 
        {
          savedCharacters.map((char) => {
            return(
              <div>
                <div className='info'>
                  Name: {char.char.name}
                </div>
                <div className='info'>
                  Homeworld: {char.homeworld.name}
                </div>
                <div className='info'>
                  Films: 
                  {
                    char.films.map((film) => {
                      return(
                        <div className='info'>
                          {film.title}
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              
            )
          })
        }
      </div>
    )
  }

  const displayNull = () => {
    return(
      <div>

      </div>
    )
  }

  return (
    <div>
      {
        savedCharacters.length === 0 ? displayNull() : displayChar()
      }
    </div>
  )
}

export default Saved