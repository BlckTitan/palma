import React, { useState } from 'react';
import './style/plan_style.css';
import icon_arcade from '../../assets/images/icon-arcade.svg';
import icon_advanced from '../../assets/images/icon-advanced.svg';
import icon_pro from '../../assets/images/icon-pro.svg';

export default function AddOns() {
    const [monthlyDuration, setMonthlyDuration] = useState(true)
    const plan_inputs = [
        {title: 'Online service', price_label_year: '+$10/yr', price_year: 10, free: 'Access to multiplayer games', price_label_month: '$1/mo', price_month: 1,},
        {title: 'Larger storage', price_label_year: '+$20/yr', price_year: 20, free: 'Extra 1TB of cloud save', price_label_month: '$2/mo', price_month: 2},
        {title: 'Customizable profile', price_label_year: '+$20/yr', price_year: 20, free: 'Custom theme on your profile', price_label_month: '$2/mo', price_month: 2},
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

            <div className='field_label_inputs flex flex-wrap items-center justify-between'>
              {plan_inputs.map((plans, index) => (
                <label for={plans.title} className='selectable_cards block relative w-52 h-60 cursor-pointer' key={index}>
                  <input id={plans.title} type='checkbox' value={(monthlyDuration === true) ? plans.price_month : plans.price_year} className='checkbox hidden'/>
                  <div className='card_details 
                            flex flex-col
                            w-full h-full 
                            rounded-lg 
                            border border-solid border-gray-300
                            py-8 px-4'
                  >
                    <header className='w-full h-4/5'>{plans.icon}</header>
                    <h3 className='title font-semibold text-xl text-blue-950'>{plans.title}</h3>
                    <span className='price text-gray-400 text-xl font-normal'>{(monthlyDuration === true) ? plans.price_label_month : plans.price_label_year}</span>
                    <span className='freePackage text-blue-950'>{(monthlyDuration === false) ? plans.free : ''}</span>
                  </div>
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
