import React from "react";


const AppContext = React.createContext({
    loggedIn: false,
    name: "",
    updateLoginState: () => {}
})

export default AppContext 