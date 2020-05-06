import React from "react";


const AppContext = React.createContext({
    loggedIn: false,
    userType: null,
    name: "",
    email: "",
    address: "",
    managerName: "",
    managerEmail: "",
    updateLoginState: () => {}
})

export default AppContext 