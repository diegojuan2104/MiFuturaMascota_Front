import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import axios from "axios";

import IngresarPage from "./pages/ingresar/ingresar_page.component";
import RegistrarsePage from "./pages/registrarse/registrarse_page.component";
import PerfilPage from "./pages/perfil/perfil_page.component";
import AdopcionPage from "./pages/adopcion_grid/adopcion_page.component";
import AdopcionDetalles from "./pages/adopcion_detalles/adopcion_detalles_page.component";
import DarEnAdopcion from "./pages/dar_en_adopcion/dar_en_adopcion_page.component";
import Inicio from "./pages/inicio/inicio_page.component";

//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [usuario, establecerUsuarioActual] = useState([]);

  const [usuarioAutenticado, autenticarUsuario] = useState(false);

  return (
    <Router>
      <Provider store={store}>
        <Header usuarioAutenticado={usuarioAutenticado} />
        <Switch>
          <Route exact path="/AdopcionPage" component={IngresarPage} />
          <Route exact path="/ingresar" component={IngresarPage} />
          <Route exact path="/registrarse" component={RegistrarsePage} />
          <Route
            exact
            path="/perfil"
            component={PerfilPage}
            usuario={usuario}
          />

          <Route
            exact
            path="/adopcion"
            component={AdopcionPage}
            usuario={usuario}
          />
          <Route
            exact
            path="/adopcion/detalles_adopcion"
            component={AdopcionDetalles}
            usuario={usuario}
          />

          <Route
            exact
            path="/dar_en_adopcion"
            component={DarEnAdopcion}
            usuario={usuario}
          />

          <Route
            exact
            path="/dar_en_adopcion"
            component={DarEnAdopcion}
            usuario={usuario}
          />

          <Route exact path="/" component={Inicio} usuario={usuario} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
