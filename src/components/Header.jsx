import { Link, Routes , Route } from "react-router-dom";
const Header = () => {
    return ( 
        <>
        <h1 className="text-center my-3 fw-bold">Manage users using Redux Toolkit</h1>
        <hr />
        <div className="my-3">
        <Link to="/add-user">
        <button className="btn btn-primary">Add New User</button></Link>
      </div>
        
        </>
     );
}
 
export default Header;