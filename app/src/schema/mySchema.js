import * as yup from "yup"

const passwordSchema = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[0-9])(?=.*[A-Z]).{8,}$/

export const mySchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8, "eight characters minimum \nonespecialcharacter(e.g !,%,@,$,#,^,.,...\none number\none uppercase character").required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords must match").required(),
})

const errors = "eight characters minimum \nonespecialcharacter(e.g !,%,@,$,#,^, . , ...\none number\none uppercase character"
export const passwordErrorsArray = errors.split("\n")
