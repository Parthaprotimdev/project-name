import banner from "../assets/image/banner.png";

const Banner = () => {
  return (
    <section className="mx-auto max-width-[80rem] px-4 min-[80rem]:px-0 -mt-[8rem] lg:-mt-[13.5rem]">
      <div className="p-3 lg:p-6 mx-auto max-w-[69.375rem] w-full max-h-[38.1875rem] border-[3px] border-solid border-white bg-[#FFFFFF4D] rounded-[2rem] lg:rounded-[4rem]">
        <img
          className="w-full h-full object-cover rounded-[2rem]"
          src={banner}
          alt="VR"
        />
      </div>
    </section>
  );
};

export default Banner;
