import './App.css'
import Menu from './Components/Menu/Menu'
import Navbar from './Components/Navbar/Navbar'
import Content from './Components/Content/Content'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';


function App() {

  return (
    <div className='app' >
      <BrowserRouter>
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Navbar />
          <Routes>
              <Route path="/">
                <Route index element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
               
              </Route>
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
