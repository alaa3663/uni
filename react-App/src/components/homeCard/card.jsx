import { TiMail } from "react-icons/ti";
import { MdLock } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./card.css"; 
export default function card(props) {
    const isSignup = props.isSignup || false;
    const navigate = useNavigate();
  
    const handleLogin = () => {navigate('/dashboard');};
    return (
        <div className="card-page-body">
            <IoBookSharp className="head-icon"/>
            <h1 className="header">{props.header}</h1>

            {isSignup && (
            <>
                <label className="firstpage">Full Name</label><br/>
                <input className="label" type="text" placeholder="John Doe"/><br/>

                <label className="firstpage">Student ID</label><br/>
                <input className="label" type="text" placeholder="20240001"/><br/>

                <label className="firstpage">Major</label><br/>
                <input className="label" type="text" placeholder="Computer Science"/><br/>
            </>
            )}
            

            <label className="firstpage">Email</label><br></br>
           
            <input className="label" type="email" placeholder="student@university.edu"/> <TiMail className="icon"/><br></br>
            
            <label className="firstpage">Password</label><br></br>
            <input className="label" id="psw" type="password" placeholder="Enter your password"/><MdLock id="lock-icon" className="icon"/><br></br>

            {isSignup && (
                <>
                <label className="firstpage">Confirm Password</label><br/>
                <input className="label" type="password" placeholder="Confirm your password"/>
                <MdLock className="icon"/><br/>
                </>
            )}
            
           <button className="but" onClick={() => {
                if (props.button === "Login") {
                    navigate('/dashboard');
                } else if (props.button === "Sign Up") {
                    navigate('/');
                }
            }}>
                {props.button}
            </button>
            
            <p id="footer">{props.Q}<Link to={props.to}>{props.sign}</Link></p>
            {!isSignup && (
                <>
                <span className="or-text">or</span><br/>
                <button className="user-type"><MdOutlineAdminPanelSettings className="admin-icon"/> admin portal</button><br/>
                <button className="user-type"><FaChalkboardTeacher className="teacher-icon"/> teacher portal</button>
                </>
            )}
    </div>
    );
}