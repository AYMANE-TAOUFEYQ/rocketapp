import { Fragment } from "react";

import Featured from './components/featured/featured.component';
import Apps from './components/apps/apps.component';

import logo from './assets/logo192.png';
import './App.scss';


const App = () => {
  return(
    <Fragment>
      <header className="header">
        <div>
          <img
            src={logo}
            alt="logo"
          />
          <h1>AppRocket</h1>
          <p>The ultimate app AppRocket Download or get your coins free 2023</p>
        </div>
      </header>
      <main>
        <Featured />
        <Apps />
      </main>
    </Fragment>
  );
}

export default App;