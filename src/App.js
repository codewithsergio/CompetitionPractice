import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Buildings from './Buildings';
import BuildingInfo from './BuildingInfo';
import Login from './Login';

function App() {
  const [user, setUser] = useState([]);
  return (
      <div className="app">
        {!user[0] ? (
          <Login setter={setUser}/>
        ) : (
          <>
          <Router>
            <div className="main__page">
              <Switch>
                <Route exact path="/">
                  <Buildings />
                </Route>
                <Route exact path="/jacaranda">
                  <BuildingInfo user={user} name={"Jacaranda"}/>
                </Route>
                <Route exact path="/Sequoia Hall">
                  <BuildingInfo user={user} name={"Sequoia Hall"} />
                </Route>
                <Route exact path="/Live Oak">
                  <BuildingInfo user={user} name={"Live Oak"} />
                </Route>
                <Route exact path="/Cypress Hall">
                  <BuildingInfo user={user} name={"Cypress Hall"} />
                </Route>
                <Route exact path="/Jerome Richfield">
                  <BuildingInfo user={user} name={"Jermose Richfield"} />
                </Route>
                <Route exact path="/Bayramian Hall">
                  <BuildingInfo user={user} name={"Bayramian Hall"} />
                </Route>
                <Route exact path="/Eucalyptus Hall">
                  <BuildingInfo user={user} name={"Eucalyptus Hall"} />
                </Route>
                <Route exact path="/Extended Learning University">
                  <BuildingInfo user={user} name={"Extended Learning University"} />
                </Route>
                <Route exact path="/Bookstein Hall">
                  <BuildingInfo user={user} name={"Bookstein Hall"} />
                </Route>
                <Route exact path="/Manzanita Hall">
                  <BuildingInfo user={user} name={"Manzanita Hall"} />
                </Route>
              </Switch>
            </div>
          </Router>
          </>
        )}
      </div>
  );
}

export default App;
