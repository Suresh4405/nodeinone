import React from 'react';
import Card from 'react-bootstrap/Card';
import "./Cardcom.css"
function Cardcomp({ title, icon, para }) {
  return (
    <Card className='total-card'>
      <h6>'</h6>
      <img src={icon} className='card-img'></img>
      <Card.Body>
        <h1 className='card-title'>{title}</h1>
        <p className='card-para'>{para}</p>
      </Card.Body>
    </Card>
  );
}

export default Cardcomp;
