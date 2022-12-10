import {React} from "react";
import '../CSS/Layout.css';
import {FaBookOpen,FaInbox,FaCalendar,FaPlus} from 'react-icons/fa'
import { Link, useNavigate,Route,Routes } from "react-router-dom";
import Inbox from './Components/Inbox'
import Login from './Components/Login';
import Projects from './Components/Projects'
import UpComing from './Components/UpComing'
import Register from './Components/Register'

const Layout = () => {
    const navigate = useNavigate()
    const handleLogin = () =>{
        navigate('/login')
    } ;
    const handleRegister = () =>{
        navigate('/register')
    }  
return(
<>
    <title>Book</title>
    <div className="main">
        <div className="nav_bar">
            <div className="row">
                <div className="col-4">
                    <div className="logo">
                        <Link to='/' className="link_to"> 
                            <h4 className="text_logo">
                            <FaBookOpen className="icons"/>
                            BOOK
                        </h4>
                        </Link>
                    </div>
                </div>
                <div className="col-4"></div>
                <div className="col-4">
                    <div className="row">
                        <div className="col-3">
                            <div className="btn_form">
                            <button type="button" className="btn_login" onClick={handleLogin}>Login</button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="btn-form">
                            <button type="button" className="btn_register"onClick={handleRegister} >Start for Free</button>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="btn_form">
                            <select className="selection">
                                <option selected>VN</option>
                                <option value="1">EN</option>
                            </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="content">
            <div className="left">
                <div className="list_option">
                    <ul className="option">
                        <li className="mt-2">
                            <Link to='/inbox' className="link_option" activeClassName='active'>
                                <FaInbox className="option_icons"/>
                                <span className="option_text">Inbox</span>
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link to='/' className="link_option">
                                <FaCalendar  className="option_icons"/>
                                <span className="option_text">Today</span>
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link to='upcoming'className="link_option">
                                <FaInbox  className="option_icons"/>
                                <span className="option_text">Upcoming</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="content_project">
                    <div className="btn_project">
                        <Link to='/projects' className="link_project">
                        <div className="d-flex">
                            <div className="left_project">
                                <h5>Projects</h5>
                            </div>
                        <div className="mid_project">
                            <button className="btn_Plus" type="button" ><FaPlus/></button>
                        </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mid">
                <Routes>
                <Route path='/inbox' element={<Inbox/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/upcoming' element={<UpComing/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                </Routes>
            
            </div>
            <div className="right"></div>
        </div>
        <div className="footer">
            <p className="footer_content">Copyright By @Nguyen Cong Huy</p>
        </div>
    </div>
    </>
)
}
export default Layout;
