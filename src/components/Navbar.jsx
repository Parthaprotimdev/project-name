import { Link, NavLink, useLocation } from "react-router-dom";
import { LuShoppingCart, LuUser, LuHeart } from "react-icons/lu";
import Menu from "./Menu";

const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/" ? true : false;

  return (
    <nav className="max-w-[96rem] w-full mx-auto px-2">
      <div className={isHome ? "bg-[#9538E2] rounded-t-[2rem]" : ""}>
        <section
          className="mx-auto max-width-[80rem] px-4 min-[80rem]:px-0
 py-6 mt-6 flex items-center justify-between"
        >
          {/* logo */}
          <Link
            to={"/"}
            className={`text-xl font-bold ${
              isHome ? "text-white" : "text-[#09080F]"
            }`}
          >
            Gadget Heaven
          </Link>

          {/* navigation */}
          <ul
            className={`hidden max-w-[20rem] w-full text-base font-bold md:flex items-center justify-between gap-2 
              ${isHome ? "text-white" : "text-[#09080F]"}`}
          >
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to={"/statistics"}
              className={({ isActive }) => (isActive ? "text-[#9538E2]" : "")}
            >
              Statistics
            </NavLink>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) => (isActive ? "text-[#9538E2]" : "")}
            >
              Dashboard
            </NavLink>
          </ul>

          {/* Cart and wishlist icon */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* cart */}
            <div className="indicator">
              <span className="indicator-item badge border-none bg-[#ead7fd] text-[#9538E2] font-semibold">
                15
              </span>
              <NavLink
                to={"/user"}
                className={({ isActive }) =>
                  `size-10 rounded-full border border-solid flex items-center justify-center bg-white ${
                    isActive ? "border-[#9538E2] text-[#9538E2]" : ""
                  }`
                }
              >
                <LuShoppingCart className="text-xl" />
              </NavLink>
            </div>

            {/* wishlist */}
            <div className="indicator">
              <span className="indicator-item badge border-none bg-[#ead7fd] text-[#9538E2] font-semibold">
                10
              </span>
              <NavLink
                to={"/user"}
                className={({ isActive }) =>
                  `size-10 rounded-full border border-solid flex items-center justify-center bg-white ${
                    isActive ? "border-[#9538E2] text-[#9538E2]" : ""
                  }`
                }
              >
                <LuHeart className="text-xl" />
              </NavLink>
            </div>

            {/* user icon */}
            <NavLink
              to={"/user"}
              className={({ isActive }) =>
                `size-10 rounded-full border border-solid flex items-center justify-center bg-white ${
                  isActive ? "border-[#9538E2] text-[#9538E2]" : ""
                }`
              }
            >
              <LuUser className="text-xl" />
            </NavLink>

            {/* Mobile menu */}
            <Menu isHome={isHome} />
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
