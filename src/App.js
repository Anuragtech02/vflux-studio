import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar, Footer, Home, Contact } from "./components";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Navbar />
      </div>
      <div className={styles.page}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/our-services" exact component={Home} />
          </Switch>
        </Router>
      </div>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
