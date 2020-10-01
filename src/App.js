import React, { Fragment, useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import axios from "axios";

import IngresarPage from "./pages/ingresar/ingresar_page.component";
import RegistrarsePage from "./pages/registrarse/registrarse_page.component";
import PerfilPage from "./pages/perfil/perfil_page.component";

function App() {
  const [usuario, establecerUsuarioActual] = useState([]);

  const [usuarioAutenticado, autenticarUsuario] = useState(false);

  return (
    <Fragment>
      <Header 
        usuarioAutenticado = {usuarioAutenticado}
      />
      <Switch>
        <Route
          exact
          path="/ingresar"
          component={IngresarPage}
        />
        <Route
          exact
          path="/registrarse"
          component={RegistrarsePage}
        />
        <Route 
          exact path="/perfil" 
          component={PerfilPage}
          usuario={usuario}
          />
      </Switch>
    </Fragment>
  );
}

export default App;
