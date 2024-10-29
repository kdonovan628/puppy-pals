import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

const App = () => {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  console.log(featuredPup)
  const handleClick = () => {
  }

  return (
    <div className="App">
      <p>{featPupId && <p> {featPupId} </p>}</p>
      {puppies.map((puppy) => {
        return (
          <p onClick={()=>{ setFeatPupId(puppy.id)}}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App
