import { useLoaderData } from "react-router-dom";

const Uodate = () => {
    const loadedUser = useLoaderData();

    const handleUpdate=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const updatedUser={name,email};
        console.log(updatedUser)
     

        fetch(`http://localhost:5005/users/${loadedUser._id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                alert('User updated successfully')
            }
        })
    }

    return (
        <div>
            <h1>Update user of: {loadedUser.name}</h1>
            <div>
                <form onSubmit={handleUpdate}>
                    <input type="text" name="name" defaultValue={loadedUser?.name} className="border" /><br />
                    <input type="email" name="email" defaultValue={loadedUser?.email} className="border" /><br />
                    <input type="submit" name="Update" className="btn btn-primary" />
                </form>
            </div>
        </div>
    );
};

export default Uodate;