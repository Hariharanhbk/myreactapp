import { Link,useParams } from "react-router-dom";
function Home (){
    const {name} =useParams()
    
return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h3 className="text-center">hello {name}</h3>
            </div>
        </div>
    </div>
)
}

export default Home ; 