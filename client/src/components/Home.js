import React from 'react'
import MainContainer from './MainContainer'
import Stats from './Stats'
import Header from './Header'

const Home = () => {
  return (
    <>
      <Header />
      <MainContainer />
      <Stats />
      <section className='help-container'>
        <h1>Want to get Help?</h1>
        <div className='content'>
          <img src="assets/images/help.svg" alt="help" />
          <button className='btn btn-secondary help-btn'>Want to get help</button>
        </div>
      </section>
    </>
  )
}

export default Home