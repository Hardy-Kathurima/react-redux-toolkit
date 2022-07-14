import {  Link } from "react-router-dom";

const AddUser = () => {
    return ( 
        <>

        <div className="row justify-content-center my-3">
            <div className="col-md-6 my-5 align-self-center">
            <div className="card card-body">
            <form>
                   <div className="mb-3">
                   <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name"  className="form-control"/>
                   </div>
                   <div className="mb-3">
                   <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" name="email"  className="form-control"/>
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