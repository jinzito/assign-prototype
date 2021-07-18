import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

import './App.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import AssignPrototypePage from "./app/assign-prototype/AssignPrototypePage";
import {Toolbar} from "primereact/toolbar";

const items = [
  { label: 'CEM' },
  { label: 'Users' },
  { label: 'List' },
  { label: 'Assignments' },
];

const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact' }

function App() {

  const breadcrumbs = <BreadCrumb model={items} home={home}/>

  return (
    <div className="App">
      <Toolbar left={breadcrumbs}/>
      <AssignPrototypePage/>
    </div>
  );
}

export default App;