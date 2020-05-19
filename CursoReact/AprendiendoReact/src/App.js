import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';


//Importar Componentes
import MyComponent from './Components/MyComponent';





function Helloword(name , age){
  var presentation = <div>
   <h2>hola soy {name}</h2>
    <h3>Tengo {age}</h3>
  </div>
  
  
  return presentation ;
}




function App() {
 var name = "wendy";



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo.
        </p>
     {Helloword(name ,20)}

       
      </header>
      <section  className="components">

      <MyComponent/>
      <MyComponent/>


      </section>
    </div>
  );
}

export default App;
