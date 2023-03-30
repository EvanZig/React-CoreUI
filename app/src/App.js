import React from 'react'
import formik from "formik"
import { CForm, CFormLabel,CButton,CFormInput,CFormText,CInputGroup } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css';

export default function App() {


  return (
    <CForm>

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

    </CForm>

  )
}
