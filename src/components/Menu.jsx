import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";

const Menu = ({ isHome }) => {
  return (
    <div className="dropdown dropdown-end md:hidden">
      {/* <!-- hamburger icon --> */}
      <div tabIndex="0" role="button" className="">
        <LuMenu
          className={`text-4xl ${isHome ? "text-white" : "text-[#9538E2]"}`}
        />
      </div>

      {/* <!-- links --> */}
      <ul
        tabIndex="0"
        className="dropdown-content flex flex-col gap-1 items-center bg-slate-200 text-[#9538E2] rounded-box z-[1] mt-3 w-52 p-4 shadow"
      >
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/statistics"}
          className={({ isActive }) => (isActive ? "text-[#09080F]" : "")}
        >
          Statistics
        </NavLink>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) => (isActive ? "text-[#09080F]" : "")}
        >
          Dashboard
        </NavLink>
      </ul>
    </div>
  );
};

export default Menu;
