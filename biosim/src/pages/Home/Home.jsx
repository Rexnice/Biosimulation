import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import JournalImage from '../../utils/images/JournalImage.jpeg';
import FreqAskQuestion from '../../components/FeqAskQuestion/FreqAskQuestion';
import {Card} from 'react-bootstrap';
import Image3 from '../../utils/images/Image3.jpg';
import Image4 from '../../utils/images/Image4.jpg';
import Image5 from '../../utils/images/Image5.jpg';


const blogs = [
  {
    id:1,
    img: [Image3],
    title: 'Avoiding Plagiarism in Research',
    description: 'Todays blog post elaborates the importance why scientist \
    needs to eliminate every form of academic dishonesty',
    author:'Gber Terkumbur'
  },
  {
    id:2,
    img: [Image4],
    title: 'Impact Factor in Academic Publishing',
    description: 'In this blog post, we will talk about the importance\
    of Impact factors when publishing in journals and how\
    these impact factors influence research outputs in todays resaerch',
    author:"Innocent Benjamin"
  },
  {
    id:1,
    img: [Image5],
    title: 'Predatory Journals and why you should avoid it',
    description: 'Todays blog post centers on predatory journals\
    and why as productive scientist we need to step away from it\
    and embrace the productivity of High Impact factor journals',
    author:'Chioma Ubah'
  }
]

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
      <div className='blog-section text-light py-5'>
        <div className='container d-flex flex-column align-items-center'>
          <h2 className='text-center text-capitalize mb-5'>
            Latest on the blog
          </h2>
          <div className='row g-4'>
            {blogs.map((blog) =>(
              <div key={blog.id} className='col-md-6 col-lg-4'>
                <Link to='/blog' className='text-decoration-none'>
                  <Card className='h-100 shadow scale-hover-effect'>
                    <Card.Img variant='top' src={blog.img}/>
                    <Card.Body className='p-md-5'>
                      <Card.Title>
                        {blog.title}
                      </Card.Title>
                      <Card.Text>
                        {blog.description}
                      </Card.Text>
                      <Card.Text className='bold lg-4'>
                        {blog.author}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to='/blog'>
            <button type='button' className='btn btn-danger btn-lg mt-5'>
                Read More Blogs
            </button>            
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Home;
