import React from 'react';
import { useSelector } from 'react-redux';

export default function Sidebar() {
    const step = useSelector((state) => state.subscriptionData.step)

    const sidebar_items = [
        {step_count: 1, step: 'STEP 1', step_title: 'YOUR INFO'},
        {step_count: 2, step: 'STEP 2', step_title: 'SELECT PLAN'},
        {step_count: 3, step: 'STEP 3', step_title: 'ADD-ONS'},
        {step_count: 4, step: 'STEP 4', step_title: 'SUMMARY'},
    ]
  return (
    <>
        <ul className='mt-4 xl:mt-0 2xl:mt-12 mb-16 2xl:mb-0 h-24 xl:h-96 2xl:h-64 flex flex-row justify-center xl:items-start xl:flex-col relative xl:static'>

        {
            sidebar_items.map((item, index) => (
                <li className='flex flex-col xl:flex-row items-center 
                w-8 xl:w-full mr-5 md:mr-8 lg:mr-8 2xl:mr-0 h-8 xl:h-16 mt-4 xl:mt-2 2xl:mt-8 xl:pl-4 2xl:pl-14 text-white  lg:static' key={index}>
                    <div 
                        className={ (step === item.step_count) ? 
                        'step_count flex justify-center items-center  xl:mr-6 text-2xl w-8 xl:w-8 2xl:w-12 h-8 xl:h-8 2xl:h-12 rounded-full bg-cyan-100 text-blue-950' : 
                        'step_count flex justify-center items-center xl:mr-6 text-2xl w-8 xl:w-8 2xl:w-12 h-8 xl:h-8 2xl:h-12 rounded-full border-cyan-100 border xl:border-2 border-solid'}
                    >
                        <span>{item.step_count}</span>
                    </div>
                    <div className='step_title  hidden xl:inline-block'>
                        <span className='step text-slate-300'>{item.step}</span>
                        <h2 className='step_title text-xl font-bold'>{item.step_title}</h2>
                    </div>
                </li>
            ))
        }

        </ul>
</>
  )
}
