import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Components/LandingPage/Home";
import HomeMobile from "./Components/LandingPage/HomeMobile"
import Design from "./Components/Design/Design"
import Developer from "./Components/Developer/Developer"

import { useMediaQuery } from 'react-responsive'

import "./scss/global.scss";
function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className="App">
      <Router>
        { !isTabletOrMobile ? <Home /> : <HomeMobile /> }

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
