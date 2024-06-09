import React, { useState, useEffect } from 'react';
import Logo from "../assets/Ninjas.png";
import "./protected.css";
import { User, LogOut, ListCollapse } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setprofile } from "../Redux/userslice/userslice";
import { GetCurrentUsers } from "../Pages/Apicalls/user";

function Protectedcomp({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state.users);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await GetCurrentUsers();
        if (response) {
          dispatch(setprofile(response.data));
          if (response.data.isAdmin) {
            navigate('/admin');
          } else {
            navigate('/user');
          }
        } else {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        console.log("Error fetching profile:", error);
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    if (localStorage.getItem("token")) {
      getProfile();
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate]);

  const handleNavigation = (route) => {
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='navbar-container'>
        <div className='left-side'>
          <img className='ninjas-logos' src={Logo} alt="Logo" />
          <span className='heading'>NinjaScribe</span>
        </div>
        <div className='right-side'>
          <User style={{ color: "white" }} />
          <a style={{ color: "white" }}>
            {profile?.username}
          </a>
          <ListCollapse style={{ color: "white", cursor: "pointer" }} onClick={toggleSidebar} />
        </div>
      </div>

      <div className="content">
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <ul>
            <li className='Services-c' onClick={() => handleNavigation('/home')}>Home</li>
            <li className='Services-c' onClick={() => handleNavigation('/about')}>About</li>
            <li className='Services-c' onClick={() => handleNavigation('/services')}>Services</li>
            <li className='Services-c' onClick={() => handleNavigation('/careers')}>Careers</li>
            <li className='Services-c' onClick={() => handleNavigation('/contact')}>Contact</li>
            <li onClick={handleLogout}><LogOut style={{ color: "white" }} /> Logout</li>
          </ul>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
}

export default Protectedcomp;
