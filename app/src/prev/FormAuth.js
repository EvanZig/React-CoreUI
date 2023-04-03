import * as yup from "yup"
import { useEffect, useState } from "react"

export const useValidPassword = (value) => {
    const [password, setPassword] = useState(value)
    const [passwordIsValid, setPasswordIsValid] = useState(true)

    useEffect( ()=> {
        const passwordSchema = yup.object().shape({                 //de mporei na bgei eksw apo to hook?
            password: yup.string().min(8).required(),               
        })

        if(password.length === 0){
            setPasswordIsValid(true)
            return
        }
        
        const isValid = passwordSchema.isValidSync({password})
        setPasswordIsValid(isValid)
        console.log(passwordIsValid)
    }, [password])

    return { password, setPassword, passwordIsValid }
}

export const useValidEmail = (value) => {
    const [email, setEmail] = useState(value)
    const [emailIsValid, setEmailIsValid] = useState(true)

    useEffect(() => {
        const emailSchema = yup.object().shape({
            email: yup.string().email().required(),
        })

        if(email.length === 0){
            setEmailIsValid(true)
            return
        }

        const isValid = emailSchema.isValidSync({email})
        setEmailIsValid(isValid)
        console.log(emailIsValid)
    }, [email])

    return { email, setEmail, emailIsValid }
}

// export const useValidUsername = (value) => {
//     const [username, setUsername] = useState(value)
//     const [usernameIsValid, setUsernameIsValid] = useState(true)
        
//     useEffect((value) => {
//         const usernameSchema = yup.object().shape({
//             username: yup.string().email().required(),
//         })

//         const isValid = usernameSchema.isValidSync({username})
//         setUsernameIsValid(isValid)
//     }, [username])

//     return {username, setUsername, usernameIsValid }
// }