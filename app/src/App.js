import React from 'react'
import formik from "formik"
import { CForm, CFormCheck, CFormLabel,CButton,CFormInput,CFormText } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css';

export default function App() {


  return (
    <CForm>
    <div className="mb-3">
    <CFormLabel htmlFor="exampleInputEmail1">Email address</CFormLabel>
    <CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <CFormText id="emailHelp">We'll never share your email with anyone else.</CFormText>
  </div>
  <div className="mb-3">
    <CFormLabel htmlFor="exampleInputPassword1">Email Password</CFormLabel>
    <CFormInput type="password" id="exampleInputPassword1" />
  </div>
  <CFormCheck
    className="mb-3"
    label="Check me out"
    onChange={(e) => {
      console.log(e.target)
    }}
  />
  <CButton type="submit" color="primary">
    Submit
  </CButton>
</CForm>
  )
}
