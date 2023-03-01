// create your App component here
import React, { useEffect, useState } from 'react'

const App = () => {
    const [data, setdata] = useState()
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=> res.json())
        .then(data => setdata(data))
    },[])
    console.log(data);
  return (
    <div>
        {data? <img src={data.message} alt="A Random Dog" />: <p>Loading..</p>}
    </div>
  )
}

export default App