import { Fragment } from "react";

import Featured from './components/featured/featured.component';
import Apps from './components/apps/apps.component';

import { ReactComponent as Logo } from './assets/Logo.svg';
import './App.scss';


const App = () => {
  return(
    <Fragment>
      <header className="header">
        <div className="header__container">
          <Logo />
          <h1>AppRocket</h1>
          <p>Get access to free downloadable games in 2023.</p>
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