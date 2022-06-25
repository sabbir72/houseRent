import React, { useContext } from 'react';
import House from "./House"
import {ImSpinner2} from "react-icons/im"
import { Link } from 'react-router-dom';
import { HouseContext } from './HouseContext';

const HouseList = () => {
const {houses, loading}= useContext(HouseContext)

if(loading){
  return (
    <ImSpinner2 className='mx-auto animate-spin text-orange-700 text-4xl ml-[200px] '/>
  )
}

if(houses.length <1){
  return <div className='text-center text-xl text-gray-400 mb-20' >Sorry , nothing found</div>
}

  return <section className='mb-20'>
    <div className='container mx-auto'>
       <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14 '>
        {houses.map((house, index)=>{
          return <Link to={`/property/${house.id}`} key={index}>

            <House house={house}/>
          </Link>
        })}
       </div>
    </div>
  </section>;
};

export default HouseList;
