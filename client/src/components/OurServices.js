import React, { useState, useEffect } from 'react'
import Header from './Header'

const OurServices = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    setServices([
      {
        id: 1,
        title: "Medication",
        src: "assets/images/medication.jpg",
      },
      {
        id: 2,
        title: "Employment",
        src: "assets/images/employment.jpg",
      },
      {
        id: 3,
        title: "Food Security",
        src: "assets/images/food security.jpg",
      },
      {
        id: 4,
        title: "Education",
        src: "assets/images/education.jpg",
      },
      {
        id: 5,
        title: "Shelter",
        src: "assets/images/shelter.jpg",
      },
      {
        id: 6,
        title: "Psychologist Support",
        src: "assets/images/psychologist.jpg",
      }
    ])
  }, [])

  return (
    <>
      <Header />
      <main className='our-services'>
        <h1>Our Services for Refugees</h1>
        <div className='services-container'>
          {
            services.map(service => {
              return (
                <div className='service-card' key={service.id}>
                  <img src={service.src} alt={service.title} />
                  <div className="content">
                    <h2>{service.title}</h2>
                  </div>
                </div>
              )
            })
          }
        </div>

      </main>
    </>
  )
}

export default OurServices