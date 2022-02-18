import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

function CompCarousel() {
  return (
    <div className="compcarousel" style={{ display: 'flex', }}>
      <Carousel >
        <Carousel.Item>
          <img src="https://i.pinimg.com/originals/fe/51/91/fe51913d5ffb6ab7c5f9b345dbbb1c69.png" alt="" />
          <Carousel.Caption style={{ borderRadius: '10px', backgroundColor: 'tomato', opacity: '0.8', width: '350px', textAlign: 'left', margin: 'auto', padding: '20px 10px' }}>
            <div>
              <h5>R.K. Apartment Design</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <br />
              <a href="/" style={{color:'white',fontSize:'20px',textDecoration:'underline'}}>View Project Details</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '400px', width: '1000px' }} src="https://www.luxuriantmagazine.com/wp-content/uploads/2021/04/Explore-Rome-Decor-With-Its-Best-Interior-Design-Projects-ft.jpg" alt="" />
          <Carousel.Caption style={{ borderRadius: '10px', backgroundColor: 'tomato', opacity: '0.9', width: '350px', textAlign: 'left', margin: 'auto', padding: '20px 10px' }}>
            <div>
              <h5>R.K. Apartment Design</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <br />
              <a href="/" style={{color:'white',fontSize:'20px',textDecoration:'underline'}}>View Project Details</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://d3i9l7sj72swdx.cloudfront.net/pentabase/2021/05/base-rec-final-fullres-140-1000x400.jpg" alt="" />
          <Carousel.Caption style={{ borderRadius: '10px', backgroundColor: 'tomato', opacity: '0.9', width: '350px', textAlign: 'left', margin: 'auto', padding: '20px 10px' }}>
            <div>
              <h5>R.K. Apartment Design</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <br />
              <a href="/" style={{color:'white',fontSize:'20px',textDecoration:'underline'}}>View Project Details</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CompCarousel;
