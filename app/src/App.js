import React, {useState} from 'react'
import formik from "formik"
import { CForm,CButton,CFormInput,CInputGroup, CCardBody, CSpinner } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useValidEmail, useValidPassword, useValidUsername } from './FormAuth';

export default function App() {
  const {password, setPassword, passwordIsValid} = useValidPassword('')
  const {email, setEmail, emailIsValid} = useValidEmail('')
  const {username, setUsername, usernameIsValid} = useValidUsername('')

  const [formCredentials, setFormCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: 0,
    password: "",
  })

  const isSpinnerVisible = false

  const openLoginModal = () =>{
    console.log("clicked")
  }

  const handleInput = (event) => {
    setFormCredentials( prevState => {
      return {...prevState,
      [event.target.name]: event.target.value,}
    })
    console.log(formCredentials)
  }

  const phoneInput = (event) => {
    console.log(formCredentials)
    setFormCredentials( prevState => {
      return {
        ...prevState,
        phone: event.target.value
      }
    })
    console.log(formCredentials)
  }

  const signUpClicked = async () => {

  }

  return (
    <CForm>

        <CCardBody className="m-5 p-xl-5">
        <div className="d-flex flex-column mb-4">
          <h2>Register</h2>
        </div>

        <CInputGroup className="mb-4">
        <CFormInput
        placeholder="First name"
        className="light-background"
        name = "firstName"
        value = {formCredentials.firstName}
        onChange={handleInput}
        />
        </CInputGroup>

        <CInputGroup className="mb-4">
        <CFormInput
        placeholder="Last name"
        className="light-background"
        name = "lastName"
        value = {formCredentials.lastName}
        onChange={handleInput}
        />
        </CInputGroup>

        <CInputGroup className="mb-4">
        <CFormInput
        type="email"
        placeholder= "E-mail"
        className="light-background"
        name = "email"
        value = {formCredentials.email}
        onChange={handleInput}
        />
        </CInputGroup>

        <CInputGroup className="mb-4">
        <CFormInput
        type="password"
        placeholder= "Password"
        className="light-background"
        name = "password"
        value = {formCredentials.password}
        onChange={handleInput}
        />
        </CInputGroup>

        <CInputGroup className="mb-4">
        <CFormInput
          type="password"
          placeholder="Confirm Password"
          className="light-background"
          name ="confirmPassword"
        />
        </CInputGroup>

        <CInputGroup className="mb-4">
        <PhoneInput
          country={'ch'}
          value = {formCredentials.phone}
          onChange={(value)=>{
            setFormCredentials(prevState => {
              return {
                ...prevState,
                phone: value,
              }})
          }}
        />
        </CInputGroup>
        <CButton
        // disabled={isValid}
        onClick={signUpClicked}
        className="px-4 mb-4 text-white bg-black"
        >
        {isSpinnerVisible ? (
          <CSpinner color="warning" variant="grow" size="sm" />
        ) : '' }
        Register
      </CButton>

      <CCardBody className="d-flex mb-3">
      <span>Already registered?</span>
      <span
        className="login-button-link px-4 link-dark fw-bolder"
        onClick={() => openLoginModal()}
      >
        Login
      </span>
      </CCardBody>

        </CCardBody>

    </CForm>

  )
}
