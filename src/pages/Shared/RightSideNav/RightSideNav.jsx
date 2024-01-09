import { FaGoogle  } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold">Login With</h2>
                <button className="btn w-full btn-outline mt-2">
                   <FaGoogle></FaGoogle>
                   Login with Google
                </button>
                <button className="btn w-full btn-outline mt-2">
                    {/* <BsGithub></BsGithub> */}
                   Login with Google
                </button>
            </div>
            <div className="mt-5">
                <h2 className="text-3xl font-bold">Find Us</h2>
                <button className="btn w-full btn-outline mt-2">
                   <FaGoogle></FaGoogle>
                   Login with Google
                </button>
                <button className="btn w-full btn-outline mt-2">
                    {/* <BsGithub></BsGithub> */}
                   Login with Google
                </button>
            </div>
            <div>
            <h2 className="text-3xl font-bold mt-3">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;