import React, { Fragment, useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/header.component"

import IngresarPage from "./pages/ingresar/ingresar_page.component"


function App() {
  return (
    <Fragment>
      <Header/>
      <Switch>
        <Route exact path="/" component={IngresarPage}></Route>
      </Switch>
    </Fragment>
  );
}

export default App;
