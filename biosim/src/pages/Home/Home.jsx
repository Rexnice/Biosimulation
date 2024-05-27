import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import JournalImage from '../../utils/images/JournalImage.jpeg';
import FreqAskQuestion from '../../components/FeqAskQuestion/FreqAskQuestion';

function Home() {
  return (
    <div className='home-page'>
      <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
        <div className='container d-flex flex-column align-items-center'>
          <h2>Welcome To</h2>
          <h1 className='text-center fw-semibold'>Computational & Bio Simulation Group</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at doloribus natus, 
            odit eius ea temporibus quam harum magnam vero obcaecati magni officia 
            provident modi perspiciatis eum dignissimos odio voluptates?</p>
          <div className='d-flex flex-column flex-sm-row align-items-center'>
            <Link to='/articles'>
              <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>View Articles</button>
            </Link>
            <Link to='/contact'>
                <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>
                Contact Us
                </button>
            </Link>
          </div>
        </div>
      </header>
      <div className='py-5'>
        <ChooseSection />
      </div>
      <div className='py-5 bg-light'>
        <div className="container">
          <div className='row d-flex align-items-center justify-content-around'>
            <div className='col-lg-5'>
              <h2 className='text-capitalize'>
                most recent publications
              </h2>
              <p>Please find the most recent of our publications for your perusal</p>
              <Link to='/articles'>
                <button type='button' className=' btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Read More</button>
              </Link>
            </div>
            <div className='col-lg-5 mt-5 mt-lg-0'>
              <img src={JournalImage} className='img-fluid' alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <FreqAskQuestion />
      </div>
    </div>
  )
}

export default Home;
