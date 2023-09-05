import React from 'react';
import './App.module.scss';
import styles from "./App.module.scss"
import "./color-constants.css"
import Router from "./components/Router";

function App() {
  return (
    <div className={styles.App}>
        <Router/>
    </div>
  );
}

export default App;
