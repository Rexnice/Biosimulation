import React from 'react';
import './FreqAskQuestion.css';
import Accordion from 'react-bootstrap/Accordion';


function FreqAskQuestion()  {
  return (
    <div className='faq-section'>
      <div className='container d-flex flex-column align-items-center'>
        <h2 className='text-center text-capitalize mb-5'>asked questions</h2>
        <p className='text-center mb-5'>Lorem ipsum dolor 
        sit amet consectetur adipisicing elit. 
        Amet minima debitis necessitatibus excepturi 
        harum beatae aperiam consequuntur aspernatur maiores 
        quidem quas asperiores quisquam maxime incidunt, 
        dolores impedit at, officiis consequatur.</p>
        <Accordion defaultActiveKey='' flush>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              First question
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor 
              sit amet consectetur adipisicing elit. 
              Amet minima debitis necessitatibus excepturi 
              harum beatae aperiam consequuntur aspernatur maiores 
              quidem quas asperiores quisquam maxime incidunt, 
              dolores impedit at, officiis consequatur.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>
              Second question
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor 
              sit amet consectetur adipisicing elit. 
              Amet minima debitis necessitatibus excepturi 
              harum beatae aperiam consequuntur aspernatur maiores 
              quidem quas asperiores quisquam maxime incidunt, 
              dolores impedit at, officiis consequatur.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>
              Third question
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor 
              sit amet consectetur adipisicing elit. 
              Amet minima debitis necessitatibus excepturi 
              harum beatae aperiam consequuntur aspernatur maiores 
              quidem quas asperiores quisquam maxime incidunt, 
              dolores impedit at, officiis consequatur.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header>
              Fourth question
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor 
              sit amet consectetur adipisicing elit. 
              Amet minima debitis necessitatibus excepturi 
              harum beatae aperiam consequuntur aspernatur maiores 
              quidem quas asperiores quisquam maxime incidunt, 
              dolores impedit at, officiis consequatur.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default FreqAskQuestion