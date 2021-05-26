import './App.css';
import Header from './components/header/header';
import SideBar from './components/sideBar/sideBar';

function App() {
  return (
    <div className="app">
      <Header/>

      <div className="app_body">
        <SideBar/>

      </div>
      

    </div>
  );
}

export default App;
