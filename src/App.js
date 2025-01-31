import './App.css';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
  return (
  <>
    <div className='main'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  </>
  );
}

export default App;
