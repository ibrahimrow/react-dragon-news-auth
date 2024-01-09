
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

 

const LeftSideNav = () => {

    const [categoris, setcategories] = useState([]);


    useEffect(() =>{
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setcategories(data))
    },[])

    return (
        <div className=" space-y-10">
            <h2 className="text-2xl pl-5 font-bold">All Category</h2>
            {
                categoris.map(category => <Link className="block pl-5 text-xl font-semibold" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;