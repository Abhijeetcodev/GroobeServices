import React from 'react';
import { girl,girlSaree,Mehndi_design } from '../assets/';



function Gallery() {
  return (
    <section class="overflow-hidden text-neutral-700 my-5">
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex w-full h-full md:flex-row sm:flex-col">
          
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src={girl}/>

          </div>
        <div className='flex md:flex-col sm:flex-row'>
          <div class="w-75% p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src={girlSaree}/>
          </div>
          <div class="w-75% p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src={Mehndi_design} />
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Gallery;