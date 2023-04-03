import React from "react"
import { CForm,CButton,CInputGroup, CCardBody, CSpinner, CRow,CCol, CCard, CIcon,CFormInput, CModal } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css';
import loginBackgroundImage from './images/bg-login.png'

export default function Login(){
    const modalVisibility = true;
    const isSpinnerVisible = false;

    return (
        <CModal
        className="show d-block spartan-font"
        backdrop={true}
        keyboard={false}
        portal={false}
        size="xl"
        // onClose={() => closeModal()}
        visible={modalVisibility}
        alignment="center"
        style={{
          backgroundImage: `url(${loginBackgroundImage})`,
          backgroundSize: `cover`,
          borderRadius: `0px`,
        }}
      >
       <CRow className="justify-content-end">
          <CCol></CCol>
          <CCol className="col-lg-7">
            <CCard style={{ borderRadius: `0px` }}>
              <div className=" d-flex flex-row justify-content-end align-items-end m-3">
                {/* <CIcon
                  role="button"
                //   icon={cilXCircle}
                  className="icon-xl"
                //   onClick={() => closeModal()}
                /> */}
              </div>
              <CCardBody className="m-5 p-xl-5">
                <div className="d-flex flex-column mb-4">
                  <h2>Log in</h2>
                </div>
                <CForm id="main">
                  <CInputGroup className="mb-4">
                  <CFormInput
                    placeholder="E-mail"
                    className="light-background"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                  <CFormInput
                    type="password"
                    placeholder="Password"
                    className="light-background"
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol>
                      <span
                        className="login-button-link color-black link-dark"
                        // onClick={() => openRequestCodeModal()}
                      >
                      </span>
                      <div className="d-flex justify-content-center align-items-end flex-column ">
                        <CButton
                        //   disabled={isValid}
                        //   onClick={signInClicked}
                          className="px-4 mb-4 text-white bg-black position-relative"
                        >
                          {isSpinnerVisible ? (
                            <CSpinner color="warning" variant="grow" size="sm" />
                          ) : (
                            "Log in"
                          )}
                        </CButton>
                      </div>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCardBody className="d-flex mb-3">
                      <span>New to Cubotoo?</span>
                      <span
                        className="login-button-link px-4 link-dark fw-bolder"
                        // onClick={() => openRegisterModal()}
                      >
                        Sign up
                      </span>
                    </CCardBody>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        </CModal>
    )
}