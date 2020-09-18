import React from 'react';
import Home from './page/home';
import Contact from './page/contactus';
import './css/styles.css'
import {  Route, Switch } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/contactus" component={Contact} />
                
            </Switch>
            </div>
        )
    }
}
export default App;
