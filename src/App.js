//style
import './style/style.css';
//component
import Sidebar from './components/Sidebar';
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
          main form
          <div>
            <button>Back</button>
            <button className='w-32 h-16 text-white text-xl rounded-lg bg-blue-600'>Next Step</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
//bg-cyan-100'