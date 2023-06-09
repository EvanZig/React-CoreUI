import React, { useContext } from 'react'
import { useFormik } from "formik"
import { CForm,CButton,CFormInput,CInputGroup, CCardBody, CSpinner, CRow,CCol, CModal, CCard } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { mySchema, passwordErros } from './schema/mySchema';
import signupBackgroundImage from './images/bg-signup.png'
import { GlobalVariables } from './modalContext';
import {cilXCircle} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

export default function Register() {
    const globalVars = useContext(GlobalVariables)

    const onSubmit = (values,actions) =>{
      console.log(values)
      setTimeout(() => {
        actions.resetForm()
      }, 1000)
    }

    const registerForm = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password:"",
        confirmPassword:"",
      },
      validationSchema: mySchema,
      onSubmit,
    })

  
  const isSpinnerVisible = false

  const openLoginModal = () =>{
    globalVars.setRegisterModalVisibility(false)
    globalVars.setLoginModalVisibility(true)
  }
  
  const closeModal = () => {
    globalVars.setRegisterModalVisibility(false)
    globalVars.setLoginModalVisibility(true)
  }

  return (
    <div className={`flex-row ${globalVars.registerModalVisibility ? 'd-flex' : 'd-none'}`}>
    <CModal
    className="show d-block spartan-font"
    backdrop={true}
    keyboard={false}
    portal={false}
    size="xl"
    visible={globalVars.registerModalVisibility}
    onClose={() => closeModal()}
    alignment="center"
    style={{
      backgroundImage: `url(${signupBackgroundImage})`,
      backgroundSize: `cover`,
      borderRadius: `0px`,
    }}
  >
    <CRow className="justify-content-center">
    <CCol></CCol>
    <CCol className='col-lg-7'>
    <CCard style={{ borderRadius: `0px`, height: '900px' }}>
    <div className=" d-flex flex-row justify-content-end align-items-end m-3">
    <CIcon
      role="button"
      icon={cilXCircle}
      className="icon-xl"
      onClick={() => closeModal()}
    />
    </div>
    <CForm onSubmit={registerForm.handleSubmit}>

        <CCardBody className="m-5 p-xl-5">
        <div className="d-flex flex-column mb-4">
          <h2>Register</h2>
        </div>

        <CInputGroup className="mb-4">
        <CFormInput
        placeholder="First name"
        // className="light-background"
        name = "firstName"
        value = {registerForm.values.firstName}
        onChange={registerForm.handleChange}
        onBlur={registerForm.handleBlur}
        className={registerForm.errors.firstName && registerForm.touched.firstName ? "input-error" : ""}
        />
        </CInputGroup>
        {registerForm.errors.firstName && registerForm.touched.firstName && <p className= "error">❌{registerForm.errors.firstName}</p>}

        <CInputGroup className="mb-4">
        <CFormInput
        placeholder="Last name"
        // className="light-background"
        name = "lastName"
        value = {registerForm.values.lastName}
        onChange={registerForm.handleChange}
        onBlur={registerForm.handleBlur}
        className={registerForm.errors.lastName && registerForm.touched.lastName ? "input-error" : ""}
        />
        </CInputGroup>
        {registerForm.errors.lastName && registerForm.touched.lastName && <p className= "error">❌{registerForm.errors.lastName}</p>}

        <CInputGroup className="mb-4">
        <CFormInput
        type="email"
        placeholder= "E-mail"
        // className="light-background"
        name = "email"
        value = {registerForm.values.email}
        onChange={registerForm.handleChange}
        onBlur={registerForm.handleBlur}
        className={registerForm.errors.email && registerForm.touched.email ? "input-error" : ""}
        />
        </CInputGroup>
        {registerForm.errors.email && registerForm.touched.email && <p className= "error">❌{registerForm.errors.email}</p>}

        <CInputGroup className="mb-4">
        <CFormInput
        type="password"
        placeholder= "Password"
        name = "password"
        value = {registerForm.values.password}
        onChange={registerForm.handleChange}
        onBlur={registerForm.handleBlur}
        className={registerForm.errors.password && registerForm.touched.password ? "input-error" : ""}
        />
        </CInputGroup>
        {registerForm.errors.password && registerForm.touched.password && <p className= "error">{passwordErros}</p>}


        <CInputGroup className="mb-4">
        <CFormInput
          type="password"
          placeholder="Confirm Password"
          name ="confirmPassword"
          value = {registerForm.values.confirmPassword}
          onChange={registerForm.handleChange}
          onBlur={registerForm.handleBlur}
          className={registerForm.errors.confirmPassword && registerForm.touched.confirmPassword ? "input-error" : ""}
        />
        </CInputGroup>
        {registerForm.errors.confirmPassword && registerForm.touched.confirmPassword && <p className= "error">❌{registerForm.errors.confirmPassword}</p>}


        <CInputGroup className="mb-4">
        <PhoneInput
          country={'ch'}
        />
        </CInputGroup>
        
        <CRow>
        <CCol>
        <div className="d-flex justify-content-center align-items-end flex-column ">
        <CButton
        disabled={registerForm.isSubmitting}
        type="submit"
        className="px-4 mb-4 text-white bg-black"
        >
        {isSpinnerVisible ? (
          <CSpinner color="warning" variant="grow" size="sm" />
        ) : '' }
        Register
      </CButton>
      </div>
      </CCol>
      </CRow>
      
      <CRow>
      <CCardBody className="d-flex mb-3">
      <span>Already registered?</span>
      <span
        className="login-button-link px-4 link-dark fw-bolder"
        onClick={() => openLoginModal()}
        style = {{
            cursor: 'pointer',
        }}
      >
        Login
      </span>
                </CCardBody>
              </CRow>
            </CCardBody>
          </CForm>
          </CCard>
        </CCol>
      </CRow>
    </CModal>
    </div>
  )
}