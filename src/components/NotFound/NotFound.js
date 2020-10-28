import React from "react";
import styles from "./NotFound.module.css";
import { withRouter } from "react-router";
import Helmet from "react-helmet";

const NotFound = ({ history }) => {
  const [timer, setTimer] = React.useState(5);
  React.useEffect(() => {
    setTimeout(() => {
      if (!timer) {
        history.push("/");
      }
      setTimer(timer - 1);
    }, 1000);
  }, [history, timer]);

  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>Looks like you're lost :(</h2>
      <p>
        Redirecting to homepage in <span>{timer}</span>
      </p>
      <Helmet>
        <title>404</title>
      </Helmet>
    </div>
  );
};

export default withRouter(NotFound);
