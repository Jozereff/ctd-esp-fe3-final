import { useState } from "react";


const Form = () => {
  const [paciente, setPaciente] = useState({
    nombre: "",
    email: ""
})
  //Aqui deberan implementar el form completo con sus validaciones
  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(paciente.nombre.length > 2 && paciente.email.length > 2){
        setShow(true)
        setErr(false)    
    } else{
        setErr(true)
        setShow(false)}
    
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label >Nombre de paciente: </label>
        <input type="text" onChange={({target}) => setPaciente({...paciente, nombre: target.value})} placeholder="Full name" />
        <label htmlFor=""></label>
        <input type="email" onChange={({target}) => setPaciente({...paciente, email: target.value})} placeholder="Email"/>
        <button type="submit">Send</button>
      </form>
      {show &&<h4>gracias {paciente.nombre}, te contactaremos lo antes posible via mail!.</h4>}
      {err && <p> Por favor verifique su información nuevamente.</p>}
    </div>
  );
};

export default Form;
