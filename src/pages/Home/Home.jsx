import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

 

const Home = () => {
    return (
        <div>

            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            {/* <h1 className="text-4xl font-bold"> This is Home</h1> */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border bg-slate-200">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 border bg-slate-200">
                    <h2 className="text-2xl">Breaking News Coming Soon........</h2>
                </div>
                <div className="border bg-slate-200">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;