import React from 'react';

export default function Sidebar() {
    const sidebar_items = [
        {step_count: 1, step: 'STEP 1', step_title: 'YOUR INFO'},
        {step_count: 2, step: 'STEP 2', step_title: 'SELECT PLAN'},
        {step_count: 3, step: 'STEP 3', step_title: 'ADD-ONS'},
        {step_count: 4, step: 'STEP 4', step_title: 'SUMMARY'},
    ]
  return (
    <>
        <ul className='mt-8 h-64'>

        {
            sidebar_items.map((item, index) => (
                <li className='flex items-center w-full h-16 mt-4 pl-14 text-white' key={index}>
                <div className='step_count flex justify-center items-center mr-6 text-2xl w-12 h-12 rounded-full border-cyan-100 border-2 border-solid'>
                    <span>{item.step_count}</span>
                </div>
                <div className='step_title'>
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
