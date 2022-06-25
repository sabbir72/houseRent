import React from "react";
import { housesData } from "../data";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { BiBed, BiBath, BiArea } from "react-icons/bi";

const PropertyDetails = () => {
  const { id } = useParams();
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });
  return (
    <div className="container mx-auto min-h-[800px] mb-14 ">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between ">
        <div>
          <h2 className="text-2xl font-semibold  ">{house.name}</h2>
          <h3 className="text-lg mb-4">{house.address}</h3>
        </div>
        <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm ">
          <div className="bg-green-500  text-white rounded-full px-3 ">
            {house.type}
          </div>
          <div className="bg-red-500  text-white rounded-full px-3 ">
            {house.country}
          </div>
        </div>
        <div>
          <div className="text-3xl font-semibold text-red-500 ">
            $ {house.price}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-8 lg:flex-row ">
        <div className="max-w-[768px]">
          <div className="mb-8">
            <img src={house.imageLg} alt="" />
          </div>
          <div className="flex gap-x-6 text-orange-700 mb-6">
            <div className="flex gap-x-2 items-center">
              <BiBed className="text-2xl" />
              <div>{house.bedrooms}</div>
            </div>

            <div className="flex gap-x-2 items-center">
              <BiBath className="text-2xl" />
              <div>{house.bathrooms}</div>
            </div>

            <div className="flex gap-x-2 items-center">
              <BiArea className="text-2xl" />
              <div>{house.surface}</div>
            </div>
          </div>
          <div>{house.description}</div>
        </div>
        <div
          className="flex-1 bg-white w-full mb-8 border border-gray-400
        rounded-lg px-6 py-8 "
        >
          <div className="flex  items-center gap-x-4 mb-8">
            <div className="w-20 h-20 p-1 border border-gray-400 rounded-full   ">
              <img src={house.agent.image} alt="" />
            </div>
            <div>
              <div className="font-bold text-lg ">{house.agent.name}</div>
              <Link className="text-green-500 text-sm" to=" ">
                View Listings
              </Link>
            </div>
          </div>
          <form className="flex flex-col gap-y-4">
            <input
              className="border border-gray-300 focus:border-orange-200
              outline-none rounded w-full px-4 h-12 text-sm m-2 "
              type="text"
              placeholder="Name*"
            />

            <input
              className="border border-gray-300 focus:border-orange-200
              outline-none rounded w-full px-4 h-12 text-sm  m-2"
              type="text"
              placeholder="Email*"
            />

            <input
              className="border border-gray-300 focus:border-orange-200
              outline-none rounded w-full px-4 h-12 text-sm  m-2"
              type="text"
              placeholder="Phone*"
            />

            <textarea className="border border-gray-300 focus:border-orange-200
              outline-none rounded w-full px-4 h-24 text-sm m-2 " placeholder="Message*" > </textarea>
            <div className="flex flex-col gap-y-4">
              <button className="bg-orange-700 hover:bg-orange-800 text-white
              rounded p-4 text-sm w-full transition">Sent message</button>
              <button className="border border-orange-500 focus:border-orange-700
               rounded w-full p-4 text-sm transition ">Call</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
