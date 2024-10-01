import React from "react";
import './css/Component1.css'


export default function Component2 (){
    return(
        <div>
            <h3 className="function-com">
                hello this is function component
            </h3>
        </div>
    );
}

 export  function Component3 (){
    return(
    <div>
        <h3>
            hello this is component 3
        </h3>
    </div>
    );
}

export class Component4 extends React.Component{
render(){
    return(
<div>
        <h3>
            hello this is component 4
        </h3>
    </div>
    )
}
}


