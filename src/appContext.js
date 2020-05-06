import React from "react";


const AppContext = React.createContext({
    loggedIn: false,
    updateLoginState: () => {}
})

export default AppContext 