//style
import './style/style.css';
//component
import Sidebar from './components/sidebar/Sidebar';
//import YourInfo from './components/yourInfo/YourInfo';
import Plan from './components/plan/Plan';
function App() {

  
  
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
          <Plan/>
        </div>
      </form>
    </div>
  );
}

export default App;
//bg-cyan-100'
//<YourInfo/>