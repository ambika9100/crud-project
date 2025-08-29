import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddUser from "./Users/AddUser";
import EditUser from "./Users/EditUser";
import Home from "./pages/Home";
import Navbar from "./layout/Navbar";
import ViewUser from "./Users/ViewUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser/>}/>
          <Route exact path="/edituser/:id" element={<EditUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
