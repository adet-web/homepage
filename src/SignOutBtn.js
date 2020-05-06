import React from "react";
import { useHistory } from "react-router-dom";
import AppContext from "./appContext";

export default () => {
  let history = useHistory();
  let context = React.useContext(AppContext);

  return (
    <button
      onClick={() => {
        context.updateLoginState({
          loggedIn: false,
        });
        history.push("/");
      }}
    >
      Sign out
    </button>
  );
};

