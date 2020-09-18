import React from 'react';
import ReactDOM from 'react-dom';
import Home from './page/home';
import Contact from './page/contactus';
import {  Link,Route, Switch } from 'react-router-dom';

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
