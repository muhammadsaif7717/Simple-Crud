import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <>
            <Helmet>
                <title>Template | About</title>
            </Helmet>

            <div className="my-10">
                <h1 className="text-center text-2xl font-bold">This Is About</h1>
            </div>
        </>
    );
};

export default About;