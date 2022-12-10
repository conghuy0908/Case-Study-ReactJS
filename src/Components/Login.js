import {React,useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('')
    const navigate = useNavigate();

    const handleChangeUser = (event) =>{
        setUser(event.target.value)
    }
    const handleChangePassword = (event) =>{
        setPassword(event.target.value)
    }
    const handleSubmit = () =>{
        if(user === 'admin' && password === 'letmein'){
            alert("Successed",navigate('/'))
        }else{
            alert("Bạn nhập sai")
        }
    }
    const Register = () =>{
        navigate('/register')
    }
    return(
        <div className="container-fluid mt-5">
            <div className="container" style={{border:"1px solid black",width:"300px"}} >
            <div className="row">
                <div className="col-12 text-center">
                    <h3> Login </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 ">
                <div className="input-group mt-2 d-flex justify-content-center">
                <input type="text" value={user} onChange={handleChangeUser} placeholder='User'/>
                </div>
                <div className="input-group mt-2 d-flex justify-content-center">
                <input type="password" value={password} onChange={handleChangePassword} placeholder='Password'/>
                </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-12 d-flex justify-content-center">
                <div class="form-group form-check ">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
                </div>
            </div> */}
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="btn-group">
                    <button type="submit" className="btn btn-success m-2" style={{borderRadius:"5px"}} onClick={handleSubmit}>Login</button>
                    <button type="button" className="btn btn-primary m-2"style={{borderRadius:"5px"}} onClick={Register}>Register ?</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Login;
