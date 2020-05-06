import React from "react";
import { useHistory } from "react-router-dom";
import AppContext from "./appContext";

const SignOutBtn = () => {
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

export default SignOutBtn;
