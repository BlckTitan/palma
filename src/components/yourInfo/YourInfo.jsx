import React, {useState, useEffect} from 'react';
import './style/yourInfo_style.css';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, getPersonalInfo, getErrorMessage, getErrorField} from '../../app/purchaseSlice/purchaseSlice';

export default function YourInfo() {
  
    const data = useSelector((state) => state.subscriptionData);
    const [name, setName] = useState(''  || data?.personalInfo[0]);
    const [email, setEmail] = useState('' || data?.personalInfo[1])
    const [phone, setPhone] = useState('' || data?.personalInfo[2])
    let emptyField = ''
    console.log(data?.personalInfo[0])
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
    }, [name, email, phone, dispatch]);
  return (
    <div className='yourInfo_container w-full h-fit  text-blue-950'>
        <div className='w-full h-4/6 lg:h-5/6'>
            <header>
              <h1 className='text-3xl 2xl:text-4xl font-bold'>Personal info</h1>
              <p className='text-base lg:text-lg xl:text-xl  text-gray-400 mt-3 mb-3 xl:mb-4 2xl:mb-6'>
                Please provide your name, email address, and phone number.
              </p>
            </header>

            <div className='field_label_inputs'>
                  <div className='input_items mb-2 lg:mb-4 2xl:mb-6'>

                    <div className='label_error flex justify-between items-center'>
                      <label htmlFor='name' className='text-base xl:text-xl font-normal mb-1 xl:mb-2'>
                        Name
                      </label>
                      <span className='error_message text-red-500 font-normal text-xl xl:text-2xl'>
                        {(data?.errorMessage !== '' && data?.errorField === 'name') ?
                         data?.errorMessage : ''}
                      </span>
                    </div>

                    <input 
                      className={((data?.errorMessage !== '' && data?.errorField === 'name')) ? 
                      'w-full h-10 xl:h-10 2xl:h-12 text-lg 2xl:text-xl rounded-md border-2 border-solid border-red-500' :
                      'w-full h-10 xl:h-10 2xl:h-12 text-lg 2xl:text-xl rounded-md'
                      }
                      id='name' 
                      type='text '
                      placeholder='Ugorji Victor'
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                  </div> 

                  <div className='input_items mb-2 lg:mb-4 2xl:mb-6'>

                    <div className='label_error flex justify-between items-center'>
                      <label htmlFor='email' className='text-base xl:text-xl font-normal mb-1 xl:mb-2'>
                        Email Address
                      </label>
                      <span className='error_message text-red-500 font-normal text-xl xl:text-2xl'>
                        {(data?.errorMessage !== '' && data?.errorField === 'email') ?
                         data?.errorMessage : ''}
                      </span>
                    </div>

                    <input 
                      className={((data?.errorMessage !== '' && data?.errorField === 'email')) ? 
                      'w-full h-10 xl:h-10 2xl:h-12 text-lg 2xl:text-xl rounded-md border-2 border-solid border-red-500' :
                      'w-full h-10 xl:h-10 2xl:h-12 text-lg 2xl:text-xl rounded-md'
                      }
                      id='email' 
                      type='email'
                      placeholder='email@email.com'
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                  </div> 
                  
                  <div className='input_items mb-2 lg:mb-4 2xl:mb-6'>

                  <div className='label_error flex justify-between items-center'>
                    <label htmlFor='phone' className='text-base xl:text-xl font-normal mb-1 xl:mb-2'>
                      Phone Number
                    </label>
                    <span className='error_message text-red-500 font-normal text-xl xl:text-2xl'>
                      {(data?.errorMessage !== '' && data?.errorField === 'phone') ?
                       data?.errorMessage : ''}
                    </span>
                  </div>

                  <input 
                    className={((data?.errorMessage !== '' && data?.errorField === 'phone')) ? 
                    'w-full h-10 xl:h-10 2xl:h-12 text-lg 2xl:text-xl rounded-md border-2 border-solid border-red-500' :
                    'w-full h-10 xl:h-10 2xl:h-12 text-lg 2xl:text-xl rounded-md'
                    }
                    id='phone'
                    type='tel' 
                    placeholder='e.g. +2348134484139'
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  </div> 
          </div>

          <footer className='yourInfo_footer w-full h-20 xl:h-1/6 bg-white xl:bg-inherit p-4 xl:p-0
                            flex justify-between items-center xl:items-end fixed left-0 bottom-0 xl:static
                            mt-0 xl:mt-16'
          >
            <button></button>
            <button 
              className='btn_next w-28 xl:w-32 h-12 xl:h-12 2xl:h-14 text-white text-lg xl:text-xl font-normal xl:font-semibold rounded-md 2xl:rounded-xl'
              onClick={(e) => validateInput(e)}>Next Step</button>
          </footer>
      </div>
    </div>
  )
}
