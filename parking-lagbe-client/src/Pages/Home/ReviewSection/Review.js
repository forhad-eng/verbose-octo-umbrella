import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Review = ({collectreview}) => {
 

 const {name,rating,price} =collectreview

 

 
  

   
    return (
        <>
        <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
              
            </div>
                  </div>

                  <h3 className='text-center text-xl '><b>Price:</b> {name}</h3>
                  <h3 className='text-center text-xl '><b>Price:</b> {price}</h3>
                 
               <h3 className='text-center text-xl '><b>Ratings:</b> {rating}</h3>
            
              
        </div>
      </div>
     </>
    );
};

export default Review;