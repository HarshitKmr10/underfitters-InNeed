import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'

const Register = () => {
  const [stage, setStage] = useState(0);
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [reasonForLeaving, setReasonForLeaving] = useState("");

  function proceed() {
    const required = ["fullname", "age", "gender", "country", "mobile"];
    let flag = 0;

    for (const field of required) {
      if (document.getElementById(`register-${field}`).value === "") {
        flag = 1;
        break;
      }
    }

    if (flag) {
      document.querySelector("small").classList.remove("d-none");
      return;
    }

    document.querySelector("small").classList.add("d-none");
    setStage(stage + 1);
  }

  async function register() {
    const data = { fullName, age, gender, country, email, phoneNumber, currentAddress, reasonForLeaving, password: "" };
    try {
      await axios.post(process.env.REACT_APP_API_URL + "refugee/new", data);
    } catch (error) {
      console.log(error);
      alert("Refugee Already Exists.");
    }
  }

  function back() {
    document.getElementById("register-fullname").value = fullName;
    document.getElementById("register-age").value = age;
    document.getElementById("register-gender").value = gender;
    document.getElementById("register-country").value = country;
    document.getElementById("register-mobile").value = phoneNumber;
    document.getElementById("register-email").value = email;
    document.getElementById("register-residence").value = currentAddress;
    document.getElementById("register-reason").value = reasonForLeaving;
    setStage(stage - 1);
  }

  useEffect(() => {
    const fullnameInput = document.getElementById("register-fullname");
    const ageInput = document.getElementById("register-age");
    const genderInput = document.getElementById("register-gender");
    const countryInput = document.getElementById("register-country");
    const mobileInput = document.getElementById("register-mobile");
    const emailInput = document.getElementById("register-email");
    const residenceInput = document.getElementById("register-residence");
    const reasonInput = document.getElementById("register-reason");

    fullnameInput.value = fullName;
    ageInput.value = age;
    genderInput.value = gender;
    countryInput.value = country;
    mobileInput.value = phoneNumber;
    emailInput.value = email;
    residenceInput.value = currentAddress;
    reasonInput.value = reasonForLeaving;

    fullnameInput.classList.toggle("d-none", stage);
    ageInput.classList.toggle("d-none", stage);
    genderInput.classList.toggle("d-none", stage);
    countryInput.classList.toggle("d-none", stage);
    mobileInput.classList.toggle("d-none", stage);
    emailInput.classList.toggle("d-none", stage);
    residenceInput.classList.toggle("d-none", stage);
    reasonInput.classList.toggle("d-none", stage);

  }, [stage])

  return (
    <>
      <Header />
      <main className='register-container'>
        <div>
          <h1>Are you a Refugee?</h1>
          <img src="assets/images/refugee.jpg" alt="refugee" />
        </div>
        <div>
          <h2>Register</h2>
          <div className='register-form'>
            {
              stage ?
                <>
                  <h4 style={{ alignSelf: "flex-start" }}>Upload Documents</h4>
                  <button className='btn btn-border register-btn file-btn'>Upload Picture</button>
                  <button className='btn btn-border register-btn file-btn'>Identification</button>
                  <small style={{ alignSelf: "flex-end", color: "#aaa", marginTop: "-0.5rem" }}>Any government document.</small>
                  <input type="file" className='d-none' />
                  <input type="file" className='d-none' />
                  <input type="file" className='d-none' />
                </> :
                null
            }

            <input type="text" id="register-fullname" placeholder='Full Name*' onChange={e => setFullName(e.target.value)} />
            <input type="text" id="register-age" placeholder='Age*' onChange={e => setAge(e.target.value)} />
            <select type="text" id="register-gender" defaultValue="" onChange={e => setGender(e.target.value)}>
              <option value="" hidden disabled>Gender*</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-Binary">Non-Binary</option>
            </select>
            <input type="text" id="register-country" placeholder='Country of Origin*' onChange={e => setCountry(e.target.value)} />
            <input type="text" id="register-mobile" placeholder='Mobile Number*' onChange={e => setPhoneNumber(e.target.value)} />
            <input type="text" id="register-email" placeholder='Email Id' onChange={e => setEmail(e.target.value)} />
            <input type="text" id="register-residence" placeholder='Current place of residence' onChange={e => setCurrentAddress(e.target.value)} />
            <textarea id="register-reason" rows="4" placeholder='Reason for leaving the country...' onChange={e => setReasonForLeaving(e.target.value)}></textarea>

            {
              stage === 0 ?
                <>
                  <small className='d-none'>Fields marked with * are required</small>
                  <button className='btn btn-secondary register-btn' onClick={proceed}>Proceed</button>
                </> :
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <button className='btn btn-border register-btn stage-btn' onClick={back}>Back</button>
                  <button className='btn btn-secondary register-btn stage-btn' onClick={register}>Submit</button>
                </div>
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default Register