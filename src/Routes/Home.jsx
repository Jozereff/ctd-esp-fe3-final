import Card from '../Components/Card'
import axios from "axios"
import { useEffect, useState } from "react"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  console.log(useState)
  const[list, setList]= useState([])
  
  
  useEffect(() =>{
  axios("https://jsonplaceholder.typicode.com/users")
  .then(res => setList(res.data))
}, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {list.map((item) => <Card key={item.id} item={item}/>)}
      
      </div>
    </main>
  )
}

export default Home