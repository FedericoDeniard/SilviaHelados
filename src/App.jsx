import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Inicio from "./pages/index.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio} />
      </Switch>
    </Router>
  );
}

export default App;
