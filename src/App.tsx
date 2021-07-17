import React from 'react';

import './App.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import AssignPrototypePage from "./app/assign-prototype/AssignPrototypePage";

function App() {
  return (
    <div className="App">
      <AssignPrototypePage/>
    </div>
  );
}

export default App;
