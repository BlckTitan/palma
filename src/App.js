//style
import './style/style.css';
//component
import Sidebar from './components/sidebar/Sidebar';
import YourInfo from './components/yourInfo/YourInfo';
import Plan from './components/plan/Plan';
import AddOns from './components/addOns/AddOns';
import Summary from './components/summary/Summary';
import ThankYou from './components/thankYou/ThankYou';
import { useSelector } from 'react-redux';
function App() {
  const step = useSelector((state) => state.formStep.step)
  return (
    <div className="
      container max-w-full h-screen flex items-center justify-center
      bg-cyan-50 p-8 App
    ">
      <form className='bg-white w-8/12 h-4/6 rounded-2xl shadow-lg flex items-center'>
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className='form_component w-full h-full  text-blue-950'>
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
//bg-cyan-100'
//<YourInfo/>