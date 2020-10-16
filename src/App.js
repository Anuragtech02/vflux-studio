import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar, Footer, Home } from "./components";

const App = () => {
  return (
    <div className={styles.container}>
      <Router>
        <div className={styles.nav}>
          <Navbar />
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <div className={styles.footer}>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
