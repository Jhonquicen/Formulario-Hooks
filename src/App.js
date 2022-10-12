import React from "react";
import Formulario from "./componentes/Formulario/Formulario";





class App extends React.Component {

  render() {

    /* AplicacionSegundaPalabra -> PascalCase
      onClick -> camelCase
    */

    return(
      <div className="container">
        <h1>Formulario</h1>

        <Formulario />

      </div>
    );
  }

}

export default App;
