function TodoUser({user,index,deleteEmployee}) {

    const {name,desingnation} = user;

    const deleteUser =()=>{
      deleteEmployee();
    }
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h6>{name}</h6>
        <p>{desingnation}</p>
        <div>
        <button className="btn btn-sm btn-warning">edit</button>
        <button className="btn btn-sm btn-danger ms-2" onClick={()=>{deleteUser(index)}}>delete</button>
        </div>
        
      </div>
    </div>
  );
}

export default TodoUser;
