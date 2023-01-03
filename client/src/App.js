import Header from "./comoponents/Header/Header.js";
import Home from "./comoponents/Home/Home.js";
import Login from "./comoponents/Home/Login.js";
import Admin from "./comoponents/Admin/Admin.js";
import Manager from "./comoponents/Manager/Manager.js";
import Employee from "./comoponents/Employee/Employee.js";
import Error from "./comoponents/Error/Error.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Login />} />
        <Route path="/admin/:id" element={<Admin />} />
        <Route path="/manager/:id" element={<Manager />} />
        <Route path="/employee/:id" element={<Employee />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
