import { Link } from "react-router-dom";
import Banner from "./Banner";
const Header = () => {
  return (
    <>
      <header className="max-w-[96rem] w-full mx-auto px-2 ">
        <div className="bg-[#9538E2] rounded-b-[2rem] pt-6 pb-[10rem] lg:pb-[16.752rem]">
          <section className="mx-auto max-w-[80rem] px-4 min80:px-0 flex flex-col items-center gap-6">
            <h1 className="max-w-[70rem] text-[#FFF] text-[2.5rem] leading-normal lg:text-[3.5rem] lg:leading-[4.5rem] font-bold text-center">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>

            <p className="max-w-[49.75rem] text-white text-base text-center text-pretty">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>

            {/* Action Button */}
            <Link
              to={"/dashboard"}
              className="px-[1.88rem] py-[.94rem] text-[#9538E2] bg-white text-xl font-bold rounded-[2rem]"
            >
              Shop Now
            </Link>
          </section>
        </div>
      </header>
      {/* banner */}

      <Banner></Banner>
    </>
  );
};

export default Header;
