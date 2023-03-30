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
        <div className='form_component'>main form</div>
      </form>
    </div>
  );
}

export default App;
//bg-cyan-100'