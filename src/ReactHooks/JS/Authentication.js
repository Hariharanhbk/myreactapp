class Aunthentication {
          
   isUserLoggedIn=()=>{
    let user = this.getUsername();
   return user? true:false;
   }
   getUsername =()=>{
    let username;
    username=localStorage.getItem("loggedInUser");
    return username;
   }

   setUserLoggedIn =(username)=>{
   localStorage.setItem("loggedInUser",username)
   }

   removeUser =()=>{
    localStorage.removeItem("loggedInUser");
   }




}

export default new Aunthentication();