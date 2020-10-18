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
            <Route path="/" exact component={() => <OpenHome />} />
            <Route
              path="/about"
              exact
              component={() => (
                <OpenComponent component={About} location="About" />
              )}
            />
            <Route
              path="/contact"
              exact
              component={() => (
                <OpenComponent component={Contact} location="Contact" />
              )}
            />
            <Route
              path="/our-services"
              exact
              component={() => (
                <OpenComponent component={Services} location="Services" />
              )}
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

const OpenComponent = ({ component: Component, location }) => {
  const [open, setOpen] = React.useState(false);
  const loadingTime = 500;

  React.useEffect(() => {
    // if (location === "Home") {
    //   if (sessionStorage.getItem("firstTime") === null) {
    //     console.log("Yes");

    //     setTimeout(() => {
    //       setOpen(true);
    //     }, 3000);
    //   } else {
    //     setTimeout(() => {
    //       setOpen(true);
    //     }, loadingTime);
    //   }
    // } else {
    setTimeout(() => {
      setOpen(true);
    }, loadingTime);
    // }
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

const OpenHome = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      ) : null}

      <Home loading={loading} setLoading={setLoading} />
    </>
  );
};
