import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     
       <div class='container p-3'>
          <header class="h1">Login con React</header>

         <div class='border p-3'>
            <form>
              <div class="text-start">
                  <label for="exampleInputEmail1" class="form-label mb-2 m-2">Email address</label>
                    <input type="email" placeholder="Escriba aquí su correo" class="form-control m-2" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                   <div class="mb-3">
                     <label for="exampleInputPassword1" class="form-label m-2">Password</label>
                       <input type="password" class="form-control m-2" id="exampleInputPassword1" placeholder="Escriba aquí su contraseña"/>
                   </div>
                  
              </div>
                   <div class="mb-4">
                    <button type="submit" class="btn btn-primary">Validar</button>
                   </div>
           </form>
          </div>
       </div>
    </div>
  );
}

export default App;
