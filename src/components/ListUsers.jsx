import { useSelector,useDispatch } from "react-redux";
import {  Link} from "react-router-dom";
import { deleteUser } from "../features/users/UserSlice";

const ListUsers = () => {

const dispatch = useDispatch();

const handleDelete = (id)=>{
    dispatch(deleteUser({id:id}));
    
}

const users = useSelector( store => store.users)
    return ( 
        <>

   
         {users.length > 0 ? (
         <>
         
         <div className="row justify-content-center my-3" >
            {users.map( user =>(
            <div className="col-md-6 mb-3" key={user.id}>
            <div className="card card-body">
               <div className="row">
                <div className="col">
                <div> <h5 className="fw-bold">{user.name}</h5>
                <p>{user.email}</p>
                </div>
                </div>
               <div className="col align-self-center">
               <div>
                    <Link to={`/edit-user/${user.id}`}>
                    <button className="btn btn-info btn-sm me-2">Edit user</button>
                    </Link>
                    <button className="btn btn-sm btn-danger" onClick={()=>handleDelete(user.id)}>Delete</button>
                </div>
               </div>
               </div>
            </div>

            </div>
            ))}

        </div>
         
         </>):(<div><h5 className="fw-bold text-center">No users available</h5></div>) }
    

        
        
        </>
     );
}
 
export default ListUsers;