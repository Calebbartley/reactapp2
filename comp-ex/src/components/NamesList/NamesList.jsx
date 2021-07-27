import React from 'react';

const NamesList = (props) => {



    return (
        <ol>

            {props.namearr.map((name) => (
                <li><p>{name}</p></li>
            ))}



        </ol>
     );
}

export default NamesList;




