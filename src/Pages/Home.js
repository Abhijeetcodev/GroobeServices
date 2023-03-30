import React from 'react'
import { Hightlights, Form, ServiceCard, OurFeatures, Gallery, Faq, Footer,Review} from '../Components'
const Home = () => {
  return (
    // flex flex-col gap-4 mx-20 my-5

    <div className='flex flex-col gap-4 mx-10 my-5'>
      <div className='md:container md:mx-auto flex flex-wrap lg:w-full sm:mx-auto sm:mb-2 -mx-2'>
        <div className='item-center'>
          <Hightlights />
        </div>
        <div className='item-center'>
          <Form />
        </div>

      </div>

      <div>
        <h1 className="text-center text-4xl font-bold my-4">Service</h1>
        <ServiceCard />
      </div>
      <div className='container'>
      <h1 className="text-center text-4xl font-bold my-4">Gallery</h1>
      {/* <Gallery/>  problem*/} 
     
      </div>
      <div>
        <Review/>
      </div>
      <div>
        <Faq/>
      </div>

    </div>


  )
}

export default Home