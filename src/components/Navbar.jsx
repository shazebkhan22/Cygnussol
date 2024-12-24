import { NavLink, useNavigate, Link} from "react-router-dom";
import { useState } from "react";
import cygnusLogo from "../assets/logo/cygnus.png";
import anim1 from "../assets/anim/ai1.mp4";
import anim2 from "../assets/anim/ai2.mp4";
import anim3 from "../assets/anim/ai3.mp4";
import anim4 from "../assets/anim/ai4.mp4";
import anim5 from "../assets/anim/ai5.mp4";
import anim6 from "../assets/anim/ai1.mp4";

const Navbar = () => {
  const navigate = useNavigate();
  const [showSolution, setShowSolution] = useState(false);
  const [showCase, setShowCase] = useState(false);

  return (
    <div className="h-20 px-6 py-4 flex justify-evenly items-center">
      <div>
        <img
          onClick={() => navigate("/")}
          src={cygnusLogo}
          alt="Logo"
          className="h-10 cursor-pointer"
        />
      </div>
      <ul className="flex gap-10 relative">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-800 font-semibold" : "text-gray-800"
          }
        >
          HOME
        </NavLink>
        <div
          className="relative"
          onMouseEnter={() => setShowSolution(true)}
          onMouseLeave={() => setShowSolution(false)}
        >
          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              isActive ? "text-blue-800 font-semibold" : "text-gray-800"
            }
          >
            SOLUTIONS
          </NavLink>
          {showSolution && (
            <div className="absolute w-48 left-0 bg-white border border-gray-300 shadow-lg rounded-xl py-2 z-10">
              {[
                {label: "Infrastructure",path: "/solutions#infrastructure",imgSrc: anim1},
                { label: "Security", path: "/solutions#security",imgSrc: anim2 },
                { label: "HPC", path: "/solutions#hpc", imgSrc: anim3},
                { label: "Cloud", path: "/solutions#cloud",imgSrc: anim4 },
                { label: "AI/ML", path: "/solutions#ai-ml",imgSrc: anim5 },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => navigate(item.path)}
                  className="flex items-center w-full mb-2 px-4 py-2 text-left hover:bg-blue-400 hover:text-white text-gray-800"
                >
                  <img
                    src={item.imgSrc}
                    alt={item.label}
                    className="h-8 w-8 mr-3"
                  />
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <NavLink
          to="/industries"
          className={({ isActive }) =>
            isActive ? "text-blue-800 font-semibold" : "text-gray-800"
          }
        >
          INDUSTRIES
        </NavLink>
        <div
          className="relative"
          onMouseEnter={() => setShowCase(true)}
          onMouseLeave={() => setShowCase(false)}
        >
          <NavLink
            to="/casestudies"
            className={({ isActive }) =>
              isActive ? "text-blue-800 font-semibold" : "text-gray-800"
            }
          >
            CASE STUDIES
          </NavLink>
          {showCase && (
            <div className="absolute w-48 left-0 bg-white border border-gray-300 shadow-lg rounded-xl py-2 z-10">
              {[
                { label: "ONGC", path: "/casestudies/hpc", imgSrc: anim6, },
                { label: "Saregama", path: "/casestudies/cloud", imgSrc: anim1, },
                { label: "AI/ML", path: "/casestudies/ai-ml", imgSrc: anim2 },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => navigate(item.path)}
                  className="flex items-center w-full mb-2 px-4 py-2 text-left hover:bg-blue-400 hover:text-white text-gray-800"
                >
                  <img
                    src={item.imgSrc}
                    alt={item.label}
                    className="h-8 w-8 mr-3"
                  />
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <NavLink
          to="/company"
          className={({ isActive }) =>
            isActive ? "text-blue-800 font-semibold" : "text-gray-800"
          }
        >
          COMPANY
        </NavLink>
      </ul>
      <button className="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          <Link to="/contact">Contact Us</Link>
        </button>
    </div>
  );
};

export default Navbar;
