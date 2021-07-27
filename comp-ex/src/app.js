import React, { Component } from 'react';
import './app.css';
import AlertUser from './components/AlertUser/AlertUser';
import DisplayName from './components/displayName/DisplayName';
import NamesList from './components/NamesList/NamesList';
import SuperHeroTable from './components/SuperTable/SuperTable';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie']
        }
        

    }

    render(){

        return(
            <div className="App">
                <DisplayName/>
                <NamesList namearr= {this.state.names}/>
                <AlertUser/>
                <SuperHeroTable/>

            </div>
        );
    }
}


export default App;