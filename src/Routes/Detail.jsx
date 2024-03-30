import {useParams} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
const {id} = useParams()
const [dentista, setDentista] = useState()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() =>{
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => setDentista(res.data))
  }, [])
  return (
    <>
      <h1>Detail Dentist {id} </h1>
      {dentista && <table>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
          <th>website</th>
        </tr>
        <tr>
          <th>{dentista.name}</th>
          <th>{dentista.email}</th>
          <th>{dentista.phone}</th>
          <th>{dentista.website}</th>
        </tr>
        
                  </table>}
    </>
  )
}

export default Detail