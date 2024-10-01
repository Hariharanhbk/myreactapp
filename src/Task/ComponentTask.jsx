import React, { useEffect, useRef, useState } from "react";
import ComponentTask1 from "./ComponentTask1";
import axios from "axios";
// function ComponentTask() {

//     return (
//       <div>
//         <h1>This is a Heading</h1>
//         <p>This is a paragraph explaining some content.</p>
//         <div>
//           <span>This is a span inside a div.</span>
//         </div>
//       </div>
//     );
// };

// function ComponentTask() {
//     return (
//       <div>
//         <h1>This is a Heading</h1>
//         <p>
//           <strong>Bold text</strong>,<em>italic text</em>, and<u>underlined text</u>
//         </p>
//         <p>
//           Visit <a href="https://www.facebook.com"target="_blank" rel="noopener noreferrer">
//             this website</a> for more information.
//         </p>
//         <ul>
//           <li>First item</li>
//           <li>Second item</li>
//           <li>Third item</li>
//         </ul>
//          <ol>
//           <li>Step one</li>
//           <li>Step two</li>
//           <li>Step three</li>
//         </ol>
//         <div>
//           <img src="D:\myreact2024\src\img\OIP.jpeg" alt="Placeholder" />
//         </div>
//       </div>
//     );
//   }

//  function ComponentTask(){
//     return (
//       <div>
//         <h2>User Information Table</h2>
//         <table border="1" cellPadding="10" cellSpacing="0">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th colSpan="2">Contact Info</th>
//               <th>Designation</th>
//             </tr>
//             <tr>
//               <th></th>
//               <th></th>
//               <th>Country Code</th>
//               <th>Mobile Number</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td rowSpan="2">1</td>
//               <td>hari</td>
//               <td>+91</td>
//               <td>1234567890</td>
//               <td>Software Engineer</td>
//             </tr>
//             <tr>
//               <td>arun</td>
//               <td>+91</td>
//               <td>9876543210</td>
//               <td>Product Manager</td>
//             </tr>
//             <tr>
//               <td>2</td>
//               <td>suriya</td>
//               <td>+91</td>
//               <td>1231231231</td>
//               <td>Designer</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     );
//   }

// import '.src/Task/Task.css';
// function ComponentTask(){
//     return (
//       <div className="card">
//         <h2>Registration Form</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" name="name" placeholder="Enter your name" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="age">Age:</label>
//             <input type="number" id="age" name="age" placeholder="Enter your age" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" name="email" placeholder="Enter your email" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="dob">Date of Birth:</label>
//             <input type="date" id="dob" name="dob" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="gender">Gender:</label>
//             <select id="gender" name="gender">
//               <option value="">Select</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label>Preferred Contact Method:</label>
//             <div>
//               <input type="radio" id="contactEmail" name="contact" value="email" />
//               <label htmlFor="contactEmail">Email</label>
//             </div>
//             <div>
//               <input type="radio" id="contactPhone" name="contact" value="phone" />
//               <label htmlFor="contactPhone">Phone</label>
//             </div>
//           </div>
//           <div className="form-group">
//             <label>Subscribe to Newsletter:</label>
//             <div>
//               <input type="checkbox" id="newsletter" name="newsletter" />
//               <label htmlFor="newsletter">Yes, I want to subscribe</label>
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="bio">Bio:</label>
//             <textarea id="bio" name="bio" rows="4" placeholder="Tell us about yourself"></textarea>
//           </div>
//           <div className="form-group">
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//     );
//   }

// class ComponentTask extends React.Component{
//  componentDidMount(){
//     alert("Component has been rendered for the first time")
//  }
//  render(){
//     return(
//         <div>
//             <h2>hello world</h2>
//         </div>
//     )
//  }
// }

// login form unconstrolled
// function ComponentTask(){
// const usernameref =useRef();
// const passwordref =useRef();
// const loginbtnref =useRef();
// const Loginbtn =(event)=>{
// event.preventDefault();
// console.log(usernameref.current.value);
// console.log(passwordref.current.value);
// }

//     return(
//      <form>
//         <input type="text"  placeholder="username" ref={usernameref}/>
//         <input type="text"  placeholder="username" ref={passwordref}/>
//         <button ref={loginbtnref} onClick={Loginbtn}>login</button>
//      </form>
//     )
// }

// controlled
// function Register() {
//     const [user,setUser]=useState({
//         username:"",
//         mobile : "",
//         mail: "",
//         password:""
//     })
//     const registerBtn=(event)=>{
//          event.preventDefault();
//          console.log(user)
//     }
//     const onChangeUser =(event)=>{
//         setUser({
//             ...user,[event.target.name]:event.target.value
//         })
//     }
//     return(
//         <form>
//             <input type="text" placeholder="username" name="username" value={user.username} onChange={onChangeUser}/>
//             <input type="text" placeholder="mobile" name="mobile" value={user.mobile} onChange={onChangeUser}/>
//             <input type="text" placeholder="mail" name="mail" value={user.mail} onChange={onChangeUser}/>
//             <input type="text" placeholder="password" name="password" value={user.password} onChange={onChangeUser}/>
//             <button onClick={registerBtn}>register</button>
//         </form>
//     )
//   }





// function ComponentTask (){
 
// const [users,setUsers]=useState([]);
// useEffect(()=>{
//     fetchData();
// },[])
// const fetchData=()=>{
//   axios.get("https://fakestoreapi.com/products").then((Response)=>{
//     setUsers(Response.data)
//   })
// }
//     return(
//         <>
//         {users.map((user)=>(
//             <ComponentTask1 key={user.id} user={user}></ComponentTask1>
//         )) 
//         }

//   </>
//     )
// }

// export default ComponentTask;
