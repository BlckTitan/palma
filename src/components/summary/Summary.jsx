import React from 'react';
import './style/summary_style.css';
import { useDispatch } from 'react-redux';
import { changeStep, nextStep, prevStep } from '../../app/purchaseSlice/purchaseSlice';
export default function Summary({userPlan}) {
    const dispatch = useDispatch();

  return (
    <div className='summary_container w-full h-full  text-blue-950'>
        <div className='w-full h-5/6'>
            <header>
              <h1 className='text-5xl font-bold'>Finishing up</h1>
              <p className='text-xl text-gray-400 mt-4 mb-6'>
               Double-check everything looks OK before confirming.
              </p>
            </header>

            <div className='summary_report w-full min-h-fit'>

              <div className='purchaseSummary bg-gray-50 rounded-lg px-12'>
                <header className='py-8 border-solid border-b-2'>
                  <div className='title_price flex items-center justify-between'>
                    <h3 className='text-2xl font-semibold text-blue-950'>Arcade(monthly)</h3>
                    <span className='text-2xl font-semibold text-blue-950'>$9/mo</span>
                  </div>
                  <button 
                    className='btn_change text-xl text-gray-400 underline'
                    onClick={() => dispatch(changeStep(2))}
                  >Change</button>
                </header>

                <div className='addOns py-8'>

                  <div className='addOn_item flex items-center justify-between mb-4'>
                    <p className='text-xl text-gray-400 '>Online service</p>
                    <span className='text-xl font-normal text-blue-950'>+$1/mo</span>
                  </div>

                  <div className='addOn_item flex items-center justify-between'>
                    <p className='text-xl text-gray-400'>Larger storage</p>
                    <span className='text-xl font-normal text-blue-950'>+$2/mo</span>
                  </div>

                </div>
              </div>

              <div className='total py-8 px-12 w-full min-h-fit flex items-center justify-between'>
                <p className='text-xl text-gray-400'>Total</p>
                <span className='total_price font-semibold'>+$2/mo</span>
              </div>

            </div>

          </div>

          <footer className='w-full h-1/6 form_container flex justify-between items-end'>
            <button className='btn_back w-32 h-16 text-xl font-semibold' onClick={() => dispatch(prevStep())}>Go Back</button>
            <button 
              className='btn_confirm w-32 h-16 text-white text-xl font-semibold rounded-xl' 
              onClick={() => dispatch(nextStep())}
              type='submit'
            >Confirm</button>
          </footer>
    </div>
  )
}
