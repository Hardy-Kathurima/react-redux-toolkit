import { useState } from "react";
import { useDispatch } from "react-redux";
import {  Link,useNavigate } from "react-router-dom";
import { addUser } from "../features/users/UserSlice";
import { v4 as uuidv4} from 'uuid';

const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [values , setValues] = useState({
        name:'',
        email:''
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addUser({
            id:uuidv4(),
            name:values.name,
            email:values.email
        }));
        navigate('/');
    }
    return ( 
        <>

        <div className="row justify-content-center my-3">
            <div className="col-md-6 my-5 align-self-center">
            <div className="card card-body">
            <form onSubmit={handleSubmit}>
                   <div className="mb-3">
                   <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name"   className="form-control"
                    value={values.name}
                    onChange={(e)=>setValues({...values,name:e.target.value})}
                    
                    />
                   </div>
                   <div className="mb-3">
                   <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" name="email"  className="form-control"
                     value={values.email}
                     onChange={(e)=>setValues({...values,email:e.target.value})}
                    
                    />
                   </div>
                   <div>
                    <button className="btn btn-primary"  type="submit">Submit</button>
                    <Link to="/">
                    <button className="btn btn-secondary ms-3"  type="submit">Cancel</button>
                    </Link>
                   </div>


                </form>
            </div>
            </div>
        </div>
        
        </>
     );
}
 
export default AddUser;