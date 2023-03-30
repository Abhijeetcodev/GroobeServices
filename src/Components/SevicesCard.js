import React, {useState } from 'react'
import {Groom,Bride} from '../assets'
const data = [

  {
    heading: "Bridal Service",
    details: "Unleash your inner radiance  with our breathtaking bridal makeup",
    subDetails: " We help you achieve your dream wedding look with our exclusive bridal makeup , eyelash extensions, manicures , pedicures , facials , body polishing, hair spas and styling.",
    image: Bride,

  },
  {
    heading: "Groom Special",
    details: "Add a touch of Perfection to your handsome look with our splendid groom beauty services",
    subDetails: " Our services include Turban tying, haircuts, groom makeup , styling , shaving and beard trimming , skin care treatments, Facials.",
    image:Groom,

  },
  {
    heading: "Bridal Service",
    details: "Unleash your inner radiance  with our breathtaking bridal makeup",
    subDetails: " We help you achieve your dream wedding look with our exclusive bridal makeup , eyelash extensions, manicures , pedicures , facials , body polishing, hair spas and styling.",
    image: Bride,

  },

]

const SevicesCard = () => {

 const [show, ClickShow] = useState(false);
 
  function Handle(){
    show ? ClickShow(false):ClickShow(true);
  }
  return (
    <div className="flex flex-col gap-3">
      {
        ( show ? (
          data.map((item, index) => (
            <div key={index} className="max-w-sm w-full lg:max-w-full lg:flex  shadow-md">
              <img className="h-120 lg:h-auto lg:w-80 flex-none bg-cover rounded-t border-1 lg:rounded-lg:rounded-l text-center overflow-hidden" src={item.image} />

              <div className="border-r  border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-20 mx-10 my-1">
                  <div className="text-center text-gray-900 font-bold text-2xl mb-2">
                    <h1>{item.heading}</h1></div>
                  <h3 className="text-yellow-400 font-semibold my-2 text-xl  text-base">{item.details}</h3>
                  <p className="text-gray-700 text-base">{item.subDetails}</p>
                </div>
                <button className="content-center bg-blue-600 font-bold py-2 px-4 rounded">
              Book Now
              </button>

              </div>
            </div>


          ))) : (
           data.map((item,index)=> index<2 && (
            <div key={index} className="max-w-sm w-full lg:max-w-full lg:flex  shadow-md">
            <img className="h-120 lg:h-auto lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={item.image} />

            <div className="border-r  border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-20 mx-10 my-1">
                <div className="text-center text-gray-900 font-bold text-2xl mb-2">
                  <h1>{item.heading}</h1></div>
                <h3 className="text-yellow-400 font-semibold my-2 text-xl  text-base">{item.details}</h3>
                <p className="text-gray-700 text-base">{item.subDetails}</p>
              </div>
              <button className="content-center bg-blue-600 font-bold py-2 px-4 rounded">
            Book Now
            </button>

            </div>
          </div>
           ))
           
          ))

      }
      <div className="items-center ">
      <button onClick={Handle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           View All Services
     </button>
      </div>

    </div>
  )
}

export default SevicesCard;