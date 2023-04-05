import React from 'react';
import './style/yourInfo_style.css';
import { useDispatch } from 'react-redux';
import { nextStep } from '../../app/purchaseSlice/purchaseSlice';

export default function YourInfo() {
    const dispatch = useDispatch()
    
    const personal_info_inputs = [
        {labels: 'name', title: 'Name', input_type: 'text', dummy_text: 'Ugorji Victor'},
        {labels: 'email', title: 'Email Address', input_type: 'email', dummy_text: 'email@email.com'},
        {labels: 'phone', title: 'Phone Number', input_type: 'tel', dummy_text: 'e.g. +234 813 000 0039'},
      ]

  return (
    <div className='yourInfo_container w-full h-full  text-blue-950'>
        <div className='w-full h-5/6'>
            <header>
              <h1 className='text-5xl font-bold'>Personal info</h1>
              <p className='text-xl text-gray-400 mt-4 mb-14'>
                Please provide your name, email address, and phone number.
              </p>
            </header>

            <div className='field_label_inputs'>
              {
                personal_info_inputs.map((inputs, index) => (
                  <div className='input_items mb-6' key={index}>

                    <div className='label_error flex justify-between items-center'>
                      <label for={inputs.labels} className='text-xl font-normal mb-2'>
                        {inputs.title}
                      </label>
                      <span className='error_message text-red-500 font-normal text-2xl'></span>
                    </div>

                    <input 
                      className='w-full h-14 text-xl rounded-md'
                      id={inputs.labels} 
                      type={inputs.input_type} 
                      placeholder={inputs.dummy_text}
                      required
                    />

                  </div> 
                ))
              }
            </div>
          </div>

          <footer className='w-full h-1/6 form_container flex justify-between items-end'>
            <button></button>
            <button 
              className='btn_next w-32 h-16 text-white text-xl font-semibold rounded-xl'
              onClick={() => dispatch(nextStep())}>Next Step</button>
          </footer>
    </div>
  )
}
