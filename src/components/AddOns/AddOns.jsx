import React from 'react';
import './style/addOns_style.css';

export default function AddOns({userPlan}) {
    const addOns_inputs = [
        {title: 'Online service', price_label_year: '+$10/yr', price_year: 10, description: 'Access to multiplayer games', price_label_month: '$1/mo', price_month: 1,},
        {title: 'Larger storage', price_label_year: '+$20/yr', price_year: 20, description: 'Extra 1TB of cloud save', price_label_month: '$2/mo', price_month: 2},
        {title: 'Customizable profile', price_label_year: '+$20/yr', price_year: 20, description: 'Custom theme on your profile', price_label_month: '$2/mo', price_month: 2},
      ]

  return (
    <div className='addOns_container w-full h-full  text-blue-950'>
        <div className='w-full h-5/6'>
            <header>
              <h1 className='text-5xl font-bold'>Pick Add-ons</h1>
              <p className='text-xl text-gray-400 mt-4 mb-14'>
               Add-ons help enhance your gaming experience.
              </p>
            </header>

            <div className='field_label_inputs flex flex-col'>
              {addOns_inputs.map((addOns, index) => (
                <label for={addOns.title} className='selectable_cards 
                      relative w-full h-30 rounded-lg 
                      cursor-pointer px-16 my-2
                      flex justify-between items-center
                      border border-solid border-gray-300
                  ' key={index}>
                  <input id={addOns.title} type='checkbox' value='' className='checkbox mr-4'/>
                  <div className='card_details 
                            flex flex-col
                            w-full h-full 
                            py-8 px-4 relative'
                  >
                    
                    <h3 className='title font-semibold text-xl text-blue-950'>{addOns.title}</h3>
                    <p className='freePackage text-gray-400 font-normal text-xl'>{addOns.description}</p>
                  </div>
                  
                  <span className='price text-lg font-semibold'>{(userPlan === true) ? addOns.price_label_month : addOns.price_label_year}</span>
                </label>
              ))}
            </div>

          </div>

          <footer className='w-full h-1/6 form_container flex justify-between items-end'>
            <button className='btn_back w-32 h-16 text-xl font-semibold'>Go Back</button>
            <button className='btn_next w-32 h-16 text-white text-xl font-semibold rounded-xl'>Next Step</button>
          </footer>
    </div>
  )
}
