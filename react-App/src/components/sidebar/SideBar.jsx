import { IoBookSharp } from "react-icons/io5";
import { MdDashboard, MdLogout } from "react-icons/md";
import { FaBook, FaChartBar, FaCalendarTimes, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import { useNavigate } from 'react-router-dom';

function SideBar() {
    const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here (clear tokens, etc.)
    console.log('Logging out...');
    navigate('/');
  };
  return (
    <div className="sideBar">
      <p><IoBookSharp />University Companion</p>
      <div className="info"> 
        <p className="nom">nana</p>
        <p className="mail">nan@gmail.com</p>
      </div>
      <div className="middle">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
          <MdDashboard /> Dashboard
        </NavLink>
        <NavLink to="/courses" className={({ isActive }) => isActive ? "active" : ""}>
          <FaBook /> Courses
        </NavLink>
        <NavLink to="/grades" className={({ isActive }) => isActive ? "active" : ""}>
          <FaChartBar /> Grades
        </NavLink>
        <NavLink to="/absences" className={({ isActive }) => isActive ? "active" : ""}>
          <FaCalendarTimes /> Absences
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
          <FaUser /> Profile
        </NavLink>
      </div>
    <div className="footer">
      <button onClick={handleLogout}>
        <MdLogout /> Sign Out
      </button>
    </div>
    </div>
  );
}

export default SideBar;