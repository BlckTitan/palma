//style
import './style/style.css';
//component
import Sidebar from './components/sidebar/Sidebar';
import YourInfo from './components/yourInfo/YourInfo';
import Plan from './components/plan/Plan';
import AddOns from './components/AddOns/AddOns';
import Summary from './components/summary/Summary';
import ThankYou from './components/thankYou/ThankYou';

import { useSelector } from 'react-redux';

function App() {
  const step = useSelector((state) => state.subscriptionData.step)
  return (
    <div 
      className="container max-w-full xl:h-screen flex xl:items-center 
      justify-center bg-cyan-50 p-0 xl:p-8 App relative
    ">
      <form 
        className='xl:bg-white w-full md:w-10/12 lg:w-9/12 xl:w-10/12 2xl:w-8/12 h-fit xl:h-fit 2xl:h-4/6 rounded-2xl xl:shadow-lg 
        flex flex-col xl:flex-row items-center xl:items-center mt-20 xl:mt-0'
      >
        
        <div className="sidebar">
          <Sidebar/>
        </div>

        <div 
          className='form_component w-full h-full xl:h-full 
          mt-1 xl:mt-0 z-10 xl:z-0 bg-white xl:bg-inherit 
          rounded-xl xl:rounded-2xl shadow-lg xl:shadow-none text-blue-950'
        >
          {(step === 1) && <YourInfo/>}
          {(step === 2) && <Plan/>}
          {(step === 3) && <AddOns/>}
          {(step === 4) && <Summary/>}
          {(step === 5) && <ThankYou/>}
        </div>
      </form>
    </div>
  );
}

export default App;