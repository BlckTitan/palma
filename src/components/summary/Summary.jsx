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
  return (
    <div className='summary_container w-full h-full  text-blue-950'>
        <div className='w-full h-5/6'>
            <header>
              <h1 className='text-3xl 2xl:text-4xl font-bold'>Finishing up</h1>
              <p className='text-base lg:text-lg xl:text-xl mt-3 2xl:mt-4 mb-3 xl:mb-4 2xl:mb-6 text-gray-400  '>
               Double-check everything looks OK before confirming.
              </p>
            </header>

            <div className='summary_report w-full min-h-fit'>

              <div className='purchaseSummary bg-gray-50 rounded-lg px-4 xl:px-8'>
                <header className='py-4 xl:py-4 border-solid border-b-2'>
                  <div className='title_price flex items-center justify-between'>
                    <h3 className='text-xl 2xl:text-2xl font-semibold text-blue-950'>{data?.plan[0]}</h3>
                    <span className='text-xl 2xl:text-2xl font-semibold text-blue-950'>
                      {(data?.plan[2] === true) ? `$${data?.plan[1]}/mo` : `$${data?.plan[1]}/yr`}
                    </span>
                  </div>
                  <button 
                    className='btn_change text-lg 2xl:text-xl text-gray-400 underline'
                    onClick={() => dispatch(changeStep(2))}
                  >Change</button>
                </header>

                <div className='addOns py-2 xl:py-4'>
                  {data?.addOns.map((purchase_addOns, index) => (
                    <div className='addOn_item flex items-center justify-between mb-2 2xl:mb-4' key={index}>
                          <p className='text-lg 2xl:text-xl text-gray-400 '>
                            {purchase_addOns.title}
                          </p>
                          <span className='text-lg 2xl:text-xl font-normal text-blue-950'>
                            {
                              purchase_addOns.price_label
                            }
                          </span>
                    </div>))
                  }

                </div>
              </div>

              <div className='total py-4 2xl:py-8 px-4 2xl:px-12 w-full min-h-fit flex items-center justify-between'>
                <p className='text-lg 2xl:text-xl text-gray-400'>
                  Total {(data?.plan[2] === true) ? `(per month)` : `(per year)`}
                </p>
                <span className='total_price font-normal 2xl:font-semibold'>
                  ${generateTotal()}
                </span>
              </div>

            </div>

          </div>

          <footer className='yourInfo_footer w-full h-20 xl:h-1/6 bg-white xl:bg-inherit xl:mt-0 p-4 xl:p-0
                            flex justify-between items-center xl:items-end fixed left-0 bottom-0 xl:static'>
            <button className='btn_back w-32 h-12 xl:h-14 2xl:h-16 text-lg xl:text-xl font-semibold' onClick={() => dispatch(prevStep())}>Go Back</button>
            <button 
              className='btn_confirm w-28 xl:w-32 h-12 xl:h-12 2xl:h-14 text-white text-lg xl:text-xl 
              font-normal xl:font-semibold rounded-md 2xl:rounded-xl' 
              onClick={() => dispatch(nextStep())}
              type='submit'
            >Confirm</button>
          </footer>
    </div>
  )
}
