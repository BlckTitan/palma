import React, {useState, useEffect} from 'react';
import './style/yourInfo_style.css';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, getPersonalInfo, getErrorMessage, getErrorField} from '../../app/purchaseSlice/purchaseSlice';

export default function YourInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const data = useSelector((state) => state.subscriptionData);
    let emptyField = ''

    const dispatch = useDispatch();
    
    const validateInput = (e) =>{
      e.preventDefault()
      switch (emptyField) {
        case name:
          dispatch(getErrorField('name'));
          dispatch(getErrorMessage('This field is required'))
          clearErrorMessage()
        break;
        case email:
          dispatch(getErrorField('email'));
          dispatch(getErrorMessage('This field is required'));
          clearErrorMessage()
        break;
        case phone:
          dispatch(getErrorField('phone'));
          dispatch(getErrorMessage('This field is required'));
          clearErrorMessage()
        break;
        default: 
          dispatch(nextStep())
        break;
      }
    }
    const clearErrorMessage = () => {
      setTimeout(()=>{
        dispatch(getErrorMessage(''))
      }, 5000)
    }
    useEffect(()=>{
      dispatch(getPersonalInfo([name, email, phone]))
    }, [name, email, phone])
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
                  <div className='input_items mb-6'>

                    <div className='label_error flex justify-between items-center'>
                      <label htmlFor='name' className='text-xl font-normal mb-2'>
                        Name
                      </label>
                      <span className='error_message text-red-500 font-normal text-2xl'>
                        {(data?.errorMessage !== '' && data?.errorField === 'name') ?
                         data?.errorMessage : ''}
                      </span>
                    </div>

                    <input 
                      className='w-full h-14 text-xl rounded-md'
                      id='name' 
                      type='text '
                      placeholder='Ugorji Victor'
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                  </div> 

                  <div className='input_items mb-6'>

                    <div className='label_error flex justify-between items-center'>
                      <label htmlFor='email' className='text-xl font-normal mb-2'>
                        Email Address
                      </label>
                      <span className='error_message text-red-500 font-normal text-2xl'>
                        {(data?.errorMessage !== '' && data?.errorField === 'email') ?
                         data?.errorMessage : ''}
                      </span>
                    </div>

                    <input 
                      className='w-full h-14 text-xl rounded-md'
                      id='email' 
                      type='email'
                      placeholder='email@email.com'
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                  </div> 
                  
                  <div className='input_items mb-6'>

                  <div className='label_error flex justify-between items-center'>
                    <label htmlFor='phone' className='text-xl font-normal mb-2'>
                      Phone Number
                    </label>
                    <span className='error_message text-red-500 font-normal text-2xl'>
                      {(data?.errorMessage !== '' && data?.errorField === 'phone') ?
                       data?.errorMessage : ''}
                    </span>
                  </div>

                  <input 
                    className='w-full h-14 text-xl rounded-md'
                    id='phone'
                    type='tel' 
                    placeholder='e.g. +2348134484139'
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  </div> 
          </div>

          <footer className='w-full h-1/6 form_container flex justify-between items-end'>
            <button></button>
            <button 
              className='btn_next w-32 h-16 text-white text-xl font-semibold rounded-xl'
              onClick={(e) => validateInput(e)}>Next Step</button>
          </footer>
      </div>
    </div>
  )
}
