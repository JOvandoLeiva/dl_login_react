import './App.css';
import Login from './Components/Login';
import Alert from './Components/Alert';

function App() {

  const testLogin = (user) => {
    const validEmail = "usuario@email.com"
    const validPass = "password"
    //console.log(validEmail,validPass)
    if(user.email === validEmail && user.password === validPass )
    {
      //<Alert />
      alert("exitoso")
    }
    else
    {
      <Alert />
      alert("eeenngh")
    }
  }

  return (
    <div className="App">
     
       <div className='container p-3'>
          <header className="h1">Login con React</header>

         <div className='border p-3'>
          <Login onSubmit={testLogin}/>
            
          </div>
       </div>
    </div>
  );
}

export default App;
