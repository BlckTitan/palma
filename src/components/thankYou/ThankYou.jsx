import React, { useEffect } from 'react';
import './style/thankYou_style.css';
import icon_thankYou from '../../assets/images/icon-thank-you.svg';

export default function ThankYou() {
    useEffect(()=>{
      setTimeout(()=>{
        window.location = '/'
      }, 5000)
    }, [])
  return (
    <div className='thankYou_container w-full h-full flex flex-col items-center justify-center text-blue-950'>
      <header className='flex flex-col items-center justify-center'>
        <img alt='' src={icon_thankYou}/>
        <h1 className='text-3xl 2xl:text-5xl text-center font-bold mt-2 xl:mt-8 2xl:mt-12'>Thank you!</h1>
      </header>

      <div className='summary_report w-full min-h-fit mt-4 2xl:mt-8'>
        <p className='text-center text-lg 2xl:text-2xl text-gray-400'>
          Thanks for confirming your subscription! 
          We hope you have fun using our platform. 
          If you ever need support, 
          please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  )
}
