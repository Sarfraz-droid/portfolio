import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Components/LandingPage/Home";
import Design from "./Components/Design/Design"
import Developer from "./Components/Developer/Developer"

import "./scss/global.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Home />

        <Switch>
          <Route path="/design">
            <Design />
          </Route>
          <Route path="/developer">
            <Developer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
