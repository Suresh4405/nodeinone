import React from 'react';
import Card from 'react-bootstrap/Card';
import "./Jobcard.css"
function Jobcardcomp({ jobtitle, Skills, Education,Experience,Posted }) {
  return (
    <Card className='total-card1'>
      <h6>'</h6>
      <Card.Body>
        <h1 className='card-1title'>{jobtitle}</h1>
        <p className='x1para'>{Skills}</p>
        <p className='x1para'>{Education}</p>
        <p className='x1para'>{Experience}</p>
        <p className='x1para'>{Posted}</p>
       
      </Card.Body>
      <button className='Navi-butt'>Apply </button>
    </Card>
  );
}

export default Jobcardcomp;
