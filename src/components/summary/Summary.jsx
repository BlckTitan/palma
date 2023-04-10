import React from 'react';
import './style/summary_style.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeStep, nextStep, prevStep } from '../../app/purchaseSlice/purchaseSlice';
export default function Summary() {
  
    const data = useSelector((state) => state.subscriptionData)
    const dispatch = useDispatch();
    let totalAddOns = 0;
    const generateTotal = () =>{
      totalAddOns = totalAddOns += (((data?.addOns[0]?.length=== 0) ? 0 : data?.addOns[0]?.cost) + 
      ((data?.addOns[1]?.length === 0) ? 0 : data?.addOns[1]?.cost) + 
      ((data?.addOns[2]?.length === 0) ? 0 : data?.addOns[2]?.cost));

      return data.plan[1] + totalAddOns
    }
    console.log(data?.addOns, totalAddOns)
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
                    <h3 className='text-2xl font-semibold text-blue-950'>{data?.plan[0]}</h3>
                    <span className='text-2xl font-semibold text-blue-950'>
                      {(data?.plan[2] === true) ? `${data?.plan[1]}/mo` : `${data?.plan[1]}/yr`}
                    </span>
                  </div>
                  <button 
                    className='btn_change text-xl text-gray-400 underline'
                    onClick={() => dispatch(changeStep(2))}
                  >Change</button>
                </header>

                <div className='addOns py-8'>
                  {data?.addOns.map((purchase_addOns, index) => (
                    <div className='addOn_item flex items-center justify-between mb-4' key={index}>
                          <p className='text-xl text-gray-400 '>
                            {purchase_addOns.title}
                          </p>
                          <span className='text-xl font-normal text-blue-950'>
                            {
                              purchase_addOns.price_label
                            }
                          </span>
                    </div>))
                  }

                </div>
              </div>

              <div className='total py-8 px-12 w-full min-h-fit flex items-center justify-between'>
                <p className='text-xl text-gray-400'>Total</p>
                <span className='total_price font-semibold'>
                  ${generateTotal()}
                </span>
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
