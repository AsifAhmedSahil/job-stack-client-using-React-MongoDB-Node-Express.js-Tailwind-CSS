import React, { useState } from 'react'
import Bannar from '../../assets/Components/Bannar'

const Home = () => {
  const [query, setQuery] = useState("");

  const handleInput = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <Bannar query={query} handleInput={handleInput} />
    </div>
  )
}

export default Home
