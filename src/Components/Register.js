import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
const [form, setForm] = useState({});
const datas = []
const navigate = useNavigate()

function handleChange(event) {
    setForm({
    ...form,
    [event.target.name] : event.target.value
});
}

function handleSubmit() {
    const isValid =
    form.username && form.email && form.password && form.confirmPassword;
    alert(isValid ? "Sign in success!!!" : "Please fill out all the fields!!!");
    if(isValid){
        datas.push([form.email,form.password])
        navigate('/login')
        console.log(datas)
        return datas
    }
}

return (
    <div className="container-fluid mt-5" style={{border:"1px solid black",width:"600px",height:"350px" }}>
        <div className="row">
            <div className="col-12 text-center">
            <h1 className="font-weight-bolder">Sign up</h1>
            </div>
        </div>
        <div className="row mt-4 ">
            <div className="col-3"></div>
            <div className="col-6 ">
            <form>
        <div className="form-group row">
        <label for="username" className="col-sm-3 col-form-label">Username</label>
        <div className="col-sm-9">
        <input
            type="text"
            name="username"
            value={form.username || ""}
            onChange={handleChange}
            id="username"
        />
        </div>
        </div>

        <div className="form-group row">
        <label for="Email" className="col-sm-3 col-form-label">Email</label>
        <div className="col-sm-9">
        <input
            type="email"
            name="email"
            value={form.email || ""}
            onChange={handleChange}
            id="Email"
        />
        </div>
        </div>

        <div className="form-group row">
        <label for="Password" className="col-sm-3 col-form-label">Password</label>
        <div className="col-sm-9">
        <input
            type="password"
            name="password"
            value={form.password || ""}
            onChange={handleChange}
            id="Password"
        />
        </div>
        </div>
        <div className="form-group row">
        <label for="confirmpassword" className="col-sm-3 col-form-label">Confirm Password</label>
        <div className="col-sm-9">
        <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword || ""}
            onChange={handleChange}
            id="confirmpassword"
        />
        </div>
        </div>
        <div className="row">
            <div className="col-12 text-center m-2 ">
            <button type="button" className="btn btn-primary" style={{width:"120px"}} onClick={handleSubmit}>
            Submit
        </button>
            </div>
        </div>
    </form>
            </div>
            <div className="col-3"></div>
            </div>
    </div>
);
}