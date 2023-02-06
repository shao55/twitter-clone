import logo from './logo.svg';
import './App.css';
import SideMenu from './components/SideMenu';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <SideMenu/>
      <div className='vertical-divider'></div>
      <Home/>
      <div className='vertical-divider'></div>
    </div>
  );
}

export default App;
