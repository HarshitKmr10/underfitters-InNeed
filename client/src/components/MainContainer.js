import React, { useState, useEffect } from 'react'

const MainContainer = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([
      {
        id: 1,
        url: "assets/images/crowd.jpg"
      },
      {
        id: 2,
        url: "assets/images/camp.jpg"
      },
      {
        id: 3,
        url: "assets/images/shift.jpg"
      }
    ])
  }, [])

  useEffect(() => {
    if (images.length === 0) return;

    window.setInterval(() => {
      const imageContainer = document.querySelector(".main-container .image-container");
      // get css variable
      let index = parseInt(getComputedStyle(imageContainer).getPropertyValue("--index"));
      if (index === images.length - 1) {
        index = -1;
      }
      let dots = document.querySelectorAll('.dot');
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index + 1].classList.add('active');
      imageContainer.style.setProperty('--index', index + 1);
    }, 8000)
  }, [images])

  return (
    <main className='main-container'>
      <div className="image-container">
        {
          images.map(image => {
            return <img key={image.id} src={image.url} alt={image.url} />
          })
        }
      </div>
      <div className='dot-container'>
        {
          images.map((image, index) => {
            return <div key={image.id} className={'dot' + (index ? "" : " active")} onClick={() => {
              // set css active class
              let dots = document.querySelectorAll('.dot');
              dots.forEach(dot => dot.classList.remove('active'));
              dots[index].classList.add('active');

              // set css variable
              document.querySelector(".main-container .image-container").style.setProperty('--index', index);
            }}></div>
          })
        }
      </div>
      <div className='content'>
        <h1>Help people who lost their everything.</h1>
        <p>Stand with us to help the ones whom lives got destroyed and provide them with basic facilities</p>
        <div className='btn-container'>
          <button className='btn btn-secondary donate-btn'>Donate</button>
        </div>
      </div>
    </main>
  )
}

export default MainContainer