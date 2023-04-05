import React, { useState } from 'react';
//style
import './style/plan_style.css';
//icon
import icon_arcade from '../../assets/images/icon-arcade.svg';
import icon_advanced from '../../assets/images/icon-advanced.svg';
import icon_pro from '../../assets/images/icon-pro.svg';
import { useDispatch } from 'react-redux';
import { nextStep, prevStep } from '../../app/purchaseSlice/purchaseSlice';

export default function Plan() {
    const [monthlyDuration, setMonthlyDuration] = useState(true)

    const dispatch = useDispatch()

    const plan_inputs = [
        {icon: <img src={icon_arcade} alt=''/>, title: 'Arcade', price_label_year: '$90/yr', price_year: 90, free: '2 months free', price_label_month: '$9/mo', price_month: 9,},
        {icon: <img src={icon_advanced} alt=''/>, title: 'Advanced', price_label_year: '$120/yr', price_year: 120, free: '2 months free', price_label_month: '$12/mo', price_month: 12},
        {icon: <img src={icon_pro} alt=''/>, title: 'Pro', price_label_year: '$150/yr', price_year: 150, free: '2 months free', price_label_month: '$15/mo', price_month: 15},
      ]

  return (
    <div className='plan_container w-full h-full  text-blue-950'>
        <div className='w-full h-5/6'>
            <header>
              <h1 className='text-5xl font-bold'>Select your plan</h1>
              <p className='text-xl text-gray-400 mt-4 mb-14'>
               You have the option of monthly or yearly billing.
              </p>
            </header>

            <div className='planCards flex flex-wrap items-center justify-between'>
              {plan_inputs.map((plans, index) => (
                <label for={plans.title} className='selectable_cards block relative w-52 h-60 cursor-pointer' key={index}>
                  <input id={plans.title} name='subPlan' type='radio' value={(monthlyDuration === true) ? plans.price_month : plans.price_year} className='plan hidden'/>
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

            <div className='duration w-full h-16 mt-8 flex items-center justify-center bg-gray-50 rounded-2xl'>
              
                <span className={(monthlyDuration === true) ? 'mr-4 font-semibold text-xl' : 'mr-4 font-semibold text-xl text-gray-400'}>Monthly</span>
                    <label for='sub_duration' className='w-14 h-8  cursor-pointer flex'>
                      <input id='sub_duration' type='checkbox' className='hidden' onClick={() => setMonthlyDuration(!monthlyDuration)}/>
                      <div className='toggle_fill relative w-full h-full bg-blue-950 rounded-2xl'></div>
                    </label>
                <span className={(monthlyDuration === false) ? 'ml-4 font-semibold text-xl' : 'ml-4 font-semibold text-xl text-gray-400'}>Yearly</span>
            </div>

          </div>

          <footer className='w-full h-1/6 form_container flex justify-between items-end'>
            <button className='btn_back w-32 h-16 text-xl font-semibold' onClick={() => dispatch(prevStep())}>Go Back</button>
            <button className='btn_next w-32 h-16 text-white text-xl font-semibold rounded-xl' onClick={() => dispatch(nextStep())}>Next Step</button>
          </footer>
    </div>
  )
}
