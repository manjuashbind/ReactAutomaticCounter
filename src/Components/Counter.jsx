import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import timer from './images/timer.jpg'

function Counter() {
    const[count,setCount]=useState(0)
    

   useEffect(()=>{
   
    const time= setTimeout(()=>{
        setCount(count+1)},2000)
    
        return () => clearTimeout(time)
    
    
   },[count]);
  
   function reset(){
    setCount(0)
   }

  return (
    <div  style={{fontSize:'30px',padding:'10px',textAlign:'center'}}>
      <Container>
        <Row className=' d-flex justify-content-center align-items-center flex-column-reverse flex-md-row flex-xl-row flex-lg-row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2'>
          <Col className='my-auto '>
          <div className=" shadow rounded p-3">
          <h2>Automatic Counter </h2>
           <h1 className='text-primary'>{count}</h1>        
          <button style={{fontSize:'15px',padding:'6px',border:'2px solid black',borderRadius:'8px',fontWeight:'bold',width:'150px'}} onClick={reset}>RESET</button>
         </div>
          </Col>
          <Col>
          <img className='img-fluid' src={timer} alt="" />
          </Col>
        </Row>
      </Container>
      
        
    </div>
  )
}

export default Counter