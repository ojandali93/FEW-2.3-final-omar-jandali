import React, { useContext } from 'react'

import {HomeContext} from '../Context/HomeContext'

export const Search = () => {

  const {searchId, setSearchId, getCharInfo} = useContext(HomeContext)

  return (
    <div>
      <form>
        <input 
          type="number"
          min={1}
          max={83}
          value={searchId}
          onChange={(e) => {setSearchId(e.target.value)}}
        />
      </form>
      <button onClick={() => {getCharInfo()}}>
        Get Info
      </button>
    </div>
  )
}
