import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dashbord from './components/Dashbord';
import View from './components/View';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div className="App">
      <header>
        <Header/>
        {/* <Sidebar/> */}
      </header>
      <section>
        <Routes>
          <Route path='/'element={<Sidebar/>} />
          <Route path='view/:id'element={<View/>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
