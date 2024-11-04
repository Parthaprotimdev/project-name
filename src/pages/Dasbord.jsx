import PageDescription from "../components/PageDescription";
import PageHeading from "../components/PageHeading";

const Dasbord = () => {
  return (
    <section className="py-8 bg-[#9538E2]">
      <div
        className="mx-auto max-w-[80rem] px-4 min80:px-0
flex flex-col items-center gap-4"
      >
        <PageHeading>Dashboard</PageHeading>

        <PageDescription>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </PageDescription>

        <div className="flex gap-4 items-center mt-4">
          <button className="px-4 py-2 w-[10rem] text-white text-xl font-bold  bg-[#9538E2] border border-white rounded-[2rem]">
            Cart
          </button>
          <button className="px-4 py-2 w-[10rem] text-white text-xl font-bold  bg-[#9538E2] border border-white rounded-[2rem]">
            Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dasbord;
