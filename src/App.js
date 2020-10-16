import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar, Footer, Home, Contact } from "./components";

const App = () => {
  return (
    <div className={styles.container}>
      <Router>
        <div className={styles.nav}>
          <Navbar />
        </div>
        <div className={styles.page}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/our-services" exact component={Home} />
          </Switch>
        </div>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </Router>
    </div>
  );
};

export default App;
