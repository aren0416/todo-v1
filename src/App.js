import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";

function App() {
  const isLoggedIn = false;

  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={isLoggedIn ? <Home /> : <Login />} />
        {/* <Route path={routes.signup} element="" /> */}
        <Route path="/*" element={""} />
      </Routes>
    </Router>
  );
}

export default App;
