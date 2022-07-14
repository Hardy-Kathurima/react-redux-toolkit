import {  Routes , Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";




function App() {
  return (
    <div className="App">
    <div className="container">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/add-user" element={<AddUser/>}></Route>
      <Route path="/edit-user/:id" element={<EditUser/>}></Route>
     </Routes>
    </div>
    </div>
  );
}

export default App;
