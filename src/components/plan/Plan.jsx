import React, { useEffect, useState } from 'react';
//style
import './style/plan_style.css';
//icon
import icon_arcade from '../../assets/images/icon-arcade.svg';
import icon_advanced from '../../assets/images/icon-advanced.svg';
import icon_pro from '../../assets/images/icon-pro.svg';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, prevStep, getPlan, getErrorMessage } from '../../app/purchaseSlice/purchaseSlice';

export default function Plan() {
    const [monthlyDuration, setMonthlyDuration] = useState(true);
    const [planCost, setPlanCost] = useState('');
    const [planName, setPlanName] = useState('');

    const data = useSelector((state) => state.subscriptionData)

    const dispatch = useDispatch()

    const monthly_plan = [
      {icon: <img src={icon_arcade} alt=''/>, title: 'Arcade', price_label_month: '$9/mo', price_month: 9,},
      {icon: <img src={icon_advanced} alt=''/>, title: 'Advanced', price_label_month: '$12/mo', price_month: 12},
      {icon: <img src={icon_pro} alt=''/>, title: 'Pro', price_label_month: '$15/mo', price_month: 15},
    ]

    const yearly_plan = [
      {icon: <img src={icon_arcade} alt=''/>, title: 'Arcade', price_label_year: '$90/yr', price_year: 90, free: '2 months free'},
      {icon: <img src={icon_advanced} alt=''/>, title: 'Advanced', price_label_year: '$120/yr', price_year: 120, free: '2 months free'},
      {icon: <img src={icon_pro} alt=''/>, title: 'Pro', price_label_year: '$150/yr', price_year: 150, free: '2 months free'},
    ]
    const clearErrorMessage = () => {
      setTimeout(()=>{
        dispatch(getErrorMessage(''))
      }, 5000)
    }
    useEffect(()=>{
      dispatch(getPlan([planName, planCost, monthlyDuration]))
    }, [monthlyDuration, planName, planCost, dispatch])
  
    const validateMonthlyPlan = (e) =>{
      e.preventDefault()

      let emptyField = '';
      switch (planCost) {
        case emptyField:
          dispatch(getErrorMessage('No monthly plan selected'))
          clearErrorMessage()
        return false
        case 90:
          dispatch(getErrorMessage('No monthly plan selected'))
          clearErrorMessage()
        return false
        case 120:
          dispatch(getErrorMessage('No monthly plan selected'))
          clearErrorMessage()
        return false
        case 150:
          dispatch(getErrorMessage('No monthly plan selected'))
          clearErrorMessage()
        return false
        default: 
          dispatch(nextStep())
         break;
      }
    }

    const validateYearlyPlan = (e) =>{
      e.preventDefault()

      let emptyField = '';
      switch (planCost) {
        case emptyField:
          dispatch(getErrorMessage('No yearly plan selected'))
          clearErrorMessage()
        return false
        case 9:
          dispatch(getErrorMessage('No yearly plan selected'))
          clearErrorMessage()
        return false
        case 12:
          dispatch(getErrorMessage('No yearly plan selected'))
          clearErrorMessage()
        return false
        case 15:
          dispatch(getErrorMessage('No yearly plan selected'))
          clearErrorMessage()
        return false
        default: 
          dispatch(nextStep())
         break;
      }
    }

  return (
    <div className='plan_container w-full h-full  text-blue-950'>
        <div className='w-full 2xl:h-5/6'>
            <header className='mb-1'>
              <h1 className='text-3xl 2xl:text-4xl font-bold'>Select your plan</h1>
              <p className='text-lg xl:text-xl text-gray-400 mt-1 2xl:mt-2'>
               You have the option of monthly or yearly billing.
              </p>
            </header>

            <span className='error_message text-red-500 font-normal text-xl xl:text-2xl inline-block'>
              {(data?.errorMessage !== '') && data?.errorMessage}
            </span>

            <div className='planCards flex flex-wrap items-center justify-between mt-2 2xl:mt-2'>
              {(monthlyDuration === true) && monthly_plan.map((plans, index) => (
                <label htmlFor={plans.title} 
                  className='selectable_cards block relative w-full sm:w-44 xl:w-44 2xl:w-48 h-16 sm:h-52
                  xl:h-48 2xl:h-52 cursor-pointer mb-4 xl:mb-0' 
                  key={index}
                >
                  <input id={plans.title} name='subPlan' type='radio' 
                    onChange={() =>{
                          setPlanName(plans.title)
                          setPlanCost(plans.price_month)
                    }} 
                    className='plan hidden'
                  />
                  <div className='card_details 
                            flex flex-row items-center sm:items-start sm:flex-col
                            w-full h-full 
                            rounded-lg 
                            border border-solid border-gray-300
                            py-3 xl:py-4 2xl:py-6 px-4'
                  >
                    <header className='w-16 sm:w-full h-full sm:h-4/5'>{plans.icon}</header>
                    <div className='flex flex-col'>
                      <h3 className='title font-semibold text-lg xl:text-xl text-blue-950'>{plans.title}</h3>
                      <span className='price text-gray-400 text-lg xl:text-xl font-normal'>
                        {plans.price_label_month}
                      </span>
                    </div>
                  </div>
                </label>
              ))}

              {(monthlyDuration === false) && yearly_plan.map((plans, index) => (
                <label htmlFor={plans.title} 
                  className='selectable_cards block relative  w-full sm:w-44 xl:w-44 2xl:w-48 
                  h-20 sm:h-52 xl:h-48 2xl:h-52 cursor-pointer mb-3 xl:mb-0' 
                  key={index}
                >
                  <input id={plans.title} name='subPlan' type='radio' 
                    onChange={() =>{
                          setPlanName(plans.title)
                          setPlanCost(plans.price_year)
                    }} 
                    className='plan hidden'/>
                  <div className='card_details 
                            flex flex-row items-center sm:items-start sm:flex-col
                            w-full h-full 
                            rounded-lg 
                            border border-solid border-gray-300
                            py-2 xl:py-4 2xl:py-6 px-4'
                  >
                    <header className='w-16 sm:w-full h-full sm:h-4/5'>{plans.icon}</header>
                    <div className='flex flex-col'>
                      <h3 className='title font-semibold text-lg xl:text-xl text-blue-950'>{plans.title}</h3>
                      <span className='price text-gray-400 text-md xl:text-xl font-normal'>
                        {plans.price_label_year}
                      </span>
                      <span className='freePackage text-blue-950'>{plans.free}</span>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <div className='duration w-full h-12 xl:h-14 2xl:h-16 mt-2 xl:mt-6 2xl:mt-8 flex items-center justify-center bg-gray-50 rounded-2xl'>
              
                <span className={(monthlyDuration === true) ? 'mr-4 font-semibold text-lg xl:text-xl' : 'mr-4 font-semibold text-lg xl:text-xl text-gray-400'}>Monthly</span>
                    <label htmlFor='sub_duration' className='w-14 h-6 xl:h-7  cursor-pointer flex'>
                      <input id='sub_duration' type='checkbox' className='hidden' value={monthlyDuration} onClick={() => setMonthlyDuration(!monthlyDuration)}/>
                      <div className='toggle_fill relative w-full h-full bg-blue-950 rounded-2xl'></div>
                    </label>
                <span className={(monthlyDuration === false) ? 'ml-4 font-semibold text-lg xl:text-xl' : 'ml-4 font-semibold text-lg xl:text-xl text-gray-400'}>Yearly</span>
            </div>

          </div>

          <footer className='yourInfo_footer w-full h-20 xl:h-1/6 
            bg-white xl:bg-inherit p-4 xl:p-0
            flex justify-between items-center xl:items-end 
            fixed left-0 bottom-0 xl:mt-10 2xl:mt-3 xl:static'
          >
            <button className='btn_back w-32 h-16 text-lg xl:text-xl font-semibold' onClick={() => dispatch(prevStep())}>Go Back</button>
            <button className='btn_next w-28 xl:w-32 h-12 xl:h-12 2xl:h-14 text-white text-lg xl:text-xl font-normal xl:font-semibold rounded-md 2xl:rounded-xl' 
              onClick={(monthlyDuration === true) ? 
                (e) => validateMonthlyPlan(e) : 
                (e) => validateYearlyPlan(e)
              }
            >Next Step</button>
          </footer>
    </div>
  )
}