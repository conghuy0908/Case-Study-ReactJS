import {React} from "react";
import {FaBookOpen,FaInbox,FaCalendar,FaPlus} from 'react-icons/fa'
import { Link, useNavigate,Route,Routes } from "react-router-dom";
import Inbox from './Components/Inbox'
import Login from './Components/Login';
import UpComing from './Components/UpComing'
import Register from './Components/Register'
import Projects from './Components/Projects'




const App = () => {
    const navigate = useNavigate()
    const handleLogin = () =>{
        navigate('/login')
    } ;
    const handleRegister = () =>{
        navigate('/register')
    }  
return(
    <div className="container-fluid">
        <div className="container-fluid" style={{background:"#F5F5F5"}}>
            <div className="row">
                <div className="col-sm" >
                <Link to='/' className="navbar-brand" > 
                <h4 className="mt-2">
                <FaBookOpen style={{width: '40px',height:'40px'}} />
                BOOK
                </h4>
                </Link>
                </div>
                <div className="col-sm">
                </div>
                <div className="col-sm">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 d-flex justify-content-end">
                            <button type="button" className="btn btn-success mt-2" onClick={handleLogin}>Login</button>
                            </div>
                            <div className="col-sm-5 text-center">
                            <button type="button" className="btn btn-primary mt-2"onClick={handleRegister} >Start for Free</button>
                            </div>
                            <div className="col-sm-2 mt-3" >
                            <select className="custom-select" style={{background : '#F5F5F5',border: 'none' }}>
                                <option  selected>VN</option>
                                <option value="1">EN</option>
                            </select>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="container-fluid mt-4" style={{height:"500px"}}>
            <div className="row">
                <div className="col-3" style={{height:"500px",borderRight:"1px solid black"}}>
                    <div className="list-group">
                    <Link to='/inbox' className="list-group-item list-group-item-action" style={{border:"none"}}>
                            <FaInbox className="m-2" style={{width:'25px',height:'20px'}}/>
                            <span className="m-2" style={{fontSize:"20px"}}>Inbox</span>
                    </Link>
                    <Link to='/' className="list-group-item list-group-item-action" style={{border:"none"}}>
                                <FaCalendar  className="m-2" style={{width:'25px',height:'20px'}}/>
                                <span className="m-2" style={{fontSize:"20px"}}>Today</span>
                    </Link>
                    <Link to='upcoming' className="list-group-item list-group-item-action" style={{border:"none"}}>
                                <FaInbox  className="m-2" style={{width:'25px',height:'20px'}}/>
                                <span className="m-2" style={{fontSize:"20px"}}>Upcoming</span>
                    </Link>
                    <div className="container-f mt-2">
                        <div className="row">
                            <div className="col-12">
                            <Link to='/projects' className="list-group-item list-group-item-action" style={{border:"none"}}>
                        <div className="row">
                            <div className="col-10">
                                <h6 className="m-1">Projects</h6>
                            </div>
                        <div className="col-2">
                            <Link to='/'><FaPlus style={{color:'black'}}/></Link>
                        </div>
                        </div>
                        </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-9">
                <Routes>
                <Route path='/inbox' element={<Inbox/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/upcoming' element={<UpComing/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                </Routes>
                </div>
                </div>
        </div>
        <footer>
        <div class="text-center p-4" style={{background: "rgba(0, 0, 0, 0.05)"}}>
        © 2021 Copyright: Nguyen Cong Huy
        </div>
        </footer>
    </div>
)
}
export default App;
