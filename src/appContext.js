import React from "react";


const AppContext = React.createContext({
    loggedIn: false,
    userType: null,
    updateLoginState: () => {}
})

export default AppContext 