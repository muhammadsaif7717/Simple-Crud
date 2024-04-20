import { Helmet } from "react-helmet-async";

const Home = () => {

    const handleAddUser = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);

        fetch('http://localhost:5005/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('User Inserted Successfully')
                    form.reset()
                }
            })
    }

    return (
        <>
            <Helmet>
                <title>Template | Home</title>
            </Helmet>

            <div className="my-10">
                <h1 className="text-center text-2xl font-bold">This Is Home</h1>
                <div>
                    <h1>Simple Crud</h1>
                    <form onSubmit={handleAddUser}>
                        <input type="text" name="name" className="border"/><br />
                        <input type="email" name="email" className="border" /><br />
                        <input type="submit" name="Add user" className="btn btn-primary" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Home;