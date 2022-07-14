import { useSelector } from "react-redux";

const ListUsers = () => {

const users = useSelector( store => store.users)
    return ( 
        <>

    {users.map( user =>(
            <div className="row justify-content-center my-3" key={user.id}>
            <div className="col-md-4">
            <div className="card card-body">
               <div className="row">
                <div className="col">
                <div> <h5 className="fw-bold">{user.name}</h5>
                <p>{user.email}</p>
                </div>
                </div>
               <div className="col align-self-center">
               <div>
                    <button className="btn btn-info btn-sm me-2">Edit user</button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                </div>
               </div>
               </div>
            </div>

            </div>

        </div>
    ))}

        
        
        </>
     );
}
 
export default ListUsers;