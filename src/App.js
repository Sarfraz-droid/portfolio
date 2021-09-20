import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Components/LandingPage/Home";
import Design from "./Components/Design/Design"

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
