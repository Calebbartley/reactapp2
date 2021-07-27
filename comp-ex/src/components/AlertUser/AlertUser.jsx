import React, {Component} from 'react';

class AlertUser extends Component{

    Click = "Click Me"

    display= ()=>{
        alert("DevCodeCamp")
    }

    render (){
        return(
            <div>
                <div></div>
                <button style={{backgroundColor:'lightblue'}} onClick={this.display}>SUPERHERO GENERATOR</button>
            </div>
        )
    }

}








export default AlertUser;