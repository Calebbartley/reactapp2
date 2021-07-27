import React from 'react';
import './SuperTable.css';

const SuperHeroTable = (props) => {


    return (
        <div>
            <table>
                <tr>
                    <th>SuperHero ID</th>
                    <th>Name</th>
                    <th>Primary Ability</th>
                    <th>Secondary Ability</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Batman</td>
                    <td>Wealthy</td>
                    <td>Rich</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>SuperMan</td>
                    <td>Super Strength</td>
                    <td>Flying</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Spider-man</td>
                    <td>Spider senses</td>
                    <td>Shoots web</td>
                </tr>
            </table>

        </div>
    )
}





export default SuperHeroTable;