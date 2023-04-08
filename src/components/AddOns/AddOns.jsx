import React, { useEffect, useState } from 'react';
import './style/addOns_style.css';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, prevStep, getAddOns } from '../../app/purchaseSlice/purchaseSlice';

export default function AddOns() {
    const [service, setService] = useState([])
    const [storage, setStorage] = useState([])
    const [customProfile, setCustomProfile] = useState([])
    const data = useSelector((state) => state.subscriptionData)
    const dispatch = useDispatch()

    const handleCheck = (e, field) => {
      switch (field) {
        case 'service':
          if(e.target.checked){
            setService((data?.plan[2] === true) ? 
              {title: 'Online service', price_label_month: '$1/mo', price_month: 1} :
              {title: 'Online service', price_label_year: '+$10/yr', price_year: 10}
            )
          }else{
            setService([])
          }
        break;

        case 'storage':
          if(e.target.checked){
            setStorage((data?.plan[2] === true) ? 
              {title: 'Larger storage', price_label_month: '$2/mo', price_month: 2} :
              {title: 'Larger storage', price_label_year: '+$20/yr', price_year: 20}
            )
          }else{
            setStorage([])
          }
        break;

        case 'profile':
          if(e.target.checked){
            setCustomProfile((data?.plan[2] === true) ? 
              {title: 'Customizable profile', price_label_month: '$2/mo', price_month: 2} :
              {title: 'Customizable profile', price_label_year: '+$20/yr', price_year: 20}
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
  }, [service, storage, customProfile])
    
    console.log(data?.addOns,)

  return (
    <div className='addOns_container w-full h-full  text-blue-950'>
        <div className='w-full h-5/6'>
            <header>
              <h1 className='text-5xl font-bold'>Pick Add-ons</h1>
              <p className='text-xl text-gray-400 mt-4 mb-6'>
               Add-ons help enhance your gaming experience.
              </p>
            </header>

            <div className='addOns_list flex flex-col'>

              <label htmlFor='online_service' className='selectable_cards 
                      relative w-full h-28 rounded-lg 
                      cursor-pointer px-16 my-2
                      flex justify-between items-center
                      border border-solid border-gray-300
                  '>
                  <input id='online_service' type='checkbox' className='checkbox mr-4' onClick={(e) => handleCheck(e, 'service')}/>
                  <div className='card_details 
                            flex flex-col
                            w-full h-full 
                            py-8 px-4 relative'
                  >
                    <h3 className='title font-semibold text-xl text-blue-950'>Online service</h3>
                    <p className='freePackage text-gray-400 font-normal text-xl'>Access to multiplayer games</p>
                  </div>
                  
                  <span className='price text-lg font-semibold'>{(data?.plan[2] === true) ? '+$1/mo' : '+$10/yr'}</span>
              </label>

              <label htmlFor='larger_storage' className='selectable_cards 
                      relative w-full h-28 rounded-lg 
                      cursor-pointer px-16 my-2
                      flex justify-between items-center
                      border border-solid border-gray-300
                  '>
                  <input id='larger_storage' type='checkbox' className='checkbox mr-4' onClick={(e) => handleCheck(e, 'storage')}/>
                  <div className='card_details 
                            flex flex-col
                            w-full h-full 
                            py-8 px-4 relative'
                  >
                    
                    <h3 className='title font-semibold text-xl text-blue-950'>Larger storage</h3>
                    <p className='freePackage text-gray-400 font-normal text-xl'>Extra 1TB of cloud save</p>
                  </div>
                  
                  <span className='price text-lg font-semibold'>{(data?.plan[2] === true) ? '+$2/mo' : '+$20/yr'}</span>
              </label>

              <label htmlFor='customizable_profile' className='selectable_cards 
                      relative w-full h-28 rounded-lg 
                      cursor-pointer px-16 my-2
                      flex justify-between items-center
                      border border-solid border-gray-300
                  '>
                  <input id='customizable_profile' type='checkbox' className='checkbox mr-4' onClick={(e) => handleCheck(e, 'profile')}/>
                  <div className='card_details 
                            flex flex-col
                            w-full h-full 
                            py-8 px-4 relative'
                  >
                    
                    <h3 className='title font-semibold text-xl text-blue-950'>Customizable profile</h3>
                    <p className='freePackage text-gray-400 font-normal text-xl'>Custom theme on your profile</p>
                  </div>
                  
                  <span className='price text-lg font-semibold'>{(data?.plan[2] === true) ? '+$2/mo' : '+$20/yr'}</span>
              </label>


            </div>

          </div>

          <footer className='w-full h-1/6 form_container flex justify-between items-end'>
            <button 
              className='btn_back w-32 h-16 text-xl font-semibold'
              onClick={() => dispatch(prevStep())}
            >Go Back</button>
            <button 
              className='btn_next w-32 h-16 text-white text-xl font-semibold rounded-xl'
              onClick={() => dispatch(nextStep())}
            >Next Step</button>
          </footer>
    </div>
  )
}
/**const monthly_addOns = [
      {title: 'Online service', description: 'Access to multiplayer games', price_label_month: '$1/mo', price_month: 1,},
      {title: 'Larger storage',  description: 'Extra 1TB of cloud save', price_label_month: '$2/mo', price_month: 2},
      {title: 'Customizable profile', description: 'Custom theme on your profile', price_label_month: '$2/mo', price_month: 2},
    ];

    const yearly_addOns = [
      {title: 'Online service', price_label_year: '+$10/yr', price_year: 10, description: 'Access to multiplayer games'},
      {title: 'Larger storage', price_label_year: '+$20/yr', price_year: 20, description: 'Extra 1TB of cloud save'},
      {title: 'Customizable profile', price_label_year: '+$20/yr', price_year: 20, description: 'Custom theme on your profile'},
    ]
 */