import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { client, isLoggedInVar } from "./apollo";
import { routes } from "./routes";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { SignUp } from "./screens/SignUp";
import { GlobalStyled } from "./styled";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <GlobalStyled />
        <Router>
          <Routes>
            <Route
              path={routes.home}
              element={isLoggedIn ? <Home /> : <Login />}
            />
            {isLoggedIn ? null : (
              <Route path={routes.signup} element={<SignUp />} />
            )}
            <Route path="/*" element={""} />
          </Routes>
        </Router>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
