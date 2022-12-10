import React, { useState } from 'react';
import {FaPlus} from 'react-icons/fa';

export const dataBase = [];

const Inbox = () => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))


    const [show,setShow] = useState(true)
    const [showdate,setShowDate] = useState(true);
    const [date,setDate] = useState();
    const [task,setTask] = useState();
    const [discrip,setDiscrip] = useState();
    const [todos,setTodos] = useState(storageJobs ?? []);

    const handleDelete = (id) =>{
        const newTodos = todos.filter(todo => todo !== id)
        setTodos(newTodos)
}

    const handleComplete = (id) =>{
        const newTodo = todos.map(todo => {
            if(todo === id){
                return ({...todo,status : !todo.status})
            }
            return todo;
        })
        setTodos(newTodo)
        console.log(newTodo);
    }
    const handleAdd = () =>{
        const fill = task && discrip && date
        if(fill){
            setTodos(prev =>
            {
                const newJobs = [...prev,{id: (todos.length + 1) ,task: task , discrip : discrip,date : date, status : false}]

                const jsonJobs = JSON.stringify(newJobs)
                localStorage.setItem('jobs', jsonJobs)

                return newJobs
            })
            setTask('')
            setDate('')
            setDiscrip('')
            setShow(false)
        }else{
            alert("Vui lòng diền đây đủ")
        }    
        console.log(todos)
    }

    return(
        <div className='container-fluid'>
            <nav className="navbar navbar-light">
            <h2>Inbox</h2>
            </nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-9 bg' style={{background:"black",height:"1px"}}></div>
                </div>
            </div>
            <div className='mt-2'>
            <button className='btn btn-light' onClick={() => setShow(true)}>
                    <FaPlus className='m-2'/>
                    <span className=''>Add task</span>
                </button>
            </div>
            <div className='mt-2'>
                {show? <div className='container-fluid' >
                    <div className='container' style={{border:"1px solid black",width:"922px",height:"140px",borderRadius:"5px"}}>
                    <div className='mt-2'>
                        <input placeholder='Task name' className='form-control' value={task} onChange={(event) => setTask(event.target.value)} style={{width:"900px", height:"30px",border:"none"}}/>
                    </div>
                    <div className='mt-2'>
                        <input className='form-control' value={discrip} onChange={(event) => setDiscrip(event.target.value)} placeholder='Description' style={{width:"900px", height:"40px",border:"hidden"}}/>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-2'>
                            <button className='btn btn-light' onClick={() => setShowDate(!showdate)}><span>Due Date</span></button>
                            <div className='row'>
                                <div className='col-12'>
                                    {showdate? <div className='container mt-2'>
                                        <div className='row mt-2'>
                                            <div className='col-3'>
                                            <input  style={{border:""}} type="date" value={date} onChange={(event) => setDate(event.target.value)} />
                                            </div>
                                        </div>
                                    </div> : null}
                                </div>
                            </div>
                        </div>
                        <div className='col-10 text-end'>
                            {date}
                        </div>
                    </div>
                    </div>
                    <div className='col-12 d-flex justify-content-end'>
                        <button className='btn btn-secondary m-2' onClick={() => setShow(false)}>Cancel</button>
                        <button className='btn btn-danger m-2' onClick={handleAdd}>Add task</button>
                    </div>
                </div> : null}
            </div>
            <div className='container-fluid'>
                <table className='table'>
                    <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Task</th>
                        <th scope="col">Description</th>
                        <th scope="col">Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo,index) => (<tr>
                                                    <th scope="row" key={index}></th>
                                                    <td>{todo.task}</td>
                                                    <td>{todo.discrip}</td>
                                                    <td>{todo.date}</td>
                                                    <td>     
                                                    <button onClick={() => handleDelete(todo)} className="btn btn-light">Delete</button>    
                                                    <button title='Completed / Not Completed' className='btn btn-light' onClick={(e) => handleComplete(todo)}>Complete</button>
                                                    </td>
                                                    </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}
export default Inbox;
