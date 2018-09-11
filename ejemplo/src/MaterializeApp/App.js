import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Saludar from "./Saludar";
import Principal from "./Principal";
import Bedu from "./Bedu";
import Header from "./Header";
import Mesa from "../Mesa/components/App.js";
import Juego from "../Juego/Components/App.js";
import Cuadros from "../Cuadros/components/App.js";


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
              <Header />
              <Route exact path='/' component={Principal} />
              <Route exact path='/saludar' component={Saludar} />
              <Route exact path='/saludar/bedu' component={Bedu} />
              <Route exact path='/saludar/bedu/mesa' component={Mesa} />
              <Route exact path='/saludar/bedu/mesa/cuadros' component={Cuadros} />
              <Route exact path='/saludar/bedu/mesa/cuadros/juego' component={Juego} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
