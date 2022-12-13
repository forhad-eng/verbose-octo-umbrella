import React from 'react';
import useFetch from '../hooks/useFetch';

import axios from "../Pages/Token/axiosInterceptor"



const Services = () => {


    const { data, loading, error } = useFetch("http://localhost:9000/api/parking/allParkings/countByCity?cities=gec,khulshi,abashik")

 
 




    return (
       
      <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
       
        <div class="container mx-auto flex flex-wrap my-8 justify-center">
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <h2>{data[0]} properties</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <h2>{data[1]} properties</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <h2>{data[3]} properties</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
      </div>
      </>
      )}
    </div>
       
    );
};

export default Services;