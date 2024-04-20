import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users,setUsers]=useState(loadedUsers)

    const handleDelete = (_id) => {
        console.log('Delete', _id)
        
        fetch(`http://localhost:5005/users/${_id}`,{
            method: "DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount){
                alert('User Deleted Sucessfully');

                const remainingUsers=users.filter(user=>user._id !== _id);
                setUsers(remainingUsers)
            }
        })
    }

    return (
        <div>
            <div>
                <h3>Total Uers: {users.length}</h3>
                <div>
                    {
                        users.map(user =>
                            <li key={user._id}>
                                Name: {user.name} &nbsp; 
                                Email: {user.email} &nbsp; 
                                Id: {user._id} &nbsp; 
                                <Link to={`/update/${user._id}`}><button className="btn btn-ghost border border-gray-500 rounded-xl">Update</button></Link> &nbsp; 
                                <button onClick={() => handleDelete(user._id)} className="btn btn-ghost">X</button></li>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Users;