import React from 'react'
import formik from "formik"
import { CForm,CButton,CFormInput,CInputGroup, CCardBody, CSpinner } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function App() {


  const openLoginModal = () =>{
    console.log("clicked")
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
        />
        </CInputGroup>

        <CInputGroup className="mb-4">
        <CFormInput
        placeholder="Last name"
        className="light-background"
        />
        </CInputGroup>

        <CInputGroup className="mb-4">
        <CFormInput
        type="email"
        placeholder= "E-mail"
        className="light-background"
        />
        </CInputGroup>

        <CInputGroup className="mb-4">
        <CFormInput
        type="password"
        placeholder= "Password"
        className="light-background"
        />
        </CInputGroup>

        <CInputGroup className="mb-4">
        <CFormInput
          type="password"
          placeholder="Confirm Password"
          className="light-background"
        />
        </CInputGroup>

        <CInputGroup className="mb-4">
        <PhoneInput
          country={'ch'}
        />
        </CInputGroup>
        <CButton
        // disabled={isValid}
        // onClick={signUpClicked}
        className="px-4 mb-4 text-white bg-black"
        >
        {/* {isSpinnerVisible ? (
          <CSpinner color="warning" variant="grow" size="sm" />
        ) : (
          t('Authentication.Register.Button.REGISTER')
        )} */}
        <CSpinner color="warning" variant="grow" size="sm" />
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
