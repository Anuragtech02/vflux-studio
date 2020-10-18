import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import { CircularProgress } from "@material-ui/core";
import { Navbar, Footer } from "./components";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Services = lazy(() => import("./components/Services/Services"));
const Contact = lazy(() => import("./components/Contact/Contact"));

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className={styles.loading}>
            <CircularProgress />
          </div>
        }
      >
        <div className={styles.nav}>
          <Navbar />
        </div>
        <div className={styles.page}>
          <Switch>
            <Route
              path="/"
              exact
              component={() => <OpenComponent component={Home} />}
            />
            <Route
              path="/about"
              exact
              component={() => <OpenComponent component={About} />}
            />
            <Route
              path="/contact"
              exact
              component={() => <OpenComponent component={Contact} />}
            />
            <Route
              path="/our-services"
              exact
              component={() => <OpenComponent component={Services} />}
            />
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

const OpenComponent = ({ component: Component }) => {
  const [open, setOpen] = React.useState(false);
  const loadingTime = 500;

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, loadingTime);
  }, []);

  return (
    <>
      {open ? (
        <Component />
      ) : (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};
