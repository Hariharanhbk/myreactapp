import { useState } from "react";
import User from "./User";

function List() {
  const usersList = [
    { id: 1, name: "hari", desingnation: "developer" },
    { id: 2, name: "arun", desingnation: "developer" },
    { id: 3, name: "bharathi", desingnation: "developer" },
    { id: 4, name: "maddy", desingnation: "developer" },
    { id: 5, name: "suriya", desingnation: "developer" },
  ];
  const [users, setUsers] = useState(usersList);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center mb-3">List of employees</h1>
          {users.map((user) => (
            <User key={user.id} user={user}></User>
          ))}
        </div>
      </div>
    </div>
  );
}


export default List;
