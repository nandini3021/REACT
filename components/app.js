import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 './Login';
 './Registration';
'./Posts';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route path="/posts" component={Posts} />
            </Switch>
        </Router>
    );
}

export default App;