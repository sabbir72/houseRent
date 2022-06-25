/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "../assets/img/house-banner.png";
import Search from "./Search";
const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6 ">
            <span className="text-orange-600">Rent</span> a Home of your choice, very easy.
          </h1>
          <p className="max-w-[480px] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            viverra lectus a augue malesuada, mollis euismod velit ornare. Nulla
            sit amet luctus turpis. Cras purus quam, sollicitudin tempus nunc
            sed, imperdiet egestas nibh. Donec id magna dapibus, suscipit diam
            sed, varius massa. Vivamus sit amet vehicula quam.
            lectus.
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end ite">
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
