import React from 'react';
import './DisplayName.css';

function displayName(props) {
   return(
        <div className="DisplayName">
            <h1 className="firstName">{props.displayName.firstName}</h1>
            <h4 className="lastName">{props.displayName.lastName}</h4>
        </div>
   );
}









export default displayName;