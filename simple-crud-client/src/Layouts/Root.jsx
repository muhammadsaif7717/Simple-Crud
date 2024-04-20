// import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <>
            <div className="w-[95%] md:w-[80%] mx-auto font-poppins">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
};

export default Root;