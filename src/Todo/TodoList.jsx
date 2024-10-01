import { useState } from "react";
import TodoUser from "./TodoUser";

function TodoList() {
   
  const [users, setUsers] = useState([]);
  const [formUserData, setformUserData] = useState({
    id:0,
    name: "",
    desingnation: "",
  });
  const onChangeInput= (event)=>{
    setformUserData({...formUserData,
     
      [event.target.name]:event.target.value,})
  }
  const addEmployee =(event)=>{
    event.preventDefault();
    setformUserData({...formUserData,id:users.length+1})
    console.log(formUserData)
    setUsers([...users,formUserData]);
    setformUserData({...formUserData,id:0,name:"",desingnation:""})
  }
const deleteEmployee = (index)=>{
  const copyArray = [...users];
  copyArray.splice(index,1);
  setUsers(copyArray);
}
  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-md-4">
        <form onSubmit={addEmployee}>
        <div className="card">
            <div className="card-body">
              <h4>add new employee</h4>
              <div>
                <div className="form-label">name</div>
                <input
                  type="text"
                  placeholder="name"
                  className="form-control"
                  name="name"
                  value={formUserData.name}
                  onChange={onChangeInput}
                  required
                />
              </div>
              <div className="mt-3">
                <div className="form-label">desingnation</div>
                <input
                  type="text"
                  placeholder="desingnation"
                  className="form-control"
                  name="desingnation"
                  value={formUserData.desingnation}
                  onChange={onChangeInput}
                  required
                />
              </div>
              <div className="mt-3">
                <button type="submit" className="btn btn-primary my-3" >add employee</button>
              </div>
            </div>
          </div>
        </form>
        </div>
        <div className="col-md-12">
          <h1 className="text-center mb-3">List of employees</h1>
          {users.map((user,index) => (
            <TodoUser key={index} user={user} index={index} deleteEmployee={deleteEmployee}></TodoUser>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
