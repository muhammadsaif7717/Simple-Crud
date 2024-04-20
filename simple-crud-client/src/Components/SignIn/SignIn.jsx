import { Helmet } from "react-helmet-async";

const SignIn = () => {
    return (
        <>
            <Helmet>
                <title>Template | Sign In</title>
            </Helmet>

            <div className="my-10">
                <h1 className="text-center text-2xl font-bold">Please Sign In</h1>
            </div>
        </>
    );
};

export default SignIn;