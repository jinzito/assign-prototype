import React from 'react';
import {BreadCrumb} from 'primereact/breadcrumb';
import {NavLink, Route, Switch} from 'react-router-dom'
import './App.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Toolbar} from "primereact/toolbar";
import AssignPrototypePage from "./app/assign-prototype/AssignPrototypePage";
import AssignPrototypePage2 from "./app/assign-prototype/AssignPrototypePage2";
import AssignPrototypePage3 from "./app/assign-prototype/AssignPrototypePage3";
import AssignPrototypePage4 from "./app/assign-prototype/AssignPrototypePage4";

const items = [
  {label: 'CEM'},
  {label: 'Users'},
  {label: 'List'},
  {label: 'Assignments'},
];

const home = {icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact'}

function App() {

  const breadcrumbs = <BreadCrumb model={items} home={home}/>

  return (
    <div className="App">
      <Toolbar left={breadcrumbs}/>
      <Switch>
        <Route path="/" exact={true}>
          <div className="flex flex-column">
            <NavLink className="p-1" to={"/1"}> Demo 1 </NavLink>
            <NavLink className="p-1" to={"/2"}> Demo 2 </NavLink>
            <NavLink className="p-1" to={"/3"}> Demo 3 </NavLink>
            <NavLink className="p-1" to={"/4"}> Demo 4 </NavLink>
          </div>
        </Route>
        <Route path="/1" exact={true}>
          <AssignPrototypePage/>
        </Route>
        <Route path="/2" exact={true}>
          <AssignPrototypePage2/>
        </Route>
        <Route path="/3" exact={true}>
          <AssignPrototypePage3/>
        </Route>
        <Route path="/4" exact={true}>
          <AssignPrototypePage4/>
        </Route>

      </Switch>
      {/*<AssignPrototypePage/>*/}
    </div>
  );
}

export default App;