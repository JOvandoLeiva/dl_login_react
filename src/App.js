import './App.css';
import Login from './Components/Login';
import Alert from './Components/Alert';
import { useState } from 'react';

function App() {


  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('')


  const testLogin = (user) => {
    const validEmail = "usuario@email.com"
    const validPass = "password"
   
 
    
    //console.log(validEmail,validPass)
    if(user.email === validEmail && user.password === validPass )
    {
      setAlertMessage('Exitoso')
      setAlertType('success')

    }
    else
    {
      setAlertMessage('No se pudo u.u')
      setAlertType('danger')
     
    }
  }

  return (
    <div className="App">
     
       <div className='container p-3'>
          <header className="h1">Login con React</header>

         <div className='border p-3'>
          <Login onSubmit={testLogin}/>
          <Alert message={alertMessage} type={alertType} />
          </div>
       </div>
    </div>
  );
}

export default App;
