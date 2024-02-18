import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import "./App.css";
import Inicio from "./pages/index.jsx";
import AdminPage from "./pages/AdminPage/index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SilviaHelados" Component={Inicio} />
        <Route path="/SilviaHelados/adminpage" Component={AdminPage} />
      </Routes>
    </Router>
  );
}

export default App;
