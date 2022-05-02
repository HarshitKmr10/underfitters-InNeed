import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsFacebook , BsInstagram, BsGithub } from "react-icons/bs"

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer>
            <div>
                <button className='btn' onClick={() => navigate("/donate")}>Donate</button>
                <button className='btn' onClick={() => navigate("/out-services")}>Our Services</button>
                <button className='btn' onClick={() => navigate("/register")}>Get Help</button>
            </div>
            <div className='social-handles'>
                <h6>Social Handles</h6>
                <div>
                    <BsFacebook />
                    <BsInstagram />
                    <a href='https://github.com/Chaitanya134/underfitters-InNeed' target="_blank" rel="noreferrer"><BsGithub /></a>
                </div>
            </div>
            <span>Copyright &copy; InNeed 2022</span>
        </footer>
    )
}

export default Footer