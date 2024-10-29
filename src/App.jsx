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
      {featPupId && featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      {puppies.map((puppy) => (
        <p key={puppy.id} onClick={() => setFeatPupId(puppy.id)}>
          {puppy.name}
        </p>
      ))}
    </div>
  );
}

export default App
