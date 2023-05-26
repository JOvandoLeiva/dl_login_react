//El componente Login debe tener un formulario con un campo para el email y otro para la contraseña del usuario, 
// almacenará los estados de los inputs a través de useState y relaciónalos con el evento onChange.
//  incluir un botón para procesar el formulario, el botón debe estar deshabilitado mientras los campos email y contraseña estén vacíos. (1 Punto)
// ○ Puedes utilizar disabled y validar los campos con trim().
// El botón debe validar mediante el evento onSubmit si el email y la contraseña son correctos
import React, { useState } from "react";

const Login = ( {onSubmit}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const valid = (e) => {
     // e.preventDefaul() -- esto mareaba la ejecución
      console.log(email,password)
      onSubmit({email,password})
      
    }
    return (
            
          <form onSubmit={valid}>
              <div className="text-start">
                 <label className="form-label mb-2 m-2"  htmlFor="email">Correo electrónico</label>
                <input type="email" placeholder="Escriba aquí su correo" className="form-control m-2" htmlFor="email"  id="email"  onChange={(e)=>setEmail(e.target.value)}/>
                </div>
               <div className="mb-3">
                 <label className="form-label m-2" htmlFor="password">Contraseña</label>
                   <input type="password" className="form-control m-2"  htmlFor="password" id="password" placeholder="Escriba aquí su contraseña" onChange={(p)=>setPassword(p.target.value)}/>
               </div>
                   <div className="mb-4">
                     <button type="submit" className="btn btn-primary" disabled={!email.trim() || !password.trim()}>Validar</button>
                  </div>
               </form>
            )
    ;
    
};

export default Login;