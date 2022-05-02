import React, { useState, useEffect } from 'react'
import Header from './Header'
import { RiVisaLine } from "react-icons/ri"
import { SiMastercard } from "react-icons/si"
import { FaGooglePay } from "react-icons/fa"

const Donate = () => {
  const [stage, setStage] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [companyName, setCompanyName] = useState("");

  function proceed() {

    // return if any of the fields are empty
    if ([fullName, email, phoneNumber].includes("")) {
      document.querySelector("small").classList.remove("d-none");
      return;
    }
    document.querySelector("small").classList.add("d-none");
    document.getElementById("donate-amount").value = amount;
    setStage(stage + 1);
  }

  function donate() {
    if (amount === 0 || amount === "") return;
  }

  useEffect(() => {
    const fullNameInput = document.getElementById("donate-fullname");
    const companyNameInput = document.getElementById("donate-companyname");
    const emailInput = document.getElementById("donate-email");
    const phoneNumberInput = document.getElementById("donate-mobile");
    const amountInput = document.getElementById("donate-amount");
    if (stage) {
      amountInput.value = amount;
    } else {
      fullNameInput.value = fullName;
      companyNameInput.value = companyName;
      emailInput.value = email;
      phoneNumberInput.value = phoneNumber;
    }
    fullNameInput.classList.toggle("d-none", stage);
    companyNameInput.classList.toggle("d-none", stage);
    emailInput.classList.toggle("d-none", stage);
    phoneNumberInput.classList.toggle("d-none", stage);
    amountInput.classList.toggle("d-none", !stage);
  }, [stage])

  useEffect(() => {

  }, [])

  function handleClick(e) {
    
    e.target.classList.add("btn-border");
    
    document.querySelectorAll(".payment-gateway button").forEach(btn => {
      if (btn !== e.target) {
        btn.classList.remove("btn-border");
      }
    })
  }

  return (
    <>
      <Header />
      <main className='donate-container'>
        <div>
          <h1>Want to Donate?</h1>
          <img src="assets/images/refugee.jpg" alt="refugee" />
        </div>
        <div>
          <h2>Your Details</h2>
          <div className='donate-form'>
            <input type="number" id='donate-amount' placeholder='Enter the amount' onChange={e => setAmount(e.target.value)} />
            {
              stage ?
                <>
                  <span>Choose the payment gateway</span>
                  <div className='payment-gateway'>
                    <button className='btn btn-border' onClick={handleClick}>
                      <RiVisaLine />
                    </button>
                    <button className='btn' onClick={handleClick}>
                      <SiMastercard />
                    </button>
                    <button className='btn' onClick={handleClick}>
                      <FaGooglePay />
                    </button>
                  </div>
                </> : null
            }
            <input type="text" id="donate-fullname" placeholder='Full Name*' onChange={e => setFullName(e.target.value)} />
            <input type="text" id="donate-companyname" placeholder='Company Name (if any)' onChange={e => setCompanyName(e.target.value)} />
            <input type="text" id="donate-mobile" placeholder='Mobile Number*' onChange={e => setPhoneNumber(e.target.value)} />
            <input type="text" id="donate-email" placeholder='Email Id*' onChange={e => setEmail(e.target.value)} />
            {
              stage === 0 ?
                <>
                  <small className='d-none'>Fields marked with * are required</small>
                  <button className='btn btn-secondary donate-btn' onClick={proceed}>Proceed</button>
                </> :
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <button className='btn btn-border donate-btn stage-btn' onClick={() => setStage(stage - 1)}>Back</button>
                  <button className='btn btn-secondary donate-btn stage-btn' onClick={donate}>Submit</button>
                </div>
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default Donate