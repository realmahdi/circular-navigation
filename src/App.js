import CircularNavigation from "./components/Navigation/CircularNavigation";
import {FaHome, FaMap, FaPersonBooth, FaSearch, FaStar} from "react-icons/fa";
import {IoIosNotifications} from 'react-icons/io'
import {BsFillPersonFill} from 'react-icons/bs'

function App() {
    const navigationModel = [
        {
            title: "Home",
            icon: <FaHome size={24}/>
        },
        {
            title: "Search",
            icon: <FaSearch size={24}/>
        },
        {
            title: "Notifications",
            icon: <IoIosNotifications size={24}/>
        },
        {
            title: "Profile",
            icon: <BsFillPersonFill size={24}/>
        },
    ]

    return (
        <div className="App w-[100vw] h-[100vh] flex items-center justify-center bg-cyan-200">
            <CircularNavigation model={navigationModel}/>
        </div>
    );
}

export default App;
