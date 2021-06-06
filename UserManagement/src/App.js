import React from 'react'
import UserProfile from "./Pages/UserProfile"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={UserProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
