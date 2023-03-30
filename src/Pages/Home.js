import React from 'react'
import { Hightlights, Form, ServiceCard, OurFeatures, Gallery, Faq, Footer,Review} from '../Components'
const Home = () => {
  return (
    // flex flex-col gap-4 mx-20 my-5

    <div className='flex  flex-col content-center gap-4 mx-10 my-5'>
      <div className='flex md:flex-row sm:flex-col'>
        <div className='item-right'>
          <Hightlights />
        </div>
        <div className='item-left'>
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