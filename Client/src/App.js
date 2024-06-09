import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Protectedcomp from "./Protectedcomp/Protectedcomp";
import LandingPage from "./Pages/Landingcomp/Landingpage";
import Registerpage from "./Pages/Registercomp/Registerpage";
import Loginpage from "./Pages/Logincomp/Loginpage";
import Admincomp from './AdminPage/Admincomp';
import Totalcompcall from './Userpage/Totalcompcall';
import Homecomp from './Userpage/1.Homepage/Homecomp';
import Aboutcomp from './Userpage/4.AboutUsComp/Aboutcomp';
import Services2 from './Userpage/2.Services/Services';
import ContactUscomp from './Userpage/5.ContactUspage/ContactUscomp';
import Carrearpage from './Userpage/6.Carrearpage/Carrearpage';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/login" element={<Loginpage />} />

{/* side bar navigation */}
          
          <Route path="/home" element={<Homecomp />} />
          <Route path="/about" element={<Aboutcomp />} />
          <Route path="/services" element={<Services2 />} />
          <Route path="/careers" element={<Carrearpage />} />
          <Route path="/contact" element={<ContactUscomp />} />

          <Route
            path="/user"
            element={
              <Protectedcomp>
                < Totalcompcall/>
              </Protectedcomp>
            }
          />
  
          <Route
            path="/admin"
            element={
              <Protectedcomp>
                <Admincomp />
              </Protectedcomp>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
