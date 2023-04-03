import React, {useState} from "react"

export const GlobalVariables = React.createContext({})
export const GlobalVariablesProvider = GlobalVariables.Provider

const GlobalVariablesWraper = (props) => {
    const [loginModalVisibility, setLoginModalVisibility] = useState(true)
    const [registerModalVisibility, setRegisterModalVisibility] = useState(false)

return (
    <GlobalVariablesProvider value = {{
        loginModalVisibility,
        setLoginModalVisibility,
        registerModalVisibility,
        setRegisterModalVisibility,
    }}
    >
    {props.children}
    </GlobalVariablesProvider>
)
}

export default GlobalVariablesWraper