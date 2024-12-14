import { NavLink , useNavigate } from "react-router-dom";
import cygnusLogo from "../assets/logo/cygnus.png"

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="h-20 px-6 py-4 flex justify-evenly items-center">
      <div>
        <img onClick={()=>navigate("/")} src={cygnusLogo} alt="Logo" className="h-10 cursor-pointer" />
      </div>
      <ul className="flex gap-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-800" : "text-gray-800"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/solutions"
          className={({ isActive }) =>
            isActive ? "text-blue-800" : "text-gray-800"
          }
        >
          SOLUTIONS
        </NavLink>
        <NavLink
          to="/industries"
          className={({ isActive }) =>
            isActive ? "text-blue-800" : "text-gray-800"
          }
        >
          INDUSTRIES
        </NavLink>
        <NavLink
          to="/casestudies"
          className={({ isActive }) =>
            isActive ? "text-blue-800" : "text-gray-800"
          }
        >
          CASE STUDIES
        </NavLink>
        <NavLink
          to="/company"
          className={({ isActive }) =>
            isActive ? "text-blue-800" : "text-gray-800"
          }
        >
          COMPANY
        </NavLink>
      </ul>
      <button className="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Contact Us</button>
    </div>
  );
};

export default Navbar;
