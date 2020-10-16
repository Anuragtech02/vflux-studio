import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Navbar, Footer } from "./components";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Services = lazy(() => import("./components/Services/Services"));
const Contact = lazy(() => import("./components/Contact/Contact"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={Loading}>
        <div className={styles.nav}>
          <Navbar />
        </div>
        <div className={styles.page}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/our-services" exact component={Services} />
          </Switch>
        </div>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </Suspense>
    </Router>
  );
};

export default App;

const Loading = () => {
  return (
    <div className={styles.loading}>
      <CircularProgress />
    </div>
  );
};
