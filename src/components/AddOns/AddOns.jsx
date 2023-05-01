import React, { useEffect, useState } from 'react';
import './style/addOns_style.css';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, prevStep, getAddOns } from '../../app/purchaseSlice/purchaseSlice';

export default function AddOns() {
    const data = useSelector((state) => state.subscriptionData)
    const [service, setService] = useState('' || data?.addOns[0])
    const [storage, setStorage] = useState('' || data?.addOns[1])
    const [customProfile, setCustomProfile] = useState('' || data?.addOns[2])
    const dispatch = useDispatch()

    const handleCheck = (e, field) => {
      switch (field) {
        case 'service':
          if(e.target.checked){
            setService((data?.plan[2] === true) ? 
              {title: 'Online service', price_label: '$1/mo', cost: 1, duration: 'month'} :
              {title: 'Online service', price_label: '+$10/yr', cost: 10, duration: 'year'}
            )
          }else{
            setService([])
          }
        break;

        case 'storage':
          if(e.target.checked){
            setStorage((data?.plan[2] === true) ? 
              {title: 'Larger storage', price_label: '$2/mo', cost: 2, duration: 'month'} :
              {title: 'Larger storage', price_label: '+$20/yr', cost: 20, duration: 'year'}
            )
          }else{
            setStorage([])
          }
        break;

        case 'profile':
          if(e.target.checked){
            setCustomProfile((data?.plan[2] === true) ? 
              {title: 'Customizable profile', price_label: '$2/mo', cost: 2, duration: 'month'} :
              {title: 'Customizable profile', price_label: '+$20/yr', cost: 20, duration: 'year'}
            )
          }else{
            setCustomProfile([])
          }
        break;
        default:
          setStorage([])
          setService([])
          setCustomProfile([])
        break;
      }
    }

  useEffect(()=>{
    dispatch(getAddOns([service, storage, customProfile]))
  }, [service, storage, customProfile, dispatch])
    
  return (
    <div className='addOns_container w-full h-full  text-blue-950'>
        <div className='w-full h-5/6'>
            <header>
              <h1 className='text-3xl 2xl:text-4xl font-bold'>Pick Add-ons</h1>
              <p className='text-base lg:text-lg xl:text-xl text-gray-400 mt-1 2xl:mt-2 mb-2 xl:mb-2 2xl:mb-2'>
               Add-ons help enhance your gaming experience.
              </p>
            </header>

            <div className='addOns_list flex flex-col'>

              <label htmlFor='online_service' className='selectable_cards 
                      relative w-full h-24 xl:h-24 rounded-lg 
                      cursor-pointer px-4 xl:px-16 my-2
                      flex justify-between items-center
                      border border-solid border-gray-300
                  '>
                  <input id='online_service' type='checkbox' 
                  className={((data?.addOns[0] !== '') && (data?.addOns[0].title === 'Online service')) ? ' checked checkbox mr-4' : 'checkbox mr-4'}  
                  onClick={(e) => handleCheck(e, 'service')}/>
                  <div className='card_details 
                            flex flex-col justify-center
                            w-full h-full 
                            py-2 xl:py-4 2xl:py-8 px-0 xl:px-4 relative'
                  >
                    <h3 className='title font-bold xl:font-semibold text-lg xl:text-xl text-blue-950'>Online service</h3>
                    <p className='freePackage text-gray-400 font-normal text-base sm:text-lg xl:text-xl'>Access to multiplayer games</p>
                  </div>
                  
                  <span className='price text-base xl:text-lg font-semibold xl:font-semibold'>{(data?.plan[2] === true) ? '+$1/mo' : '+$10/yr'}</span>
              </label>

              <label htmlFor='larger_storage' className='selectable_cards 
                      relative w-full h-24 xl:h-24 rounded-lg 
                      cursor-pointer px-4 xl:px-16 my-2
                      flex justify-between items-center
                      border border-solid border-gray-300
                  '>
                  <input id='larger_storage' type='checkbox' 
                  className={((data?.addOns[1] !== '') && (data?.addOns[1].title === 'Larger storage')) ? ' checked checkbox mr-4' : 'checkbox mr-4'}  
                  onClick={(e) => handleCheck(e, 'storage')}/>
                  <div className='card_details 
                            flex flex-col justify-center
                            w-full h-full 
                            py-2 xl:py-4 2xl:py-8 px-0 xl:px-4 relative'
                  >
                    
                    <h3 className='title font-bold xl:font-semibold text-lg xl:text-xl text-blue-950'>Larger storage</h3>
                    <p className='freePackage text-gray-400 font-normal text-base sm:text-lg xl:text-xl'>Extra 1TB of cloud save</p>
                  </div>
                  
                  <span className='price text-base xl:text-lg font-semibold xl:font-semibold'>{(data?.plan[2] === true) ? '+$2/mo' : '+$20/yr'}</span>
              </label>

              <label htmlFor='customizable_profile' className='selectable_cards 
                      relative w-full h-24 xl:h-24 rounded-lg 
                      cursor-pointer px-4 xl:px-16 my-2
                      flex justify-between items-center
                      border border-solid border-gray-300
                  '>
                  <input id='customizable_profile' type='checkbox' 
                  className={((data?.addOns[2] !== '') && (data?.addOns[2].title === 'Customizable profile')) ? ' checked checkbox mr-4' : 'checkbox mr-4'}  
                  onClick={(e) => handleCheck(e, 'profile')}/>
                  <div className='card_details 
                            flex flex-col justify-center
                            w-full h-full 
                            py-2 xl:py-4 2xl:py-8 px-0 xl:px-4 relative'
                  >
                    
                    <h3 className='title font-bold xl:font-semibold text-base xl:text-xl text-blue-950'>Customizable profile</h3>
                    <p className='freePackage text-gray-400 font-normal text-base sm:text-lg xl:text-xl'>Custom theme on your profile</p>
                  </div>
                  
                  <span className='price text-base xl:text-lg font-semibold xl:font-semibold'>{(data?.plan[2] === true) ? '+$2/mo' : '+$20/yr'}</span>
              </label>


            </div>

          </div>

          <footer className='form_container w-full h-20 xl:h-1/6 bg-white xl:bg-inherit xl:mt-0 p-4 xl:p-0
                            flex justify-between items-center xl:items-end fixed left-0 bottom-0 xl:static'>
            <button 
              className='btn_back w-32 h-16 text-lg xl:text-xl font-semibold'
              onClick={() => dispatch(prevStep())}
            >Go Back</button>
            <button 
              className='btn_next w-28 xl:w-32 h-12 xl:h-12 2xl:h-14
               text-white text-lg xl:text-xl font-normal xl:font-semibold rounded-md 2xl:rounded-xl'
              onClick={() => dispatch(nextStep())}
            >Next Step</button>
          </footer>
    </div>
  )
}