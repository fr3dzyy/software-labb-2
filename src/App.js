import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
         {/* <Route exact path="/popular" element={<Popular />} />
          <Route exact path="/toprated" element={<Toprated />} />
*/}

        </Routes>
      </Router>
    </>
  );
}

export default App;
