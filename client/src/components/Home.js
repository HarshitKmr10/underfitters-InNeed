import React from 'react'
import MainContainer from './MainContainer'
import Stats from './Stats'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <MainContainer />
      <Stats />
      <section className='help-container'>
        <h1>Are you InNeed?</h1>
        <p>
          We have helped more than over 50+ refugee communities and are still counting.
        </p>
        <div className='content'>
          <img src="assets/images/help.svg" alt="help" />
          <div>
            <p>
              If you are in need of some basic facilities, please contact us by registering using the link below.
              We will collaborate with government agencies to provide you with the best possible solution.
            </p>
            <button className='btn btn-secondary help-btn' onClick={() => navigate("/register")}>I Want to get help</button>
          </div>
        </div>
      </section>
      <section className='our-services-section'>
        <h1>Our Services</h1>
        <div className='content'>
          <div>
            <p>
              We are expanding our <span>InNeed</span> services, which has partnered with many non-profit organizations to ease the life of refugees.
            </p>
            <p>
              We are also taking steps to help the refugees by bringing job, education and healthcare opportunities to these people.
              All our services include medication, employment, food security, education, shelter and personal psychologist sessions if needed.
            </p>
            <p>
              We aim to work even more with these organizations in the upcoming years and expand our community, inviting more helpful people to join with us.
            </p>
            <button className='btn' onClick={() => navigate("/our-services")}>To know more about our services click here.</button>
          </div>
          <img src="assets/images/school.jpg" alt='school' />
        </div>
      </section>
      <section className='ngo-help'>
        <h1>Want to Help in other ways?</h1>
        <img src='assets/images/people.jpg' alt='people' />
        <p>
          We are working with many NGOs and other organizations to help refugees.
          If you are interested in helping too, kindly register yourself with the help of our team.
          You can also <span>donate</span> to our cause and help us to provide better services to refugees.
        </p>
        <button className='btn btn-secondary' onClick={() => navigate("/donate")}>Donate</button>
      </section>
      <section className='news'>
        <h1>News About Refugees</h1>
        <p>Check out some charts and facts about Refugees!</p>
        <iframe title='apex-chart' src="https://apex.oracle.com/pls/apex/f?p=87945:2:"></iframe>
      </section>
      <Footer />
    </>
  )
}

export default Home